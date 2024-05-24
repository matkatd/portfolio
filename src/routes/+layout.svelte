<script lang="ts">
  import { slide } from "svelte/transition";
  import "./styles.css";
  let { data, children } = $props();
</script>

<div class="app">

  <main >{@render children()}</main>


  <footer>
    <p>© 2024 David Thompson</p>
  </footer>
</div>
 
<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-bg-0);
    justify-content: center;
    background-image: linear-gradient(
      180deg,
        rgba(84, 97, 101, 1) 0%,
        rgba(84, 97, 101, 1) 10%,
        rgba(84, 97, 101, 1) 24%,
        rgba(84, 97, 101, 0.7732493681066176) 36%,
        rgba(69, 89, 97, 0.6813726174063375) 50%,
        rgba(74, 91, 98, 0.6869748583026961) 100%
      ),
      url("$lib/images/topography.svg");
    background-repeat: repeat;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    margin: 0 auto;
    /* box-sizing: border-box; */
    /* font-size: calc(15px + 0.390625vw); */
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: var(--color-theme-2);
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
