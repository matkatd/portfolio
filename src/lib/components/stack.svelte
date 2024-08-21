<script lang="ts">
   import { type Snippet } from 'svelte'

   interface StackProps {
      children: Snippet
      flexDirection?: 'row' | 'column'
      gap?: string
      backgroundColor?: string
      width?: string
      padding?: string
      borderRadius?: string
      margin?: string
      border?: string
   }

   const {
      border = 'none',
      width = 'auto',
      borderRadius = '10px',
      padding = '1rem',
      margin = '1rem',
      backgroundColor = 'none',
      gap = '1rem',
      children,
      flexDirection = 'column',
   }: StackProps = $props()
</script>

<div
   class="stack"
   style:width
   style:border-radius={borderRadius}
   style:flex-direction={flexDirection}
   style:gap
   style:background-color={backgroundColor}
   style:padding
   style:margin
   style:border
>
   {@render children()}
</div>

<style>
   .stack {
      display: flex;
   }
</style>
