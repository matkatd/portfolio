<!-- 
 @component
 This page displays a single project.
  -->
<script lang="ts">
   import { env } from '$env/dynamic/public'

   let { data } = $props()

   import Stack from '$lib/components/stack.svelte'
   import Tiptap from '$lib/components/tiptap/tiptap.svelte'
</script>

<section class="page-content">
   <Stack>
      <h2>{data?.post?.title}</h2>
      <p>{data?.post?.date}</p>
      <img
         src={env.PUBLIC_STORAGE_URL + data?.post?.img}
         alt={data?.post?.alt}
      />
      <Tiptap readOnly={true} writeup={data?.post?.writeup?.join(' ') ?? ''} />
   </Stack>
</section>
