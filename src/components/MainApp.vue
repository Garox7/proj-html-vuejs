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
        SIGN SECTION
    ------------------->
    <section class="sign-section">
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

    <!-----------------
      NEW COURSE SECTION
    ------------------->
    <section class="newcourses-section">
      <div class="container flex-column-center">
        <h2>{{ mainData.newCoursesSection.title }}</h2>
        <div class="card-container flex-row-center">
          <CardCourses
            v-for="card in mainData.newCoursesSection.courses"
            :key="card.course_title"
            :image="card.src"
            :title="card.courses_title"
            :category="card.category"
            :level="card.level"
            :lectures="card.lectures"
            :duration="card.duration"
            :price="card.price"
            class="card"
          />
        </div>
        <button>Load More</button>
      </div>
    </section>

    <!-----------------
      ORDER BOOK SECTION
    ------------------->
    <section class="orderbook-section"
    :style="{backgroundImage: `url(${mainData.orderBookSection.bg_img})`}"
    >
      <div class="container flex-row-center">
        <div class="cta flex-column-center">
          <h2>{{ mainData.orderBookSection.title }}</h2>
          <p class="bold-italic">{{ mainData.orderBookSection.text }}</p>
          <div href="!#">
            <img :src="mainData.orderBookSection.btn_amazon" alt="">
          </div>
        </div>
        <div class="right-img flex-row-center">
          <img :src="mainData.orderBookSection.book_img" alt="">
        </div>
      </div>
    </section>

    <!-----------------
      BENEFITS SECTION
    ------------------->
    <section class="benefits-section">
      <div class="container flex-column-center">
        <h2>{{ mainData.benefitsSection.title }}</h2>
        <div class="card-container flex-row-center">
          <CardBenefit v-for="card in mainData.benefitsSection.benefit"
            :key="card.title"
            :title="card.title"
            :text="card.text"
            :icon="card.benefit_icon"
            class="card"
          />
        </div>
      </div>
    </section>

    <!-----------------
    GOALS ACHIEVED SECTION
    ------------------->
    <section class="goals-achieved-section flex-row-center"
    :style="{backgroundImage: `url(${mainData.goalsAchievedSection.bg_image})`}">
      <div class="container flex-row-center">
        <div class="goals-container flex-row-center">
          <GoalsAchieved v-for="goal in mainData.goalsAchievedSection.goals"
            :key="goal.goal_text"
            :icon="goal.goal_icon"
            :number="goal.goal_num"
            :text="goal.goal_text"
            class="goals"
          />
        </div>
      </div>
    </section>

    <!-----------------
      REVIEW SECTION
    ------------------->
    <section class="review-section">
      <div class="container-small">
        <ReviewCarousel
          :reviewData="mainData.ReviewCarousel"
        />
      </div>
    </section>
  </main>
</template>

<script>
import MailCounter from '@/components/MailCounter.vue';
import CardCourses from '@/components/CardCourses.vue';
import CardBenefit from '@/components/CardBenefit.vue';
import GoalsAchieved from '@/components/GoalsAchieved.vue';
import ReviewCarousel from '@/components/ReviewCarousel/ReviewCarousel.vue';

export default {
  name: 'MainApp',
  components: {
    MailCounter,
    CardCourses,
    CardBenefit,
    GoalsAchieved,
    ReviewCarousel,
  },
  props: {
    mainData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

/******************
   HERO SECTION
*******************/
.hero-section {
  height: $hero-height;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .text-container {
    max-width: $text-container-width;
    position: absolute;
    left: 45%;
    bottom: 50%;

    h1 {
      line-height: 1;

      span {
        color: $buttercup;
      }
    }

    p {
      line-height: 2;
    }
  }
}

/******************
   SIGN SECTION
*******************/
.sign-section {
  margin-bottom: 1rem;
  height: $sign-height;

  .container {
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
        line-height: 2;
      }
    }
  }
}

/******************
  NEW COURSES SECTION
*******************/
.newcourses-section {
  background-color: $shakespeare;
  padding: 2.5rem 0;

  .card-container {
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;

    .card {
      flex: 1 1 calc(100% / 3 - 1rem);
      min-width: 250px;
    }
  }

  button {
    background-color: $buttercup;
    margin-top: 2rem;

    &:hover {
      background-color: $firefly;
      box-shadow: 2px 2px 5px rgba(0 0 0 / .3);
    }
  }
}

/******************
  ORDER BOOK SECTION
*******************/
.orderbook-section {
  height: $order-book-height;
  overflow: hidden;

  .container {
    padding-bottom: 0px;

    .cta {
      flex: 1 1 40%;
      text-align: center;

      h2 {
        font-family: 'Roboto', sans-serif;
        color: $buttercup;
      }

      p {
        color: $white;
        font-size: 20px;
        font-style: italic;
        line-height: 1.5;
        margin-bottom: 1rem;
      }

      img{
        max-width: 180px;
      }
    }

    .right-img {
      flex: 1 1 60%;
      max-width: 380px;
      display: block;
      align-items: flex-end;

      img{
        margin-bottom: -20px;
      }
    }
  }
}

/******************
  BENEFITS SECTION
*******************/
.benefits-section{
  padding: 2.5rem 0;

  .card-container {
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;

    .card{
      flex: 1 1 calc(100% / 2 - 1rem);
      min-width: 320px;
    }
  }
}

/******************
GOALS ACHIEVED SECTION
*******************/
.goals-achieved-section {
  height: $goal-section-height;
  background-position: bottom 80% right 50%;

  .goals-container {
    gap: 2.5rem;
  }
}

/******************
  REVIEW SECTION
*******************/
.review-section {
  padding: 2.5rem 0;
}
</style>
