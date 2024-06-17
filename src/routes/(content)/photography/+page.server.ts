import { client } from "$lib/server/db.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    post: await client.photography.findMany(),
  };
};
