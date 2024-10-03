<script lang="ts">
  import { enhance } from '$app/forms'
</script>

<nav>
  <ul>
    <li><a class="animate after" href="/admin/about">About</a></li>
    <li><a class="animate after" href="/admin/projects">Projects</a></li>
    <li>
      <a class="animate after" href="/admin/photography">Photography</a>
    </li>
    <li><a class="animate after" href="/admin/blog">Blog</a></li>
    <li><form method="post" use:enhance><button>Logout</button></form></li>
  </ul>
</nav>

<style>
  :root {
    --color-text: rgb(247, 244, 244);
    --color-text-hover: rgb(163, 255, 232);
  }

  button {
    background-color: var(--color-theme-2);
    color: var(--color-text);
    border: none;
    border-radius: 5px;
    font-family: inherit;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    display: inline;
    transition: 0.5s background-color ease;

    &:hover {
      background-color: var(--color-theme-2-hover);
      transition: 0.5s background-color ease;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 2rem 1rem;
    /* width: 100%; */
    max-width: 64rem;
    margin: 0 auto;
    overflow: hidden;
  }

  ul {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
