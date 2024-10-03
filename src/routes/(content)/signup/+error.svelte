<script lang="ts">
  import { page } from '$app/stores'
</script>

<h1>You seem to have encountered an error...</h1>
<h2>{$page?.error?.message}</h2>
