<template>
  <footer>
    <div class="container flex-row-center">
      <div class="about">
        <h4>{{ footerData.first_column.title }}</h4>
        <p>{{ footerData.first_column.text }}</p>
        <div class="social-icon">
          <font-awesome-icon v-for="social in footerData.first_column.social"
            :key="social.social_ico"
            :icon="`${social.social_ico}`"
            class="icon"
          />
        </div>
      </div>

      <div class="contact">
        <h4>{{ footerData.second_column.title }}</h4>
        <p>{{ footerData.second_column.address }}</p>
        <p>{{ footerData.second_column.tel }}</p>
        <p>{{ footerData.second_column.tel }}</p>
        <p>{{ footerData.second_column.email }}</p>
      </div>

      <div class="pages">
        <h4>{{ footerData.third_column.title }}</h4>
        <ul class="link-list flex-row-center">
          <li v-for="link in footerData.third_column.links"
            :key="link"
          >
          {{ link }}</li>
        </ul>
      </div>

      <div class="blog">
        <h4>{{ footerData.fourth_column.title }}</h4>

        <div v-for="blog in footerData.fourth_column.blogs"
          :key="blog.title"
          class="blog-preview flex-row-center">

          <img :src="blog.img" :alt="blog.title">

          <div class="blog-info flex-column-center">
            <h5>{{ blog.title }}</h5>
            <p>{{ '- ' + blog.date }}</p>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterApp',
  props: {
    footerData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

footer {
  background-color: $buttercup;
  height: $footer-heigth;
  padding: 2rem;

  .container {
    gap: 1.5em;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 12px;
    color: $firefly;
  }

  .about {
    flex: 1 1 25%;
    height: 100%;

    p {
      margin-bottom: .8rem;
    }

    .icon {
      font-size: 18px;
      margin-right: 15px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        color: $white;
      }
    }
  }

  .contact {
    flex: 1 1 25%;
    height: 100%;

    p:nth-child(2), p:nth-child(4) {
      margin-bottom: .5rem;
    }
  }

  .pages {
    flex: 1 1 25%;
    height: 100%;

    .link-list {
      flex-wrap: wrap;
      align-items: flex-start;
      gap: .8rem 1rem;
      margin-left: 12px;

      li {
        flex: 1 1 calc(100% / 2 - 1rem);
        list-style: disc;
        font-size: 12px;
      }
    }
  }

  .blog {
    flex: 1 1 25%;
    height: 100%;
    .blog-preview{
      gap: 1rem;
      margin-bottom: 10px;

      img {
        max-width: 50px;
      }

      .blog-info {
        align-items: flex-start;

        h5 {
          font-size: 11px;
          line-height: 1;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
