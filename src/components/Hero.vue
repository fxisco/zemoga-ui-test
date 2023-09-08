<script>
export default {
  name: 'Hero',
}
</script>

<template>
  <section class="hero__container">
    <div class="hero__content">
      <div class="hero__card">
        <p class="hero__title">What’s your opinion on</p>
        <p class="hero__author">Pope Francis?</p>
        <p class="hero__text">He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
        <div class="hero__more hero__link">
          <img src="../assets/wikipedia.svg" aria-hidden="true" /> <a class="hero__title">More information</a>
        </div>
        <p class="hero__queston">What’s Your Veredict?</p>
        <div class="hero__actions">
          <button class="hero__button hero__button--like" aria-label="Dislike comment">
            <img src="../assets/thumbs-up.svg" aria-hidden="true" />
          </button>
          <button class="hero__button hero__button--dislike" aria-label="Like comment">
            <img src="../assets/thumbs-down.svg" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <div class="hero__closing">
      <div class="hero__closing-left">
        <p>closing in</p>
      </div>
      <div class="hero__closing-right">
        <span class="hero__days">22</span>days
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  &__content {
    height: 100%;
    margin: 0 auto;
    padding-top: 4.125rem;
    padding-left: 0.75rem;
    max-width: 68.75rem;
  }

  &__container {
    background-repeat: no-repeat;
    background: url("../assets/pope-francis.png");
    background-size: cover;
    background-position: center;
    color: #fff;
    height: 26.125rem;
    margin-bottom: 1.5rem;
    position: relative;
    width: 100%;
  }

  &__card {
    backdrop-filter: blur(20px);
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    box-sizing: border-box;
    height: 18.25rem;
    min-width: 12.75rem;
    padding: 0.75rem;
    width: 50%;
  }

  &__title,
  &__text {
    font-weight: 300;
  }

  &__title {
    font-size: 0.75rem;
    line-height: 0.9rem;
    margin-bottom: 0.063rem;
  }

  &__text {
    font-size: 0.938rem;
    line-height: 1.063rem;
    margin-bottom: 0.75rem;
  }

  &__author {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 2.25rem;
    margin-bottom: 0.625rem;
  }

  &__actions {
    bottom: 0;
    left: 0;
    display: flex;
    position: absolute;
    width: 100%;
  }

  &__more {
    display: none;
  }

  &__queston {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.9rem;
  }

  &__link {
    cursor: pointer;
  }

  &__button {
    flex: 1;
    height: 2rem;

    &--like {
      background: rgba(60, 187, 180, 0.8);
    }

    &--dislike {
      background: rgba(249, 173, 29, 0.8);
    }
  }

  &__days {
    font-weight: 400;
  }

  &__closing {
    display: flex;
    bottom: 0;
    height: 2.25rem;
    position: absolute;
    width: 100%;

    &-left,
    &-right {
      align-items: center;
      display: inline-flex;
      height: 100%;
    }

    &-left {
      background-color: rgba(0, 0, 0, 0.4);
      font-weight: 300;
      justify-content: end;
      width: 29%;
    }

    &-left > p {
      font-size: 0.75rem;
      line-height: 0.9rem;
      padding-right: 0.313rem;
      text-transform: uppercase;
    }

    &-right {
      color: #464646;
      font-weight: 300;
      padding-left: 0.75rem;
      background-color: rgba(255, 255, 255, 0.4);
      width: 71%;
    }

  }
}

@media (min-width: 768px) {
  .hero {
    &__content {
      padding-top: 4.375rem;
      padding-left: 1.313rem;
    }

    &__container {
      height: 28.75rem;
      margin-bottom: 1.75rem;
    }

    &__card {
      height: 20.063rem;
      max-width: 23rem;
      width: 100%;
      padding: 1.75rem 1.375rem;
      padding-left: 1.438rem;
    }

    &__title {
      font-size: 0.875rem;
      line-height: 1.05rem;
      margin-bottom: 0;
    }

    &__text {
      font-size: 1.094rem;
      line-height: 1.313rem;
      margin-bottom: 0.875rem;
    }

    &__author {
      font-size: 1.75rem;
      line-height: 2.25rem;
      margin-bottom: 1.313rem;
    }

    &__more {
      align-items: center;
      display: flex;
      gap: 0.438rem;
      margin-bottom: 0.875rem;
      text-decoration: underline;
    }

    &__more > img {
      width: 1.313rem;
    }

    &__queston {
      font-size: 1.313rem;
      line-height: 1.575rem;
    }

    &__button {
      height: 2.406rem;
    }

    &__button > img {
      width: 1.313rem;
    }

    &__closing {
      height: 2.625rem;

      &-left {
        width: 32%;
      }

      &-left > p {
        font-size: 0.875rem;
        line-height: 1.05rem;
        padding-right: 0.472rem;
      }

      &-right {
        font-size: 1.125rem;
        line-height: 1.35rem;
        padding-left: 0.875rem;
        width: 68%;
      }
    }
  }
}

@media (min-width: 1440px) {
  .hero {
    &__content {
      padding-top: 8.813rem;
      padding-left: 0;
    }

    &__container {
      background-repeat: no-repeat;
      background: url("../assets/pope-francis.@2x.png");
      background-size: cover;
      background-position: center;
      height: 43.75rem;
      margin-bottom: 2.25rem;
    }

    &__card {
      height: 29.625rem;
      max-width: 34.375rem;
    }

    &__title {
      font-size: 1.125rem;
      line-height: 1.35rem;
    }

    &__text {
      font-size: 1.5rem;
      line-height: 1.8rem;
      margin-bottom: 1.125rem;
      max-width: 27rem;
    }

    &__author {
      font-size: 3.375rem;
      line-height: 3.375rem;
      margin-bottom: 2.25rem;
    }

    &__more {
      gap: 0.563rem;
      text-decoration: none;
      margin-bottom: 1.125rem;
    }

    &__more > img {
      width: unset;
    }

    &__button {
      height: 5.125rem;
    }

    &__button > img {
      width: 2.25rem;
    }

    &__queston {
      font-size: 1.688rem;
      line-height: 2.025rem;
    }

    &__closing {
      height: 3.375rem;

      &-left {
        width: 29%;
      }

      &-left > p {
        font-size: 1.5rem;
        line-height: 1.8rem;
        padding-right: 1.125rem;
      }

      &-right {
        font-size: 2.25rem;
        line-height: 2.7rem;
        padding-left: 1.688rem;
        width: 71%;
      }
    }
  }
}
</style>
