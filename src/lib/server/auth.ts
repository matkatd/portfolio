import { betterAuth, minLength } from 'better-auth'
import { username, admin } from 'better-auth/plugins'
import { client } from './db.server'
import { prismaAdapter } from 'better-auth/adapters/prisma'

export const auth = betterAuth({
   database: prismaAdapter(client, {
      provider: 'mongodb',
   }),
   emailAndPassword: {
      enabled: true,
   },
   plugins: [username(), admin()],
})
