<script lang="ts">
   import './tiptap.css'
   import Tiptap from '$lib/components/tiptap/tiptap.svelte'
   import { superForm } from 'sveltekit-superforms'
   import Stack from '$lib/components/stack.svelte'
   let { data } = $props()
   const inputBackground = 'white'
   const { form, errors, constraints } = superForm(data.form)
</script>

<section class="page-content">
   <h2>Create New Project</h2>
   <Stack backgroundColor={'#e7e7e7'}>
      <Stack
         backgroundColor={inputBackground}
         border={'1px solid rgb(200, 200, 200)'}
      >
         <label for="title">Project Name</label>
         <input
            id="title"
            type="text"
            placeholder="Project Name"
            bind:value={$form.title}
            {...$constraints.title}
         />
         {#if $errors.title}
            <span class="invalid">{$errors.title}</span>
         {/if}
      </Stack>

      <Stack
         backgroundColor={inputBackground}
         border={'1px solid rgb(200, 200, 200)'}
      >
         <label for="slug">Slug</label>
         <input
            id="slug"
            type="text"
            placeholder="Slug"
            bind:value={$form.slug}
            {...$constraints.slug}
         />
         {#if $errors.slug}
            <span class="invalid">{$errors.slug}</span>
         {/if}
      </Stack>
      <Stack
         backgroundColor={inputBackground}
         border={'1px solid rgb(200, 200, 200)'}
      >
         <label for="img">Image</label>
         <input
            id="img"
            type="file"
            placeholder="Image"
            {...$constraints.img}
         />
         {#if $errors.img}
            <span class="invalid">{$errors.img}</span>
         {/if}
      </Stack>
      <Stack
         backgroundColor={inputBackground}
         border={'1px solid rgb(200, 200, 200)'}
      >
         <label for="alt">Alt Text</label>
         <input
            id="alt"
            type="text"
            placeholder="Alt Text"
            bind:value={$form.alt}
            {...$constraints.alt}
         />
         {#if $errors.alt}
            <span class="invalid">{$errors.alt}</span>
         {/if}
      </Stack>

      <Tiptap writeup={$form.writeup.join(' ')} />
   </Stack>
</section>

<!-- 
color: rgb(10, 10, 10);
      border: 1px solid rgb(200, 200, 200);
      border-radius: 10px;
-->
<style>
   label {
      color: black;
   }
   input {
      background-color: white;
      padding: 0.5rem;
      margin: 0.5rem 0;
      border-radius: 5px;
      border: 1px solid #ccc;
   }
   .invalid {
      color: red;
   }
</style>
