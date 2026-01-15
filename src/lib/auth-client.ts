import { env } from '$env/dynamic/public'
import { createAuthClient } from 'better-auth/svelte'
import { usernameClient, adminClient } from 'better-auth/client/plugins'
export const authClient = createAuthClient({
   /** The base URL of the server (optional if you're using the same domain) */
   baseURL: env.PUBLIC_BASE_URL || '',
   plugins: [usernameClient(), adminClient()],
})
