<script lang="ts">
  import ContentNavBar from "$lib/components/content-nav-bar.svelte";
  import { page } from "$app/stores";
</script>

<header>
  <div class="name-and-page">
    <h1><a href="/">David Thompson</a></h1>
    <h2>{$page.url.pathname.substring(1)}</h2>
  </div>

  <ContentNavBar />
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0 auto;
    max-width: 64rem;
    width: 100%;
    text-transform: uppercase;
    background-color: rgba(53, 40, 23, 0.36);
    .name-and-page {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  a {
    color: var(--color-text);
    &:hover {
      text-decoration: none;
      color: var(--color-text-hover);
      transition: 0.5s color ease;
    }
  }

  h1 {
    font-size: 1.25rem;
    margin: 0;
    letter-spacing: 0.5rem;
    font-weight: 300;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0;
    letter-spacing: 0.75rem;
    font-weight: 300;
  }
</style>
