import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { lucia } from "$lib/server/auth";

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) redirect(302, "/login");
  return {
    username: event.locals.user.username,
    pathname: event.url.pathname,
  };
};

export const actions = {
  default: async (event) => {
    if (!event.locals.session) {
      return fail(401, { message: "Unauthorized" });
    }
    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes,
    });
    redirect(302, "/login");
  },
};
