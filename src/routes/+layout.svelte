<script lang="ts">
  import "./styles.css";
</script>

<div class="app">
  <main>
    <slot />
  </main>

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
    background-image: url("$lib/images/topography.svg");
    background-repeat: repeat;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
