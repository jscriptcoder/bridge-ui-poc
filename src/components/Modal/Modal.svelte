<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  export let open = false
  export let closeable = true
</script>

<div class="modal modal-middle" class:modal-open={open}>
  <div class="modal-box">
    {#if closeable}
      <button
        class="modal-close btn btn-sm btn-circle absolute right-2 top-2"
        on:click={() => (open = false)}>✕</button>
    {/if}
    <slot />
  </div>
</div>
