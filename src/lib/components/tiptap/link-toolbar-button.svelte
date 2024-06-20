<script lang="ts">
   import type { Editor } from '@tiptap/core'
   import type { Snippet } from 'svelte'
   import LinkDialog from './link-dialog.svelte'
   import ToolBarButton from './tool-bar-button.svelte'

   type LinkToolbarButtonProps = {
      editor: Editor
   }
   const { editor }: LinkToolbarButtonProps = $props()
   let isOpen = $state(false)
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<ToolBarButton
   title="Link"
   onclick={() => (isOpen = true)}
   classActive={editor.isActive('link')}
>
   <!-- TODO: this only works the first time it is pressed on page load. 
           figure out why it doesn't work after the first time
-->
   <iconify-icon icon="fa6-solid:link"></iconify-icon>
</ToolBarButton>

<LinkDialog {editor} showModal={isOpen} />
