<!-- 
 @component
   This component is the toolbar for the Tiptap editor.
  -->
<script lang="ts">
   import type { Editor } from '@tiptap/core'
   import 'iconify-icon'
   import ToolBarButton from './tool-bar-button.svelte'
   import LinkToolbarButton from './link-toolbar-button.svelte'

   const {
      editor,
   }: {
      /**
       * Reference to the Tiptap editor instance
       */
      editor: Editor
   } = $props()
   /**
    * The heading level options.
    */
   type Level = 1 | 2 | 3 | 4 | 5 | 6
</script>

{#if editor}
   <div class="tipex-controller">
      <div class="tipex-controller-wrapper">
         <div class="tipex-basic-controller-wrapper">
            {#each { length: 5 } as _, index}
               {@const level: Level  = (index + 2) as Level}
               <ToolBarButton
                  onclick={() =>
                     editor
                        ?.chain()
                        .focus()
                        .toggleHeading({ level: level })
                        .run()}
                  classActive={editor?.isActive('heading', { level })}
               >
                  H{level}
               </ToolBarButton>
            {/each}

            <ToolBarButton
               onclick={() => editor?.chain().focus().setParagraph().run()}
               classActive={editor?.isActive('paragraph')}
            >
               <iconify-icon icon="fa6-solid:paragraph"></iconify-icon>
            </ToolBarButton>

            <ToolBarButton
               onclick={() => editor?.chain().focus().toggleBold().run()}
               disabled={!editor.can().chain().focus().toggleBold().run()}
               classActive={editor?.isActive('bold')}
            >
               <iconify-icon icon="fa6-solid:bold"></iconify-icon>
            </ToolBarButton>

            <ToolBarButton
               onclick={() => editor?.chain().focus().toggleItalic().run()}
               classActive={editor?.isActive('italic')}
            >
               <iconify-icon icon="fa6-solid:italic"></iconify-icon>
            </ToolBarButton>

            <ToolBarButton
               onclick={() => editor?.chain().focus().toggleCode().run()}
               classActive={editor?.isActive('code')}
            >
               <iconify-icon icon="fa6-solid:code"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Clear Format"
               onclick={() => editor.chain().focus().unsetAllMarks().run()}
            >
               <iconify-icon icon="fa6-solid:eraser"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Bulleted List"
               onclick={() => editor.chain().focus().toggleBulletList().run()}
               classActive={editor.isActive('bulletList')}
            >
               <iconify-icon icon="fa6-solid:list-ul"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Numbered List"
               onclick={() => editor.chain().focus().toggleOrderedList().run()}
               classActive={editor.isActive('orderedList')}
            >
               <iconify-icon icon="fa6-solid:list-ol"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Code Block"
               onclick={() => editor.chain().focus().toggleCodeBlock().run()}
               classActive={editor.isActive('code_block')}
            >
               <iconify-icon icon="fa6-solid:laptop-code"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Block Quote"
               onclick={() => editor.chain().focus().toggleBlockquote().run()}
               classActive={editor.isActive('blockquote')}
            >
               <iconify-icon icon="fa6-solid:quote-left"></iconify-icon>
            </ToolBarButton>

            <LinkToolbarButton {editor}></LinkToolbarButton>

            <ToolBarButton
               title="Horizontal Rule"
               onclick={() => editor.chain().focus().setHorizontalRule().run()}
            >
               <iconify-icon icon="fa6-solid:window-minimize"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Line Break"
               onclick={() => editor.chain().focus().setHardBreak().run()}
            >
               <iconify-icon icon="fluent:document-page-break-24-regular"
               ></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Align Left"
               onclick={() => editor.chain().focus().setTextAlign('left').run()}
               classActive={editor.isActive({ textAlign: 'left' })}
            >
               <iconify-icon icon="fa6-solid:align-left"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Align Center"
               onclick={() =>
                  editor.chain().focus().setTextAlign('center').run()}
               classActive={editor.isActive({ textAlign: 'center' })}
            >
               <iconify-icon icon="fa6-solid:align-center"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Align Right"
               onclick={() =>
                  editor.chain().focus().setTextAlign('right').run()}
               classActive={editor.isActive({ textAlign: 'right' })}
            >
               <iconify-icon icon="fa6-solid:align-right"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Align Justify"
               onclick={() =>
                  editor.chain().focus().setTextAlign('justify').run()}
               classActive={editor.isActive({ textAlign: 'justify' })}
            >
               <iconify-icon icon="fa6-solid:align-justify"></iconify-icon>
            </ToolBarButton>

            <ToolBarButton
               title="Undo"
               onclick={() => editor.chain().focus().undo().run()}
               disabled={!editor.can().chain().focus().undo().run()}
            >
               <iconify-icon icon="fa6-solid:rotate-left"></iconify-icon>
            </ToolBarButton>
            <ToolBarButton
               title="Redo"
               onclick={() => editor.chain().focus().redo().run()}
               disabled={!editor.can().chain().focus().redo().run()}
            >
               <iconify-icon icon="fa6-solid:rotate-right"></iconify-icon>
            </ToolBarButton>
         </div>
      </div>
   </div>
{/if}

<style>
   .tipex-controller {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2;
   }

   .tipex-controller-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 2;
   }

   .tipex-basic-controller-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
   }
</style>
