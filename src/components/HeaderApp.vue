<template>
  <header>
    <div class="container flex-row-center">
      <div class="logo">
        <img :src="headerData.logo.src" :alt="headerData.logo.alt">
      </div>
      <div class="links flex-row-center">
        <nav>
          <ul>
            <li v-for="obj in headerData.links" :key="obj.link">
              <a href="#">{{ obj.link }}</a>
            </li>
          </ul>
        </nav>
        <div class="social">
          <!-- <a v-for="obj in headerData.social"
            :key="obj.social_ico"
            :href="obj.href"
          >
            {{ obj.social_ico }}
          </a> -->
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
header {
  max-width: 100%;
  height: 100px;
}
.container {
  background-color: lightblue;
}
</style>
