<template>
  <div>
    <div class="input-group">
      <span class="input-group-addon">Search Crypto</span>
      <input v-model="keyword" type="search" class="form-input input-lg" placeholder="search coin, symbol">
    </div>
    <div>
      <div class="columns mt-2">
        <div v-for="(coin, i) in pagedIcons" :key="i" class="column col-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="tile tile-centered s-rounded mt-2" style="background-color: white">
            <div class="tile-icon">
              <figure class="avatar avatar-xl" style="background-color: white">
                <img :src="require(`crypto-icons-plus-128/src/${coin.slug}.png`)" alt="coin icon">
              </figure>
            </div>
            <div class="tile-content">
              <div class="tile-title">{{ coin.name }}</div>
              <small class="tile-subtitle text-gray">{{ coin.symbol }}</small>
            </div>
          </div>
        </div>
      </div>

      <ul class="pagination flex-centered">
        <li v-if="pageCount >= 1" :class="['page-item', {'disabled': page === 1}]">
          <a @click="page--" href="#">Prev</a>
        </li>
        <li v-if="pageCount > 3 && page >= 3" :class="['page-item', {'active': 1 === page}]">
          <a @click="page = 1" href="#">{{ 1 }}</a>
        </li>
        <li v-if="pageCount > 3 && page > 3" class="page-item">
          <span>...</span>
        </li>
        <li v-for="i in activePages" :key="i" :class="['page-item', {'active': i === page}]">
          <a @click="page = i" href="#">{{ i }}</a>
        </li>
        <li v-if="pageCount > 3 && page < pageCount - 2" class="page-item">
          <span>...</span>
        </li>
        <li v-if="pageCount > 3 && page <= pageCount - 2" :class="['page-item', {'active': pageCount === page}]">
          <a @click="page = pageCount" href="#">{{ pageCount }}</a>
        </li>
        <li v-if="pageCount >= 1" :class="['page-item', {'disabled': page === pageCount}]">
          <a @click="page++" href="#">Next</a>
        </li>
      </ul>

      <div v-if="iconCount <= 0" class="empty">
        <div class="empty-icon">
          <i class="icon icon-people"></i>
        </div>
        <p class="empty-title h5">😞 No Icons Found 😞</p>
        <p class="empty-subtitle">Missing a coin? Consider opening an issue !</p>
        <div class="empty-action">
          <a class="btn btn-primary" href="https://github.com/Isaac-the-Man/crypto-icons/issues" target="_blank">Open Issue</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import manifest from "crypto-icons-plus/manifest.min.json"

export default {
  name: "Search",
  data() {
    return {
      keyword: '',
      manifest: manifest,
      page: 1,
      itemPageLimit: 36
    }
  },
  computed: {
    keywordUpper() {
      return this.keyword.toUpperCase()
    },
    filteredIcons() {
      return this.manifest.filter((coin) => {
        return coin.slug.toUpperCase().includes(this.keywordUpper) ||
            coin.name.toUpperCase().includes(this.keywordUpper) ||
            coin.symbol.toUpperCase().includes(this.keywordUpper)
      })
    },
    pagedIcons() {
      return this.filteredIcons.slice((this.page - 1) * this.itemPageLimit, this.page * this.itemPageLimit)
    },
    iconCount() {
      return this.filteredIcons.length
    },
    pageCount() {
      let page = ((this.iconCount - (this.iconCount % this.itemPageLimit)) / this.itemPageLimit)
      if (this.iconCount % this.itemPageLimit > 0) {
        return page + 1
      }
      return page
    },
    activePages() {
      if (this.pageCount > 3) {
        let range = [this.page - 1, this.page, this.page + 1]
        if (this.page === 1) {
          range.shift()
          range.push(this.page + 2)
        }
        if (this.page === this.pageCount) {
          range.pop()
          range.unshift(this.page - 2)
        }
        return range
      } else {
        return this.pageCount
      }
    }
  },
  watch: {
    filteredIcons() {
      this.page = 1;
    }
  },
  created() {
    this.$emit('icon-count', this.manifest.length)
  }
}
</script>

<style scoped>

</style>
