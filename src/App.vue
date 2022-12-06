<template>
  <div>
    <HeaderApp
      :headerData="headerData"
    />
    <MainApp />
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
import MainApp from '@/components/MainApp.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
  data() {
    return {
      headerData: {
        logo:
          {
            src: 'assets/img/MasterStudy-1.svg',
            alt: 'Logo',
          },
        links: [
          {
            link: 'Courses',
            href: '!#',
          },
          {
            link: 'Course Format',
            href: '!#',
          },
          {
            link: 'Add Course',
            href: '!#',
          },
          {
            link: 'Pages',
            href: '!#',
          },
          {
            link: 'Demos',
            href: '!#',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
  color: $text-color;
}

p, a {
  color: $text-color;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  max-height: 100%;
}

// CONTAINER GENERAL SETTING
.container {
  max-width: 850px;
  height: 100%;
  margin: 0 auto;
}

//FLEX PRE-SETTING
.flex-row-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
