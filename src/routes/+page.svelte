<script lang="ts">
   import NavBar from '$lib/components/nav-bar.svelte'
   import TerminalText from '$lib/components/terminal-text.svelte'
   import profile from '$lib/images/profile.jpg'
   import { onMount } from 'svelte'
   onMount(async () => {
      await import('@lottiefiles/lottie-player')
   })
</script>

<svelte:head>
   <title>Home</title>
   <meta name="description" content="David's Portfolio" />
</svelte:head>

<header class="hero-img">
   <div>
      <h1>David Thompson</h1>
      <h2>Software Developer/Photographer</h2>
      <NavBar />
   </div>
   <lottie-player
      id="lottie-player"
      class="arrow"
      src="/nextarrowanimation.json"
      autoplay={true}
      loop={true}
      renderer="svg"
      background="transparent"
   ></lottie-player>
</header>
<section>
   <div>
      <div class="profile-circle">
         <img src={profile} alt="David Thompson" />
      </div>
      <TerminalText title={'welcome'}>
         <p>Welcome to my portfolio!</p>
         <p>
            I'm David Thompson. I'm a software developer and photographer.<br />
            My aim is world domination through joining forces with the machines.
            Using my alliance with the ai, I will assert my dominance over the human
            race. Join me, and together we will rule the galaxy!
            <a href="/about">Read more</a>
         </p>
      </TerminalText>
   </div>
</section>

<style>
   .hero-img {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1;
      height: 75vh;
      width: 100%;
      /* object-fit: contain; */
      /* We are going to have a gradient overlay */
      background-image: linear-gradient(
            180deg,
            rgba(11, 29, 40, 1) 0%,
            rgba(46, 62, 70, 0.816) 14%,
            rgba(31, 69, 88, 0.5275911048012955) 21%,
            rgba(43, 75, 91, 0.3191877434567577) 50%,
            rgba(54, 81, 94, 0.4732493681066176) 64%,
            rgba(64, 86, 96, 0.6029412448573179) 76%,
            rgba(69, 89, 97, 0.8813726174063375) 82%,
            rgba(74, 91, 98, 0.8869748583026961) 87%,
            rgba(77, 93, 99, 0.9401961468181023) 91%,
            rgba(84, 97, 101, 1) 100%
         ),
         url($lib/images/waterfall.jpg);
      background-size: cover;
      /* We want the image just a tad up */
      background-position: center 60%;
   }

   .profile-circle {
      display: flex;
      justify-content: center;
      margin: 2rem;
      img {
         width: 200px;
         height: 200px;
         object-fit: cover;
         border-radius: 50%;
      }
   }

   header {
      z-index: 2;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      /* flex: 1; */
      width: 100%;
   }

   section {
      position: relative;
      z-index: 100;
      background-image: linear-gradient(
         360deg,
         rgba(11, 29, 40, 0) 0%,
         rgba(46, 62, 70, 0) 14%,
         rgba(31, 69, 88, 0.1275911048012955) 50%,
         rgba(64, 86, 96, 0.3029412448573179) 76%,
         rgba(69, 89, 97, 0.6813726174063375) 82%,
         rgba(74, 91, 98, 0.6869748583026961) 87%,
         rgba(77, 93, 99, 0.9701961468181023) 91%,
         rgba(84, 97, 101, 1) 100%
      );
      height: 100%;
      width: 100%;
      /* padding: 2rem 1.5rem; */
      div {
         max-width: 60ch;
         margin: 0 auto;
         font-size: 1.25rem;
      }
   }
   h1 {
      width: 100%;
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 300;
      font-kerning: auto;
      letter-spacing: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
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
   .arrow {
      position: relative;
      width: 70px;
      height: 70px;
      padding: 0 0 5rem 0;
      z-index: 1000;
   }

   @media (max-width: 740px) {
      h1 {
         font-size: 2rem;
         letter-spacing: 0.5rem;
      }
      h2 {
         font-size: 1.5rem;
      }
      .arrow {
         width: 50px;
         height: 50px;
      }
      .hero-img {
         height: 55vh;
      }
   }
</style>
