<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children, title }: { children: Snippet; title: string } = $props()
</script>

<div class="terminal">
  <div class="terminal-toolbar">
    <div class="button-container">
      <div class="terminal-toolbar-button red"></div>
      <div class="terminal-toolbar-button yellow"></div>
      <div class="terminal-toolbar-button green"></div>
    </div>
    <span>{title}</span>
  </div>
  <div class="terminal-text">
    {@render children()}
  </div>
</div>

<style>
  .terminal {
    display: flex;
    flex-direction: column;
    background-color: #161616;
    color: #eceaea;
    border-radius: 0.5rem;

    margin: 3rem 1rem;
    box-shadow: 0 0 1rem 0 #0e0e0e;
    font-family: var(--font-mono);
  }

  .terminal-toolbar {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    /* justify-content: flex-start; */
    align-items: center;
    background-color: #333;
    height: 1.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem 0.5rem 0 0;

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: flex-start;
    }
    span {
      justify-self: flex-start;
    }
  }
  .terminal-toolbar-button {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    margin: 0.25rem;

    &.red {
      background-color: #f44336;
      &:hover {
        background-color: #be281d;
        transition: background-color 0.2s ease-in-out;
      }
    }
    &.yellow {
      background-color: #ffeb3b;
      &:hover {
        background-color: #b1a116;
        transition: background-color 0.2s ease-in-out;
      }
    }
    &.green {
      background-color: #4caf50;

      &:hover {
        background-color: #1e8021;
        transition: background-color 0.2s ease-in-out;
      }
    }
  }

  .terminal-text {
    padding: 1rem;
  }
</style>
