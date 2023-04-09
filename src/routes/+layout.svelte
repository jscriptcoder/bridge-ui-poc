<script>
  import '../app.css'
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import WalletListModal from '../components/WalletListModal/WalletListModal.svelte'
</script>

<div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<!-- Single components here: -->
<WalletListModal />
