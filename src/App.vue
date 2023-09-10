<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import BannerTop from './components/BannerTop.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import PreviousRuling from './components/PreviousRuling.vue'
import dataSource from './data-source'

export default {
  name: 'App',
  components: {
    Banner,
    BannerTop,
    Header,
    Hero,
    Footer,
    PreviousRuling
  },
  mixins: [
    dataSource
  ]
}

</script>

<template>
  <Header />
  <Hero />
  <div class="content">
    <BannerTop />
    <PreviousRuling />
    <Banner />
    <hr class="separator" />
    <Footer />
  </div>
</template>

<style lang="scss">
.content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0 auto;
  max-width: 68.75rem;
}

.separator {
  border-top: 2px dashed rgba(70, 70, 70, 1);
}

@media (min-width: 768px) {
  .content {
    padding-left: 1.313rem;
    padding-right: 1.313rem;
  }
}
</style>
