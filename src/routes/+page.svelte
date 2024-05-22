<script lang="ts">
  import NavBar from "$lib/components/nav-bar.svelte";
  import waterfall from "$lib/images/waterfall.jpg";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="David's Portfolio" />
</svelte:head>

<div class="hero-img"></div>

<header>
  <h1>David Thompson</h1>
  <h2>Software Developer/Photographer</h2>
  <NavBar />
</header>
<section>
  <div class="profile-circle">
    <img src="$lib/images/profile.jpg" alt="David Thompson" />
  </div>
  <p>Welcome to my portfolio!</p>
  <p>
    I'm David Thompson. I'm a software developer and photographer. I love
    creating things and solving problems. I'm always looking for new
    opportunities to learn and grow.
  </p>
</section>

<style>
  .hero-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 80vh;
    width: 100%;
    object-fit: contain;
    /* We are going to have a gradient overlay */
    background-image: linear-gradient(
        180deg,
        rgba(11, 29, 40, 1) 0%,
        rgba(46, 62, 70, 0.716) 14%,
        rgba(31, 69, 88, 0.3275911048012955) 21%,
        rgba(43, 75, 91, 0.2191877434567577) 50%,
        rgba(54, 81, 94, 0.4732493681066176) 64%,
        rgba(64, 86, 96, 0.6029412448573179) 76%,
        rgba(69, 89, 97, 0.8813726174063375) 82%,
        rgba(74, 91, 98, 0.8869748583026961) 87%,
        rgba(77, 93, 99, 0.9401961468181023) 91%,
        rgba(84, 97, 101, 1) 100%
      ),
      url($lib/images/waterfall.jpg);
    background-size: cover;
  }

  header {
    z-index: 2;
    display: flex;
    flex-direction: column;

    align-items: center;
    flex: 0.6;
    width: 100%;
  }

  section {
    z-index: 100;
  }
  h1 {
    width: 100%;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 300;
    font-kerning: auto;
    letter-spacing: 1.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    width: 100%;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
    font-kerning: auto;
    text-align: center;
    margin-top: 1rem;
  }
</style>
