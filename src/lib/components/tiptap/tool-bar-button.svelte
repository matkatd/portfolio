<script lang="ts">
  import { createEventDispatcher, type Snippet, type SvelteComponent } from "svelte";
  import type { SvelteElement } from "svelte/compiler";

  interface ToolBarButtonProps   {
    title?: string;
    children: Snippet;
    onClick?: () => boolean;
    classActive?: boolean;
    disabled?: boolean

  }

  const {children, onClick, classActive, ...buttonProps}: ToolBarButtonProps = $props();
</script>

<button class="pushable" onclick={onClick}  {...buttonProps} >
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front" class:active={classActive}>
    {@render children()}
  </span>
</button>

<style>
  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(212, 100%, 10%) 0%,
      hsl(212, 100%, 16%) 8%,
      hsl(212 100% 16%) 92%,
      hsl(212 100% 10%) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    background: var(--color-theme-2);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .pushable:hover {
    filter: brightness(110%);
  }
  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .active {
    filter: brightness(70%);
    transform: translateY(0px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .pushable:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }



  </style>