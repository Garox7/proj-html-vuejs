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
            src: 'img/MasterStudy-1.svg',
            alt: 'Logo',
          },
        links: [
          {
            link: 'Courses',
            href: '!#',
            tag: false,
          },
          {
            link: 'Course Format',
            href: '!#',
            tag: false,
          },
          {
            link: 'Add Course',
            href: '!#',
            tag: true,
          },
          {
            link: 'Pages',
            href: '!#',
            tag: false,
          },
          {
            link: 'Demos',
            href: '!#',
            tag: false,
          },
        ],
        social: [
          {
            social_ico: 'fa-brands fa-linkedin',
            href: '#!',
          },
          {
            social_ico: 'fa-brands fa-instagram',
            href: '#!',
          },
          {
            social_ico: 'fa-brands fa-facebook',
            href: '#!',
          },
          {
            social_ico: 'fa-brands fa-twitter',
            href: '#!',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

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
