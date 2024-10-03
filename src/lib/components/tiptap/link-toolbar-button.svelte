<!-- 
 @component
 A toolbar button with extra functionality for the link tool.
  -->
<script lang="ts">
   import type { Editor } from '@tiptap/core'
   import ToolBarButton from './tool-bar-button.svelte'

   type LinkToolbarButtonProps = {
      editor: Editor
   }
   const { editor }: LinkToolbarButtonProps = $props()
   let isOpen = $state(false)
   let dialog = $state<HTMLDialogElement>()
   let href = $state(editor.getAttributes('link').href ?? '')

   $effect(() => {
      if (dialog && isOpen) {
         dialog.showModal()
      }
   })

   const handleCloseLinkForm = () => {
      const returnValue = dialog?.returnValue

      // Common operation to focus and extend link range
      const chain = editor.chain().focus().extendMarkRange('link')

      if (returnValue === '' || returnValue === 'cancel') {
         if (returnValue === '') {
            chain.unsetLink().run()
         }
      } else {
         chain.setLink({ href: returnValue ?? '' }).run()
      }
      isOpen = false
   }

   const handleSubmitLink = () => {
      dialog?.close(href)
   }

   const handleRemoveLink = () => {
      // TODO: This is not working
      editor.chain().focus().unsetLink().run()
      dialog?.setAttribute('returnValue', '')
      dialog?.close(dialog.returnValue)
   }
</script>

<ToolBarButton
   title="Link"
   onclick={() => (isOpen = true)}
   classActive={editor.isActive('link')}
>
   <iconify-icon icon="fa6-solid:link"></iconify-icon>
</ToolBarButton>

<!-- inspired by https://svelte.dev/examples/modal -->
<dialog bind:this={dialog} onclose={handleCloseLinkForm}>
   <form>
      <label for="link">Enter URL for Link</label>
      <input bind:value={href} type="text" id="link" />
      <div class="dialog-buttons">
         <button
            id="cancel"
            class="cancel-button"
            value="cancel"
            formMethod="dialog"
         >
            Cancel
         </button>
         <button
            id="remove"
            class="remove-button"
            value="remove"
            formMethod="dialog"
            onclick={handleRemoveLink}
            disabled={!editor.isActive('link')}
         >
            Remove Link
         </button>
         <button
            id="confirmBtn"
            class="confirm-button"
            value="default"
            onclick={handleSubmitLink}
         >
            Confirm
         </button>
      </div>
   </form>
</dialog>

<style>
   .cancel-button {
      background-color: #3988ff;
      color: white;
      border: none;
      border-radius: 0.2rem;
      padding: 0.5rem;
      /* Add hover animation */
      transition: background-color 0.3s;
      &:hover {
         background-color: #0c6ceb;
         transition: background-color 0.3s;
      }
      /* Add click animation */
      &:active {
         background-color: #60a1f7;
      }
   }
   .remove-button {
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 0.2rem;
      padding: 0.5rem;
      transition: background-color 0.3s;
      &:hover {
         background-color: #c41818;
         transition: background-color 0.3s;
      }
      &:active {
         background-color: #f8665c;
      }
   }
   .confirm-button {
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 0.2rem;
      padding: 0.5rem;
      transition: background-color 0.3s;
      &:hover {
         background-color: #277a27;
         transition: background-color 0.3s;
      }
      &:active {
         background-color: #63d667;
      }
   }
   .dialog-buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
   }
   form {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
   }
   dialog {
      max-width: 70ch;
      /* width: auto; */
      border-radius: 0.2rem;
      border: none;
      padding: 0;

      input {
         padding: 0.5rem;
         margin: 0.5rem 0;
         border: 1px solid #ccc;
         border-radius: 0.2rem;
         max-width: 60ch;
      }
   }

   dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.3);
   }

   dialog form {
      display: flex;
      flex-direction: column;
      padding: 1rem;
   }

   dialog[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
   }

   @keyframes zoom {
      from {
         transform: scale(0.85);
      }
      to {
         transform: scale(1);
      }
   }
   dialog[open]::backdrop {
      animation: fade 0.2s ease-out;
   }
   @keyframes fade {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
</style>
