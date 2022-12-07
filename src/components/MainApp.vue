<template>
  <main>
    <!-----------------
        HERO SECTION
    ------------------->
    <section class="hero-section"
      :style="{backgroundImage: `url(${mainData.heroSection.hero_image})`}">
      <div class="text-container">
        <h1>
          {{ mainData.heroSection.title_first }}
          <span> {{ mainData.heroSection.title_color }} </span>
          {{ mainData.heroSection.title_second }}
        </h1>
        <p>{{ mainData.heroSection.text }}</p>
      </div>
      <MailCounter
        :counterDate="mainData.counterDate"
      />
    </section>

    <!-----------------
        FIRM SECTION
    ------------------->
    <section class="sign-section flex-row-center">
      <div class="container flex-row-center">
        <div class="presentation flex-column-center">
          <h3>
            {{ mainData.signSection.presentation_text }}
          </h3>
          <img :src="mainData.signSection.firm_src" alt="">
        </div>
        <div class="presentation-text">
          <p>{{ mainData.signSection.text }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import MailCounter from '@/components/MailCounter.vue';

export default {
  name: 'MainApp',
  components: {
    MailCounter,
  },
  props: {
    mainData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';
.hero-section {
  height: 565px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .text-container {
    max-width: 420px; //variable
    position: absolute;
    left: 45%;
    bottom: 50%;

    h1 {
      margin-bottom: 1rem;
      line-height: 1;

      span {
        color: $buttercup;
      }
    }

    p {
      color: $dove-gray;
      font-size: 14px;
      line-height: 2;
    }
  }
}
.sign-section {
  height: 405px;

  .container {
    margin-top: 1.5rem;
    gap: 4rem;

    .presentation {
      flex: 1 1 40%;

      img {
        margin: 2rem 5rem 0 0;
        align-self: flex-end;
        max-width: 100px;
      }
    }

    .presentation-text {
      flex: 1 1 60%;

      p {
        font-weight: 300;
        font-size: 13px;
        line-height: 2;
      }
    }
  }
}
</style>
