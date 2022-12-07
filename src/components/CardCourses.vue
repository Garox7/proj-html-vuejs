<template>
  <div class="card-courses flex-column-center">
    <div class="bg-image"
      :style="{backgroundImage: `url(${image})`}">
      <div class="hover-layer flex-row-center">
        <h3>{{ price }}</h3>
      </div>
    </div>
    <div class="info flex-column-center">
      <div class="info-top">
        <h4>{{ title }}</h4>
        <p>{{ category }}</p>
      </div>
      <div class="info-bottom flex-row-center">
        <div class="flex-row-center">
          <font-awesome-icon class="card-ico" icon="fa-solid fa-signal" />
          <span>{{ level }}</span>
        </div>
        <div class="flex-row-center">
          <font-awesome-icon class="card-ico" icon="fa-solid fa-list-ul" />
          <span>{{ lectures + ' Lectures'}}</span>
        </div>
        <div class="flex-row-center">
          <font-awesome-icon class="card-ico" icon="fa-regular fa-clock" />
          <span>{{ duration + ' Hours' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCourses',
  props: {
    image: String,
    title: String,
    category: String,
    level: String,
    lectures: Number,
    duration: Number,
    price: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';
.card-courses {
  background-color: $white;
  height: 300px;
  justify-content: space-between;
  transition: all .2s ease-in-out;

  .bg-image {
    flex: 0 1 50%;
    width: 100%;
    height: 20%;
    background-size: cover;
    background-position: center;

    .hover-layer {
      opacity: 0;
      background-color: $hover-black;
      width: 100%;
      height: 100%;
      transition: all .2s ease-in-out;

      h3 {
        color: $white;
      }
    }
  }

  &:hover {
    box-shadow: 3px 3px 6px rgba(0 0 0 / .2);

    .hover-layer {
      opacity: 1;
    }
  }

  .info {
    flex: 1 1 50%;
    justify-content: space-between;
    padding: .8rem;

    .info-top {
      flex: 0 0 auto;
      text-align: center;

      p {
        font-size: 14px;
        color: $dove-gray;
        margin-top: 1rem;
      }
    }

    .info-bottom {
      border-top: 1px solid $black-haze;
      padding-top: 10px;
      gap: .5rem;

      div.flex-row-center {
        gap: .2rem;
        .card-ico {
          font-size: 12px;
          color: $buttercup;
        }

        span {
          font-size: 11px;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
