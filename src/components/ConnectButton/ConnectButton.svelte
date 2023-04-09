<script lang="ts">
  import { _ } from '../../libs/i18n'
  import Button from '../Button'
  import { open } from '../WalletListModal'
</script>

<Button on:click={open} type="primary">{$_('connect_button')}</Button>
