<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column col-8 col-sm-12 col-mx-auto">
        <Hero :count="iconCount"></Hero>
      </div>
      <div class="column col-10 col-sm-12 col-mx-auto">
        <Search @icon-count="updateCount"></Search>
      </div>
    </div>
    <div class="p-relative p-2" style="bottom: 0">
      <div class="flex-centered p-2 text-muted">© Yu-Kai "Steven" Wang</div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Search from "@/components/Search";

export default {
  name: 'App',
  components: {
    Hero,
    Search
  },
  data() {
    return {
      iconCount: 0
    }
  },
  methods: {
    updateCount(val) {
      this.iconCount = val
    }
  }
}
</script>

<style>
@import "~spectre.css/dist/spectre.min.css";
</style>
