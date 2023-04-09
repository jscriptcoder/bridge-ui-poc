<script lang="ts">
  export let open = false
  export let closeable = true

  function closeClick() {
    open = false
  }
</script>

<div class="modal modal-middle" class:modal-open={open}>
  <div class="modal-box">
    {#if closeable}
      <button
        class="
          modal-close
          btn
          btn-sm
          btn-circle
          absolute
          right-2
          top-2"
        on:click={closeClick}>
        ✕
      </button>
    {/if}
    <slot />
  </div>
</div>
