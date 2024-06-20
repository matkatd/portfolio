<script lang="ts">
</script>

<nav>
  <hr />
  <ul>
    <li><a class="animate after" href="/about">About</a></li>
    <li><a class="animate after" href="/projects">Projects</a></li>
    <li><a class="animate after" href="/photography">Photography</a></li>
    <li><a class="animate after" href="/blog">Blog</a></li>
  </ul>
  <hr />
</nav>

<style>
  :root {
    --color-text: rgb(247, 244, 244);
    --color-text-hover: rgb(163, 255, 232);
  }
  nav {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    /* padding: 1rem; */
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    overflow: hidden;
  }

  hr {
    width: 100%;
    border: 0;
    border-top: 2px solid var(--color-bg-1);
  }

  ul {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    justify-content: center;
    justify-items: center;
    list-style-type: none;
    padding: 0;
    li {
      margin: 0;
      min-width: 0;
      text-align: center;
      width: fit-content;
      text-transform: uppercase;
    }
  }
  a {
    font-size: 1.5rem;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
    text-decoration: none;

    color: var(--color-text);
  }
  a:hover {
    color: var(--color-text-hover);
    background-color: var(--color-theme-2) 70%;
  }

  a.after:after {
    content: '';
    transition: 0.5s all ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    height: 3px;
    height: 0.25rem;
    width: 0;
    background: var(--color-text-hover);
    bottom: -0.25em;
  }

  a.animate:after {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  a.after:hover:after {
    width: 100%;
  }

  @media (max-width: 740px) {
    ul {
      grid-template-columns: 1fr 1fr;
      width: auto;
      gap: 1.25rem;
      a {
        font-size: 1.25rem;
      }
    }
  }
</style>
