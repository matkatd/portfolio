<script lang="ts">
  import { env } from '$env/dynamic/public'
  import type { Projects } from '@prisma/client'
  import LinkButton from './link-button.svelte'

  let { project }: { project: Projects } = $props()
</script>

<div class="project-card">
  <div class="project-card-body">
    <div class="project-card__image">
      <img src={env.PUBLIC_STORAGE_URL + project.img} alt={project.alt} />
    </div>
    <div class="project-card__content">
      <h3>{project.title}</h3>
      <h4>{project.date}</h4>
    </div>
    <div class="project-card__content">
      <LinkButton href={`/projects/${project.slug}`}>Read more</LinkButton>
    </div>
  </div>
</div>

<style>
  .project-card {
    background-color: #384d58;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-bottom: 0.25rem;
  }

  .project-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0;
    }
  }
</style>
