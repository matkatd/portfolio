<script lang="ts">
  import type { NodeViewProps } from "@tiptap/core";

  import { NodeViewContent, NodeViewWrapper } from "svelte-tiptap";

  let {
    attrs,
    updateAttributes,
    extension,
  }: {
    attrs: NodeViewProps["node"]["attrs"];
    updateAttributes: NodeViewProps["updateAttributes"];
    extension: any;
  } = $props();

  const handleChange = (event: Event) => {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    updateAttributes({ language: selectedLanguage });
  };
</script>

<NodeViewWrapper class="code-block">
  <select
    contenteditable="false"
    bind:value={attrs.defaultLanguage}
    onchange={handleChange}
  >
    <option value="null"> auto </option>
    <option disabled> --- </option>
    {#each extension.options.lowlight.listLanguages() as language}
      <option value={language}>
        {language}
      </option>
    {/each}
  </select>
  <pre>
    <NodeViewContent as="code" />
  </pre>
</NodeViewWrapper>

<style>
  :global {
    .tiptap {
      .code-block {
        position: relative;

        select {
          position: absolute;
          background-color: var(--white);
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="Black" d="M7 10l5 5 5-5z"/></svg>');
          right: 0.5rem;
          top: 0.5rem;
        }
      }
    }
  }
</style>
