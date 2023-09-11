<script>
import getTimeago from '../helpers/timeago'
export default {
  name: 'PreviousRuling',
  inject: ['rules'],
  data: () => ({
    type: 'list'
  }),
  methods: {
    formatCategory(category) {
      return category.charAt(0).toUpperCase() + category.slice(1)
    },
    calculatePercentage(rule, value) {
      return ((value / (rule.votes.positive + rule.votes.negative)) * 100).toFixed(1)
    },
    getTimeago
  }
}
</script>

<template>
  <section class="ruling__container">
    <div class="ruling__title-container">
      <h2 class="ruling__title">Previous Rulings</h2>
      <select class="ruling__selection" name="type" id="type" v-model="type">
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>
    </div>
    <div class="ruling__content" :class="{ 'list': type === 'list' }">
      <div
        class="ruling__rule"
        :class="{ 'list': type === 'list' }"
        v-for="(rule, i) in rules"
        :style="{ 'background-image': 'url(' + '/src/assets/' + rule.picture + ')' }"
        :key="`rule.${i}`"
      >
        <div class="ruling__container">
          <div class="ruling__author-container">
            <span class="ruling__author">{{ rule.name }}</span>
          </div>
          <p class="ruling__comment">
            {{ rule.description }}
          </p>
          <p class="ruling__time">
            {{ getTimeago(rule.lastUpdated) }} in {{ formatCategory(rule.category) }}
          </p>
          <div class="ruling__actions">
            <button class="ruling__action ruling__action--like" aria-label="Like"><img src="../assets/thumbs-up.svg" aria-hidden="true"></button>
            <button class="ruling__action ruling__action--dislike" aria-label="Dislike"><img src="../assets/thumbs-down.svg" aria-hidden="true"></button>
            <button class="ruling__action--vote">Vote</button>
          </div>
        </div>
        <div class="ruling__overlay"></div>
        <div class="ruling__progress">
          <div class="ruling__percentage ruling__progress-left" :style="{ width: `${calculatePercentage(rule, rule.votes.positive)}%` }">
            <img src="../assets/thumbs-up.svg" aria-hidden="true"> {{ calculatePercentage(rule, rule.votes.positive) }}%
          </div>
          <div class="ruling__percentage ruling__progress-right" :style="{ width: `${calculatePercentage(rule, rule.votes.negative)}%` }">
            {{ calculatePercentage(rule, rule.votes.negative) }}% <img src="../assets/thumbs-down.svg" aria-hidden="true">
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
  &__image {
    display: none;
  }

  &__content {
    display: flex;
    gap: 0.75rem;
    overflow-x: scroll;

    &.list {
      overflow: unset;
      flex-wrap: wrap;
    }
  }

  &__rule {
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex: 0 0 18.75rem;
    height: 18.75rem;
    padding: 5.938rem 1.875rem;
    position: relative;
  }

  &__rule.list {
    flex: unset;
    height: 8.875rem;
    padding: 0;
    width: 100%;
    background-size: contain;
    background-position: left;

    .ruling__author-container {
      left: 20%;
      position: absolute;
      width: 23rem;
    }

    .ruling__comment {
      left: 20%;
      position: absolute;
      top: 3.25rem;
      width: 21.375rem;
    }

    .ruling__overlay {
      left: 1.875rem;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 16.5%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
    }

    .ruling__time {
      position: absolute;
      top: 0.5rem;
      right: 0.875rem;
    }

    .ruling__actions {
      position: absolute;
      right: 0.875rem;
      top: 2.563rem;
    }

    .ruling__vote {
      top: 0;
      left: 0;
    }
  }

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

  &__overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.438rem;
    position: absolute;
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
    &__rule {
      flex: 0 0 21.938rem;
      height: 21.938rem;
      overflow: hidden;
      padding: 9.125rem 2.125rem;
    }

    &__vote {
      top: 9.125rem;
    }

    &__content {
      gap: 0.875rem;
    }

    &__container {
      margin-bottom: 1.75rem;
    }

    &__title-container {
      margin-bottom: 1.75rem;
    }

    &__selection {
      display: unset;
      height: 1.75rem;
      width: 8.188rem;
    }

    &__image {
      display: unset;
      height: 100%;
      position: absolute;
    }

    &__content {
      overflow-x: unset;
      flex-wrap: wrap;
    }
  }
}

@media (min-width: 1440px) {
  .ruling {
    &__rule {
      flex: 0 0 21.75rem;
      height: 21.75rem;
    }

    &__author {
      font-size: 2.25rem;
      line-height: 2.7rem;
    }

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

    &__rule.list {
      height: 10.625rem;

      .ruling__author-container {
        width: 29.688rem;
      }

      .ruling__author {
        font-size: 2.25rem;
        line-height: 3.938rem;
        -webkit-line-clamp: 1;
      }

      .ruling__comment {
        font-size: 1.125rem;
        line-height: 1.35rem;
        width: 34.25rem;
      }

      .ruling__vote {
        height: 2.813rem;
        width: 2.813rem;
      }

      .ruling__vote > img {
        height: 1.5rem;
        width: 1.5rem;
      }

      .ruling__progress {
        font-size: 1.688rem;
        line-height: 2.025rem;
        height: 3.375rem;

        &-right > img {
          margin-right: 1.125rem;
          margin-left: 0.563rem;
        }

        &-left > img {
          margin-left: 1.125rem;
          margin-right: 0.563rem;
        }
      }

      .ruling__percentage > img {
        height: 1.406rem;
        width: 1.406rem;
      }

      .ruling__time {
        font-size: 0.938rem;
        line-height: 1.125rem;
      }

      .ruling__actions {
        gap: 0.563rem;
      }

      .ruling__action {
        height: 2.813rem;
        width: 2.813rem;

        img {
          height: 1.5rem;
          width: 1.5rem;
        }

        &--vote {
          font-size: 1.125rem;
          line-height: 1.35rem;
          height: 2.813rem;
          width: 8.438rem;
        }
      }

    }
  }
}
</style>
