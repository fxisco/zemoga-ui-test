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
  </section>
</template>

<style lang="scss">
.ruling {
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
}

@media (min-width: 768px) {
  .ruling {
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
