import { error, fail, redirect } from '@sveltejs/kit'

import { message, superValidate } from 'sveltekit-superforms'
import { yup } from 'sveltekit-superforms/adapters'
import { object, string } from 'yup'
import { hash } from '@node-rs/argon2'
import { client } from '$lib/server/db.server.js'

import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { Prisma } from '../../../generated/prisma/client'
import { auth } from '$lib/auth'

const schema = object({
   email: string().email('Invalid email address').required('Email is required'),
   username: string().required('Username is required'),
   password: string().required('Password is required'),
   firstName: string().required('First name is required'),
   lastName: string().required('Last name is required'),
})

export const load = async () => {
   const form = await superValidate(yup(schema))

   return { form }
}

export const actions = {
   default: async (event) => {
      const form = await superValidate(event.request, yup(schema))

      if (!form.valid) {
         return fail(400, { form })
      }

      const data = await auth.api.signUpEmail({
         body: {
            email: form.data.email,
            password: form.data.password,
            name: `${form.data.firstName} ${form.data.lastName}`,
            username: form.data.username,
            displayUsername: form.data.username,
         },
      })
      // display a success status message
      redirect(302, '/admin')
   },
}
