<script>
export default {
  name: 'PreviousRuling',
}
</script>

<template>
  <section class="ruling__container">
    <div class="ruling__title-container">
      <h2 class="ruling__title">Previous Rulings</h2>
      <select class="ruling__selection" name="type" id="type" >
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>
    </div>
    <div class="ruling__content">
      <div class="ruling__rule">
        <div class="ruling__container">
          <div class="ruling__author-container">
            <span class="ruling__author">Cristina</span>
          </div>
          <p class="ruling__comment">
            Vestibulum diam ante, porttitor a odio eget, rhoncus.  Eu velit…et, rhoncus.  Eu velit…et, rhoncus.  Eu velit…
          </p>
          <p class="ruling__time">
            1 month ago in Entertainment
          </p>
          <div class="ruling__actions">
            <button class="ruling__action ruling__action--like" aria-label="Like"><img src="../assets/thumbs-up.svg" aria-hidden="true"></button>
            <button class="ruling__action ruling__action--dislike" aria-label="Dislike"><img src="../assets/thumbs-down.svg" aria-hidden="true"></button>
            <button class="ruling__action--vote">Vote</button>
          </div>
        </div>
        <div class="ruling__overlay"></div>
        <div class="ruling__progress">
          <div class="ruling__percentage ruling__progress-left" :style="{ width: '25.5%' }">
            <img src="../assets/thumbs-up.svg" aria-hidden="true"> 25.5%
          </div>
          <div class="ruling__percentage ruling__progress-right" :style="{ width: '74.5%' }">
            74.5% <img src="../assets/thumbs-down.svg" aria-hidden="true">
          </div>
        </div>
        <div class="ruling__vote like">
          <img src="../assets/thumbs-up.svg" aria-hidden="true">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ruling {
  &__container {
    margin-bottom: 1.5rem;
  }

  &__title-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.8rem;
  }

  &__selection {
    background-color: #FFF;
    border: 2px solid #000;
    color: #000;
    display: none;
    font-weight: 400;
    font-size: 0.656rem;
    line-height: 0.656rem;
    text-align: center;
    width: 8.188rem;
  }

  &__author-container {
    display: flex;
    width: 100%;
  }

  &__author {
    display: -webkit-box;
    align-self: flex-end;
    color: #FFF;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.438rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__content {
    display: flex;
    gap: 12px;
    overflow-x: scroll;
  }

  &__overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.438rem;
    position: absolute;
  }

  &__rule {
    box-sizing: border-box;
    background-repeat: no-repeat;
    background: url("../assets/pope-francis.png");
    background-size: cover;
    background-position: center;
    flex: 0 0 18.75rem;
    height: 18.75rem;
    padding: 5.938rem 1.875rem;
    position: relative;
  }

  &__container {
    position: relative;
    z-index: 1;
  }

  &__comment {
    color: #FFF;
    display: -webkit-box;
    font-size: 0.938rem;
    line-height: 1.125rem;
    margin-bottom: 0.75rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__time {
    color: #FFF;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.9rem;
    margin-bottom: 0.75rem;
    text-align: right;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }

  &__action {
    align-self: center;
    height: 1.875rem;
    width: 1.875rem;

    &--like {
      background: rgba(60, 187, 180, 0.8);
    }

    &--dislike {
      background: rgba(251, 189, 74, 1);
    }

    &--vote {
      color: #FFF;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 1);
      height: 2.375rem;
      width: 6.688rem;
    }
  }

  &__percentage {
    display: flex;
    align-items: center;
  }

  &__progress {
    bottom: 0;
    color: #FFF;
    display: flex;
    font-size: 1.125rem;
    height: 2.25rem;
    left: 0;
    line-height: 1.35rem;
    position: absolute;
    right: 0;
    width: 100%;

    &-right {
      background: rgba(249, 173, 29, 0.6);
      justify-content: end;
    }

    &-left {
      background: rgba(60, 187, 180, 0.6);
    }

    &-right > img {
      margin-right: 0.75rem;
      margin-left: 0.375rem;
    }

    &-left > img {
      margin-left: 0.75rem;
      margin-right: 0.375rem;
    }
  }

  &__vote {
    align-items: center;
    display: flex;
    height: 1.875rem;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 5.938rem;
    width: 1.875rem;

    img {
      width: 1rem;
    }

    &.like {
      background: rgba(60, 187, 180, 0.8);
    }

    &.dislike {
      background: rgba(251, 189, 74, 1);
    }
  }
}

@media (min-width: 768px) {
  .ruling {
    &__container {
      margin-bottom: 1.75rem;
    }

    &__title-container {
      margin-bottom: 1.75rem;
    }

    &__selection {
      display: unset;
    }
  }
}

@media (min-width: 1440px) {
  .ruling {
    &__container {
      margin-bottom: 2.25rem;
    }

    &__title-container {
      margin-bottom: 2.25rem;
    }

    &__title {
      font-size: 2.813rem;
      line-height: 3.375rem;
    }

    &__selection {
      height: 2.25rem;
      width: 10.813rem;
    }
  }
}
</style>
