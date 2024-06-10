<script lang="ts">
  import type { Snippet } from "svelte";

  let { href, children }: {href: string, children: Snippet} = $props();
</script>

<a href={href} class="button" >

   {@render children()}

</a>

<style>
  .button {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    background-color: #377EA6;
    color: #eceaea;
    text-decoration: none;
    /* font-family: var(--font-mono); */
    font-size: 1rem;
    transition: background-color 0.2s;
    &:hover {
      background-color: #1c6fa0;
      transition: background-color 0.2s;
    }
  }

</style>