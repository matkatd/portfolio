import { array, date, object, string } from 'yup'
import type { PageServerLoad } from './$types'
import { superValidate, fail } from 'sveltekit-superforms'
import { yup } from 'sveltekit-superforms/adapters'
import type { Actions } from '@sveltejs/kit'
import { client } from '$lib/server/db.server'

const schema = object({
   id: string().optional(),
   title: string().required('Title is required'),
   date: string().required('Date is required'),
   slug: string().required('Slug is required'),
   img: string().required('Please upload a cover image'),
   alt: string().required('Please add an alt text for the image'),
   writeup: array().of(string()).required('Writeup is required'),
})

export const load: PageServerLoad = async (data) => {
   const slug = data.params.project ?? ''

   const project = await client.projects.findFirst({
      where: {
         slug: slug,
      },
   })

   const form = await superValidate(project, yup(schema))

   return { form }
}

export const actions: Actions = {
   default: async (event) => {
      const form = await superValidate(event.request, yup(schema))

      if (!form.valid) {
         return fail(400, { form })
      }
      console.log(form.data)
   },
}
