<script lang="ts">
  import ContentNavBar from "$lib/components/content-nav-bar.svelte";
  let { data, children } = $props();
</script>

<header>
  <div class="name-and-page">
    <br/>
    <h1><a href="/">David Thompson</a></h1>
    <h2>{data.pathname.substring(1)}</h2>
    <br/>
  </div>

  <ContentNavBar />
</header>
<section class="content">
  {@render children()}
</section>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100vw;
    /* padding: 0 1rem; */
    text-transform: uppercase;
    margin: 0 auto;
    /* background-color: rgba(53, 40, 23, 0.36); */
    background-image: linear-gradient(
        180deg,
        rgba(11, 29, 40, .8) 0%,
        rgba(46, 62, 70, 0.616) 14%,
        rgba(31, 69, 88, 0.3275911048012955) 21%,
        rgba(43, 75, 91, 0.2191877434567577) 50%,
        rgba(54, 81, 94, 0.1732493681066176) 64%,
        rgba(64, 86, 96, 0.1029412448573179) 76%,
        rgba(69, 89, 97, 0.4813726174063375) 82%,
        rgba(74, 91, 98, 0.4869748583026961) 87%,
        rgba(77, 93, 99, 0.9401961468181023) 91%,
        rgba(84, 97, 101, 1) 100%
      ), url("$lib/images/sunset.jpg");
      background-size: cover;
    /* We want the image just a tad up */
    background-position: center 50%;
    
    .name-and-page {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr;
      align-items: center;
      margin: 1rem auto;
      width: 100%;
      /* padding: 0 1rem; */
      max-width: 80rem;
    }
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    &:hover {
      color: var(--color-text-hover);
      transition: 0.5s color ease;
    }
  }

  h1 {
    font-size: 1.25rem;
    letter-spacing: 0.5rem;
    font-weight: 300;
  }

  h2 {
    font-size: 2.75rem;
    letter-spacing: 0.75rem;
    font-weight: 300;
    text-align: end;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    max-width: 50rem;
  }

  @media (max-width: 740px) {
    header {
      .name-and-page {
        display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: auto;
      flex-wrap: wrap;
      h1, h2 {
        text-align: center;
        margin: 0.5rem;
      }
    }
    }
  }
</style>
