<script lang="ts">
  import { env } from '$env/dynamic/public'
  import Grid from '$lib/components/grid.svelte'
  import type { Photography } from '@prisma/client'

  import { Lightbox } from 'svelte-lightbox'

  let {
    data,
  }: {
    data: {
      post: Photography[]
    }
  } = $props()

  // let bp = BiggerPicture({
  //   gallery: true,
  //   items: data.post.map(photo => ({
  //     img: photo.img,
  //     thumb: photo.thumb,
  //     alt: photo.alt,
  //     element: node
  //   }))
  // })
</script>

<section class="page-content">
  <h2>Photography</h2>
  <Grid>
    {#each data.post as photo}
      <div class="photo-card">
        <Lightbox description={photo.title}>
          <img
            slot="thumbnail"
            src={env.PUBLIC_STORAGE_URL + photo.thumb}
            alt={photo.alt}
            loading="lazy"
          />
          <img
            src={env.PUBLIC_STORAGE_URL + photo.img}
            alt={photo.alt}
            loading="lazy"
          />
        </Lightbox>
      </div>
    {/each}
  </Grid>
</section>

<style>
  .photo-card {
    position: relative;
    cursor: pointer;
    /* margin: 1rem; */
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
    }
  }
</style>
