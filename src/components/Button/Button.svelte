<script lang="ts">
  import type { ButtonSize, ButtonType } from './types'

  export let type: ButtonType = ''
  export let size: ButtonSize = 'md'

  const typeCls = `btn-${type ?? 'secondary'}`
  const sizeCls = `btn-${size ?? 'md'}`
</script>

<button type="button" class="btn {typeCls} {sizeCls}" on:click>
  <slot />
</button>
