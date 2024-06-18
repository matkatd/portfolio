<script lang="ts">
  import Grid from "$lib/components/grid.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  let { data } = $props();
</script>

<section class="page-content">
  <h2>Projects</h2>
  <Grid>
    {#each data.post as project}
      <ProjectCard {project} />
    {/each}
  </Grid>
</section>

<style>
</style>
