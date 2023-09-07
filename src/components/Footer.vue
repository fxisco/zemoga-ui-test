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
    <div class="footer__social">
      <span class="footer__social-text">Follow us</span>
      <div class="footer__social-logos">
        <a><img src="../assets/facebook.svg" alt="Facebook logo" /></a>
        <a><img src="../assets/twitter.svg" alt="Twitter logo" /></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__container {
    font-size: 0.938rem;
    line-height: 1.125rem;
    height: 6.781rem;
    margin: 0 auto;
    margin-bottom: 2.156rem;
    max-width: 68.75rem;
    position: relative;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.313rem;
    padding-top: 1.094rem;
  }

  &__list>li,
  &__social-logos>a {
    cursor: pointer;
  }

  &__social {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &__social-text {
    margin-bottom: 0.375rem;
  }

  &__social-logos {
    display: flex;
    justify-content: space-between;
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

    &__list>li {
      line-height: 2.25rem;
      font-size: 1.125rem;
    }

    &__social,
    &__social-logos {
      gap: 0.875rem;
    }

    &__social-text {
      font-size: 1.094rem;
      line-height: 1.313rem;
      margin-bottom: 0;
    }

    &__social {
      flex-direction: row;
    }
  }
}

@media (min-width: 1440px) {
  .footer {
    &__list {
      gap: 2.25rem;
    }

    &__social-text {
      font-size: 0.938rem;
      line-height: 1.313rem;
    }

    &__social,
    &__social-logos {
      gap: 1.125rem;
    }
  }
}
</style>
