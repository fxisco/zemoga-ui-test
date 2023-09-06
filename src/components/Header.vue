<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header class="header__container">
    <div class="header__title-container">
      <span class="header__page-name">Rule of thumb.</span>
    </div>
    <button class="header__menu-icon" aria-haspopup="true" aria-expanded="false">
      <img aria-hidden="true" src="../assets/hamburger.svg" />
    </button>
  </header>
</template>

<style lang="scss">
.header {
  &__container {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.698864) 0%,
      rgba(0, 0, 0, 0.0001) 100%
    );
    height: 7.5rem;
    padding-left: 0.75rem;
    padding-top: 1.875rem;
    position: relative;
  }

  &__page-name {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  &__title-container {
    margin: 0 auto;
    max-width: 68.75rem;
  }

  &__menu-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .header {
    &__container {
      height: 8.75rem;
      padding-left: 1.313rem;
      padding-top: 2.188rem;
    }

    &__menu-icon {
      top: 1.75rem;
      right: 1.75rem;
    }
  }
}

@media (min-width: 1440px) {
  .header {
    &__container {
      padding-left: 0;
      padding-top: 3.25rem;
    }

    &__page-name {
      font-size: 2.25rem;
      line-height: 2.7rem;
    }

    &__menu-icon {
      display: none;
    }
  }
}
</style>
