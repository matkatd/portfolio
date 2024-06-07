import { lucia } from "$lib/server/auth";
import { client } from "$lib/server/db.server";
import { redirect, type Actions } from "@sveltejs/kit";
import { fail, superValidate } from "sveltekit-superforms";
import { yup } from "sveltekit-superforms/adapters";
import { object, string } from "yup";
import type { PageServerLoad } from "./$types";

const schema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(yup(schema));

  return { form };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event.request, yup(schema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const existingUser = await client.user.findUnique({
      where: {
        username: form.data.username.toLowerCase(),
      },
    });

    if (!existingUser) {
      // NOTE:
      // Returning immediately allows malicious actors to figure out valid usernames from response times,
      // allowing them to only focus on guessing passwords in brute-force attacks.
      // As a preventive measure, you may want to hash passwords even for invalid usernames.
      // However, valid usernames can be already be revealed with the signup page among other methods.
      // It will also be much more resource intensive.
      // Since protecting against this is non-trivial,
      // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
      // If usernames are public, you may outright tell the user that the username is invalid.
      return fail(400, {
        message: "Incorrect username or password",
      });
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes,
    });

    redirect(302, "/admin");
  },
};
