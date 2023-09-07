<script>
export default {
  name: 'Banner'
}
</script>

<template>
  <section class="banner__container">
    <span class="banner__text">Is there anyone else you would want us to add?</span>
    <button class="banner__button">Submit a name</button>
  </section>
</template>

<style lang="scss">
.banner {
  &__container {
    background-repeat: no-repeat;
    background: url("../assets/bg-people.png");
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    padding-top: 0.75rem;
    padding-bottom: 0.875rem;
    margin-bottom: 1.125rem;
  }

  &__text {
    align-self: center;
    color: #464646;
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 0.75rem;
    max-width: 19.5rem;
    text-align: center;
  }

  &__button {
    align-self: center;
    border: solid 2px #000;
    color: #333333;
    max-width: 17.438rem;
    padding: 0.813rem 0;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .banner {
    &__container {
      background-position: center;
      flex-direction: row;
      justify-content: center;
      padding: 1.625rem 0;
      gap: 0.875rem;
    }


    &__text {
      font-size: 1.188rem;
      line-height: 1.575rem;
      max-width: 27.125rem;
      margin-bottom: 0;
      text-align: unset;
    }

    &__button {
      font-size: 1.313rem;
      line-height: 1.575rem;
      max-width: 14rem;
    }
  }
}

@media (min-width: 1440px) {
  .banner {
    &__container {
      background-image: url("../assets/bg-people.@2x.png");
      justify-content: space-between;
      padding-left: 2.25rem;
      padding-right: 2.25rem;
    }

    &__text {
      font-size: 1.688rem;
      line-height: 2.025rem;
      max-width: unset;
    }
  }
}
</style>
