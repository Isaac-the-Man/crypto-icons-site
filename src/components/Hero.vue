<template>
  <div class="hero hero-sm">
    <div class="hero-body text-center">
      <div class="columns">
        <div class="column col-2 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-mx-auto">
          <img src="@/assets/logo.svg" alt="Crypto Icon Logo" style="max-height: 240px; max-width: 240px;">
        </div>
      </div>
      <h1>Crypto Icons</h1>
      <h3 class="text-muted">Now supporting <span style="text-decoration-line: underline">{{ count }}</span>
        cryptocurrencies !</h3>
      <div class="">
        <a class="btn btn-primary btn-lg mr-2" rel="noreferrer" href="https://github.com/Isaac-the-Man/crypto-icons"
           target="_blank">Github</a>
        <a class="btn btn-primary btn-lg" rel="noreferrer" href="https://github.com/Isaac-the-Man/crypto-icons/releases"
           target="_blank">Download</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ['count']
}
</script>

<style scoped>

</style>