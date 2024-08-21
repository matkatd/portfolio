<script lang="ts">
   import { Editor } from '@tiptap/core'
   import CodeBlock from '@tiptap/extension-code-block'
   import Color from '@tiptap/extension-color'
   import Image from '@tiptap/extension-image'
   import Link from '@tiptap/extension-link'
   import ListItem from '@tiptap/extension-list-item'
   import TextAlign from '@tiptap/extension-text-align'
   import TextStyle from '@tiptap/extension-text-style'
   import StarterKit from '@tiptap/starter-kit'
   import { common, createLowlight } from 'lowlight'
   import { onDestroy, onMount } from 'svelte'
   import { SvelteNodeViewRenderer } from 'svelte-tiptap'
   import CodeBlockComponent from './code-block-component.svelte'
   import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
   import TiptapControls from './tiptap-controls.svelte'
   import Stack from '../stack.svelte'

   const lowlight = createLowlight(common)
   const { writeup }: { writeup: string } = $props()
   console.log('writeup', writeup)
   let element = $state<Element | undefined>(undefined)
   let editor = $state<Editor | undefined>(undefined)

   onMount(() => {
      editor = new Editor({
         element: element,
         extensions: [
            StarterKit.configure({
               bulletList: {
                  keepMarks: true,
                  keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
               },
               orderedList: {
                  keepMarks: true,
                  keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
               },
            }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextAlign.configure({
               types: ['heading', 'paragraph'],
            }),
            Link.configure({
               protocols: ['mailto'],
            }),
            CodeBlockLowlight.extend({
               addNodeView() {
                  return SvelteNodeViewRenderer(CodeBlockComponent)
               },
            }).configure({
               lowlight,
            }),
            Image,
         ],
         content: writeup ?? '<h2>Hello World!</h2>',
         onTransaction: () => {
            editor = editor
         },
      })
   })

   onDestroy(() => {
      if (editor) {
         editor.destroy()
      }
   })
</script>

<h1>Writeup</h1>
<Stack gap="2rem" flexDirection="column" backgroundColor="#e7e7e7">
   {#if editor}
      <TiptapControls {editor} />
   {/if}

   <div class="editor" bind:this={element}></div>
</Stack>

<style>
   .editor {
      background-color: rgb(245, 245, 245);
      color: rgb(10, 10, 10);
      border: 1px solid rgb(200, 200, 200);
      border-radius: 10px;
   }
</style>
