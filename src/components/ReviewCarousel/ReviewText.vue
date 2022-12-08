<template>
  <div class="review-text-container flex-column-center">
    <div class="title" v-show="currentReviews === index">
      <h3>{{ title }}</h3>
    </div>
    <div class="vote flex-row-center" v-show="currentReviews === index">
      <span>
        <font-awesome-icon v-for="i in vote"
          :key="i"
          icon="fa-solid fa-star" />
      </span>
      <span>
        <font-awesome-icon v-for="i in (maxVote - vote)"
          :key="i"
          icon="fa-regular fa-star" />
      </span>
    </div>
    <div class="review-text" v-show="currentReviews === index">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviewText',
  props: {
    title: String,
    vote: Number,
    text: String,
    currentReviews: Number,
    index: Number,
  },
  data() {
    return {
      maxVote: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';
.title, .vote {
  margin-bottom: 1rem;
}

.vote {
  color: $buttercup;
}

.review-text {
  text-align: center;
  height: 100px;
}
</style>
