<script>
export default {
  name: 'BannerTop',
  data: () => ({
    showBanner: true
  }),
  methods: {
    closeBanner() {
      this.showBanner = false;
    }
  }
}
</script>

<template>
  <section v-if="showBanner" class="banner-top__container">
    <div class="banner-top__title">
      <div class="banner-top__title-top">
        Speak out. Be heard.
      </div>
      <div class="banner-top__title-bottom">
        Be counted
      </div>
    </div>
    <div class="banner-top__description">
      Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
    </div>
    <button @click="closeBanner" class="banner-top__action" aria-label="Close banner">
      <img src="../assets/close.svg" aria-hidden="true">
    </button>
  </section>
</template>

<style lang="scss">
.banner-top {
  &__container {
    align-items: center;
    background-color: #EBEBEB;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    margin-bottom: 1.438rem;
    padding: 0.75rem;
  }

  &__title {
    flex: 0 0 7.875rem;
    height: fit-content;
  }

  &__title-top {
    color: #464646;
    font-size: 0.938rem;
    font-weight: 300;
    line-height: 1.125rem;
    letter-spacing: -0.9375px;
  }

  &__title-bottom {
    color: #464646;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8rem;
    letter-spacing: -0.889px;
  }

  &__description {
    color: #464646;
    font-size: 0.938rem;
    font-weight: 300;
    line-height: 1.125rem;
    letter-spacing: -0.625px;
  }

  &__action {
    display: none;
  }
}

@media (min-width: 768px) {
  .banner-top {
    &__container {
      gap: 1.313rem;
      padding: 1.438rem 0.875rem;
    }

    &__title {
      flex: 0 0 6.813rem;
    }

    &__title-top {
      font-size: 0.875rem;
      letter-spacing: -1.125px;
      line-height: 1.05rem;
    }

    &__title-bottom {
      font-size: 1.313rem;
      line-height: 1.575rem;
      letter-spacing: 0px;
    }

    &__description {
      font-size: 1.125rem;
      line-height: 1.35rem;
      letter-spacing: -0.75px;
    }
  }
}

@media (min-width: 1440px) {
  .banner-top {
    &__container {
      gap: 1.125rem;
      padding: 1.375rem 1.125rem;
    }

    &__title {
      flex: 0 0 8.625rem;
    }

    &__title-top {
      font-size: 1.125rem;
      line-height: 1.35rem;
    }

    &__title-bottom {
      font-size: 1.688rem;
      line-height: 2.025rem;
    }

    &__action {
      display: unset;
      margin-left: 1.188rem;
    }
  }
}
</style>
