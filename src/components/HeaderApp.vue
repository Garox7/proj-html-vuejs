<template>
  <header>
    <div class="container flex-row-center">
      <div class="logo flex-row-center">
        <img :src="headerData.logo.src" :alt="headerData.logo.alt">
      </div>
      <div class="nav-links flex-row-center">
        <nav class="flex-row-center">
          <ul class="link flex-row-center">
            <li v-for="obj in headerData.links"
              :key="obj.link"
              class="flex-row-center"
            >
              <div v-if="obj.tag" class="tag">NEW</div>
              <a href="#">{{ obj.link }}</a>
            </li>
          </ul>
        </nav>
        <div class="social flex-row-center">
          <font-awesome-icon v-for="obj in headerData.social"
            :key="obj.social_ico"
            :icon="`${obj.social_ico}`"
            :href="obj.href"
            class="ico"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  props: {
    headerData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

header {
  max-width: 100%;
  height: $header-height;

  .container {
    padding: $header-padding;
    justify-content: space-between;

    .logo {
      width: $logo-width;
    }

    .nav-links {
      gap: 2rem;
      height: 100%;

      nav {
        height: 100%;

        .link {
          gap: 1rem;
          height: 100%;

          li {
            height: 100%;
            font-family: 'Roboto Slab', serif;
            font-size: $link-font-size;
            font-weight: bold;
            position: relative;

            &:hover {
              border-bottom: 2px solid $buttercup;
              margin-bottom: -2px;
            }
          }

          .tag {
            background-color: $red;
            color: $white;
            font-size: 10px;
            padding: 1px 3px;
            border-radius: 4px;
            position: absolute;
            bottom: 70%;
            right: 0;
          }
        }
      }

      .social {
        gap: .5rem;

        .ico {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
