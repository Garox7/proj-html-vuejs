<template>
  <header>
    <div class="container flex-row-center">
      <div class="logo">
        <img :src="headerData.logo.src" :alt="headerData.logo.alt">
      </div>
      <div class="links">
        <nav>
          <ul>
            <li v-for="obj in headerData.links" :key="obj.link">
              <a href="#">{{ obj.link }}</a>
            </li>
          </ul>
        </nav>
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
