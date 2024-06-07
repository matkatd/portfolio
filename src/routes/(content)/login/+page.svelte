<script lang="ts">
  import { superForm } from "sveltekit-superforms";

  let { data } = $props();

  const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<h1>Login</h1>

{#if $message}<h3>{$message}</h3>{/if}

<form method="post" use:enhance>
  <div>
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      aria-invalid={$errors.username ? "true" : undefined}
      bind:value={$form.username}
      {...$constraints.username}
    /><br />
    {#if $errors.username}
      <span class="invalid">{$errors.username}</span>
    {/if}
  </div>
  <div>
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      required
      aria-invalid={$errors.password ? "true" : undefined}
      bind:value={$form.password}
      {...$constraints.password}
    /><br />
    {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
  </div>
  <button>Login</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
    max-width: 30rem;
    margin: 0 auto;
    background-color: var(--color-bg-1);
    padding: 1rem;
    border-radius: 10px;
  }

  label {
    text-align: right;
    /* width:; */
  }

  input {
    width: -moz-available;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    font-family: inherit;
  }

  button {
    width: 100%;
    margin: 0;
    padding: 0.5rem 1rem;
    background-color: var(--color-theme-2);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-family: inherit;
    transition: 0.5s background-color ease;

    &:hover {
      background-color: var(--color-theme-2-hover);
      transition: 0.5s background-color ease;
    }
  }

  .invalid {
    color: red;
  }
</style>
