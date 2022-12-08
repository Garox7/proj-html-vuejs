<template>
  <div class="card-benefit flex-row-center">
    <div class="icon-container flex-row-center">
      <font-awesome-icon :icon="`${ icon }`" class="benefit-icon"/>
    </div>
    <div class="text-container">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBenefit',
  props: {
    title: String,
    text: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';
.card-benefit {
  padding: 2rem 1rem;
  height: 180px;
  border-left: 4px solid $buttercup;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all .2s ease-in-out;

  .icon-container.flex-row-center {
    flex: 1 1 15%;
    height: 100%;
    align-items: flex-start;

    .benefit-icon {
      font-size: 36px;
      color: $buttercup;
    }
  }

  &:hover {
    background-color: $buttercup;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .icon-container.flex-row-center .benefit-icon {
      color: $white;
    }
  }

  .text-container {
    flex: 1 1 85%;
    margin-left: 1rem;

    h4 {
      font-size: 18px;
      margin-bottom: .5rem;
    }
  }
}
</style>
