<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer class="footer__container">
    <ul class="footer__list">
      <li><a>Terms and Conditions</a></li>
      <li><a>Privacy Policy</a></li>
      <li><a>Contact Us</a></li>
    </ul>
  </footer>
</template>

<style lang="scss">
.footer {
  &__container {
    height: 6.781rem;
    max-width: 68.75rem;
    margin: 0 auto;
    margin-bottom: 2.156rem;
    position: relative;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.313rem;
    padding-top: 1.094rem;
  }

  &__list > li > a {
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .footer {
    &__container {
      display: flex;
      flex-direction: column;
      height: 4.563rem;
      justify-content: end;
      margin-bottom: 2.813rem;
    }

    &__list {
      flex-direction: row;
      gap: 1.75rem;
      padding: 0;
    }

    &__list > li {
      line-height: 2.25rem;
      font-size: 1.125rem;
    }
  }
}
@media (min-width: 1440px) {
  .footer {
    &__list {
      gap: 2.25rem;
    }
  }
}
</style>
