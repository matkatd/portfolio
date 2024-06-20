<script lang="ts">
  import type { Editor } from '@tiptap/core'

  const { showModal, editor }: { showModal: boolean; editor: Editor } = $props()
  let dialog = $state<HTMLDialogElement>()
  let href = $state('')

  $effect(() => {
    if (dialog && showModal) {
      dialog.showModal()
    }
  })

  const handleCloseLinkForm = () => {
    if (dialog?.returnValue === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    } else if (dialog?.returnValue === 'cancel') {
      return
    } else {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: dialog?.returnValue ?? '' })
        .run()
    }
  }

  const handleSubmitLink = () => {
    dialog?.close(href)
  }

  const handleRemoveLink = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
    dialog?.setAttribute('returnValue', '')
  }
</script>

<dialog bind:this={dialog} onclose={handleCloseLinkForm}>
  <form>
    <label for="link">Enter URL for Link</label>
    <input bind:value={href} type="text" id="link" />
    <div class="dialog-buttons">
      <button id="cancel" value="cancel" formMethod="dialog"> Cancel </button>
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
