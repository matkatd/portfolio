<script lang="ts">
   import type { Editor } from '@tiptap/core'
   import { Modal } from 'flowbite-svelte'

   let { showModal = false, editor }: { showModal: boolean; editor: Editor } =
      $props()
   let dialog = $state<HTMLFormElement>()
   let href = $state(editor.getAttributes('link').href ?? '')

   $effect(() => {
      if (dialog && showModal) {
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
      showModal = false
   }

   const handleSubmitLink = () => {
      dialog?.close(href)
   }

   const handleRemoveLink = () => {
      // TODO: This is not working
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      dialog?.setAttribute('returnValue', '')
      dialog?.close(dialog.returnValue)
   }
</script>

<Modal
   bind:open={showModal}
   size="xs"
   autoclose={false}
   title="Link"
   class="w-full"
>
   <form>
      <label for="link">Enter URL for Link</label>
      <input bind:value={href} type="text" id="link" />
      <div class="dialog-buttons">
         <button id="cancel" value="cancel" formMethod="dialog">
            Cancel
         </button>
         <button
            id="remove"
            class="remove-button"
            value="remove"
            formMethod="dialog"
         >
            Remove Link
         </button>
         <button id="confirmBtn" class="confirm-button" value="default">
            Confirm
         </button>
      </div>
   </form>
</Modal>

<!-- inspired by https://svelte.dev/examples/modal
<dialog bind:this={dialog} onclose={handleCloseLinkForm}>
   <form>
      <label for="link">Enter URL for Link</label>
      <input bind:value={href} type="text" id="link" />
      <div class="dialog-buttons">
         <button id="cancel" value="cancel" formMethod="dialog">
            Cancel
         </button>
         <button
            id="remove"
            class="remove-button"
            value="remove"
            formMethod="dialog"
            onclick={handleRemoveLink}
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
   dialog {
      max-width: 32rem;
      border-radius: 0.2rem;
      border: none;
      padding: 0;
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
</style> -->
