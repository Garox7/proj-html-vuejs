<template>
    <div class="people" :style="{ backgroundImage: `url(${people})` }"
      :class="(currentReviews === index ? 'big': 'small')">
    </div>
</template>

<script>
export default {
  name: 'ReviewPeople',
  props: {
    people: String,
    currentReviews: Number,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.people {
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.people.small {
  width: 50px;
  height: 50px;
}

.people.big {
  width: 80px;
  height: 80px;
}
</style>
