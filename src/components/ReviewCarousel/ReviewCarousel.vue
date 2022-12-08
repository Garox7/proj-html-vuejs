<template>
  <div class="carousel-container flex-column-center">
    <h2>What Student Say</h2>
    <div class="people-controls flex-row-center">

      <div class="control flex-row-center"
        @click="changeLeft" @keydown="changeLeft"
      >
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </div>

      <div class="people-container flex-row-center">
        <ReviewPeople v-for="(people, index) in reviewData"
          :key="people.people_img"
          :people="people.people_img"
          :currentReviews="currentReviews"
          :index="index"
        />
      </div>

      <div class="control flex-row-center"
        @click="changeRight" @keydown="changeRight"
      >
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
    </div>

    <div class="title-vote-container">
      <ReviewText v-for="(review, index) in reviewData"
        :key="review.title"
        :title="review.review_title"
        :vote="review.vote"
        :text="review.review_text"
        :currentReviews="currentReviews"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import ReviewPeople from '@/components/ReviewCarousel/ReviewPeople.vue';
import ReviewText from '@/components/ReviewCarousel/ReviewText.vue';

export default {
  name: 'ReviewCarousel',
  components: {
    ReviewPeople,
    ReviewText,
  },
  props: {
    reviewData: Array,
  },
  data() {
    return {
      currentReviews: 1,
    };
  },
  methods: {
    changeLeft() {
      if (this.currentReviews === 0) {
        this.currentReviews = this.reviewData.length;
      }
      this.currentReviews -= 1;

      console.log('Verso sinistra', this.currentReviews);
    },
    changeRight() {
      this.currentReviews += 1;

      if (this.currentReviews === this.reviewData.length) {
        this.currentReviews = 0;
      }

      console.log('Verso destra', this.currentReviews);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

.carousel-container {
  h2 {
    margin-bottom: 2rem;
  }

  .people-controls {
    margin-bottom: 1.5rem;

    .control {
      font-size: 22px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        background-color: $shakespeare;
      }
    }

    .people-container {
      gap: 1rem;
      margin: 0 4rem;
    }
  }
}
</style>
