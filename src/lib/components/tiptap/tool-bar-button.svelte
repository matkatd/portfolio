<!-- 
 @component
   - This component is a button for the toolbar in the Tiptap editor.
   
 @example
```svelte
   <ToolBarButton
      title="Block Quote"
      onclick={() => editor.chain().focus().toggleBlockquote().run()}
      classActive={editor.isActive('blockquote')}
   >
      <iconify-icon icon="fa6-solid:quote-left"></iconify-icon>
   </ToolBarButton>
```
  -->
<script lang="ts">
   import { type Snippet } from 'svelte'

   interface ToolBarButtonProps {
      /**
       * The title of the button.
       */
      title?: string
      /**
       * The children of the button.
       */
      children: Snippet
      /**
       * The onclick event handler.
       */
      onclick?: () => boolean
      /**
       * Whether the button is active.
       */
      classActive?: boolean
      /**
       * The disabled state of the button.
       */
      disabled?: boolean
   }

   const {
      children,
      onclick,
      classActive,
      ...buttonProps
   }: ToolBarButtonProps = $props()
</script>

<button class="pushable" {onclick} {...buttonProps}>
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
      transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
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
      padding: calc(15px + 0.350625vw) calc(25px + 0.750625vw);
      border-radius: 12px;
      font-size: calc(10px + 0.350625vw);
      color: white;
      background: var(--color-theme-2);
      will-change: transform;
      transform: translateY(-4px);
      transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
   }
   .pushable:hover {
      filter: brightness(110%);
   }
   .pushable:hover .front {
      transform: translateY(-6px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
   }
   .pushable:active .front {
      transform: translateY(-2px);
      transition: transform 34ms;
   }

   .active {
      filter: brightness(70%);
      transform: translateY(0px);
      transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
   }

   .pushable:hover .shadow {
      transform: translateY(4px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
   }
   .pushable:active .shadow {
      transform: translateY(1px);
      transition: transform 34ms;
   }
   .pushable:focus:not(:focus-visible) {
      outline: none;
   }
</style>
