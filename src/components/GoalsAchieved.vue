<template>
  <div class="goal-acheived flex-row-center">
    <div class="goal-icon flex-row-center">
      <font-awesome-icon :icon="`${ icon }`" class="icon"/>
    </div>
    <div class="goal-score">
      <h2>{{ number }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalsAchieved',
  props: {
    icon: String,
    number: Number,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

.goal-acheived {

.icon {
  font-size: 52px;
  color: $white;
  margin-right: 1rem;
}

  .goal-score {
    h2 {
      color: $buttercup;
    }

    p {
      font-family: 'Roboto Slab', serif;
      color: $white;
      font-weight: bold;
    }
  }
}
</style>
