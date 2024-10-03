<!-- 
 @component
   A stack component that arranges its children in a row or column.
  -->
<script lang="ts">
   import { type Snippet } from 'svelte'

   interface StackProps {
      /**
       * The children of the stack. Required
       */
      children: Snippet
      /**
       * The direction of the stack.
       * @default 'column'
       */
      flexDirection?: 'row' | 'column'
      /**
       * The gap between the children.
       * @default '1rem'
       */
      gap?: string
      /**
       * The background color of the stack.
       * @default 'none'
       */
      backgroundColor?: string
      /**
       * The width of the stack.
       * @default 'auto'
       */
      width?: string
      /**
       * The padding
       * @default '1rem'
       */
      padding?: string
      /**
       * The border radius
       * @default '10px'
       */
      borderRadius?: string
      /**
       * The margin
       * @default '1rem'
       */
      margin?: string
      /**
       * The border
       * @default 'none'
       */
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
