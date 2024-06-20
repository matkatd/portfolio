<script lang="ts">
  import type { Editor } from '@tiptap/core'
  import type { Snippet } from 'svelte'

  type LinkToolbarButtonProps = {
    children: Snippet
    editor: Editor
  }
  const { children, editor }: LinkToolbarButtonProps = $props()
  const isOpen = $state(false)

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
  }
</script>

<div class="link-toolbar-button">
  {@render children()}
</div>
