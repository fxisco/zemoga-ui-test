<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<template>
  <div>
    <Header />
    <div class="content">
      <hr class="separator" />
    </div>
    <div class="content">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.separator {
  border-top: 2px dashed rgba(70, 70, 70, 1);
  margin: 0 auto;
  max-width: 68.75rem;
}

@media (min-width: 768px) {
  .content {
    padding-left: 1.313rem;
    padding-right: 1.313rem;
  }
}
</style>
