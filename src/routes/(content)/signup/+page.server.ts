import { error, fail, redirect } from "@sveltejs/kit";
import { generateIdFromEntropySize } from "lucia";
import { message, superValidate } from "sveltekit-superforms";
import { yup } from "sveltekit-superforms/adapters";
import { object, string } from "yup";
import { hash } from "@node-rs/argon2";
import { client } from "$lib/server/db.server.js";
import { lucia } from "$lib/server/auth.js";
import { Prisma } from "@prisma/client";
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const schema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
});

export const load = async () => {
  const form = await superValidate(yup(schema));

  return { form };
};

export const actions = {
  default: async (event) => {
    const form = await superValidate(event.request, yup(schema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const userId = generateIdFromEntropySize(10);
    const passwordHash = await hash(form.data.password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    // TODO: check if username is already used

    try {
      await client.user.create({
        data: {
          id: userId,
          username: form.data.username,
          password: passwordHash,
          profile: {
            firstName: form.data.firstName,
            lastName: form.data.lastName,
          },
        },
      });
    } catch (e) {
      console.log(e);
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new user cannot be created with this email"
          );
        }
      }

      throw error(500, "An error occurred while creating the user");
    }

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes,
    });

    // display a success status message
    redirect(302, "/admin");
  },
};
