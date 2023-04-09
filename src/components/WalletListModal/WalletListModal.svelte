<script context="module">
  import { EventEmitter } from 'events'

  const emitter = new EventEmitter()

  // API

  export function open() {
    emitter.emit('open')
  }

  export function close() {
    emitter.emit('close')
  }
</script>

<script>
  import Modal from '../Modal'
  import { onDestroy, onMount } from 'svelte'

  let open = false

  onMount(() => {
    emitter.on('open', () => (open = true))
    emitter.on('close', () => (open = false))
  })

  onDestroy(() => {
    emitter.removeAllListeners()
  })
</script>

<Modal bind:open toggle>List of wallets here</Modal>
