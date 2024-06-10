<script lang="ts">
  import { env } from "$env/dynamic/public";
  import type { Projects } from "@prisma/client";
  import LinkButton from "./link-button.svelte";

  let { project }: { project: Projects } = $props();
</script>

<div class="project-card">
  <div class="project-card__image">
    <img src={env.PUBLIC_STORAGE_URL + project.img} alt={project.alt} />
  </div>
  <div class="project-card__content">
    <h3>{project.title}</h3>
    <LinkButton href={`/projects/${project.id}`}>Read more</LinkButton>
  </div>
</div>

<style>
  .project-card {
    background-color: #384d58;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .project-card__image {
    img {
      /* we want all the images to have the same aspect ratio */
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }
  }
  .project-card__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    a {
      color: var(--color-theme-2);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
