<template>
  <div>
    <HeaderApp
      :headerData="headerData"
    />
    <MainApp
      :mainData="mainData"
    />
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
      mainData: {
        heroSection:
          {
            hero_image: 'img/slide-1.jpg',
            title_first: 'Start your Human',
            title_color: 'Revolution',
            title_second: 'Today',
            text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of sping which I enjoy with my whole heart.',
          },
        counterDate:
          {
            text:
            {
              title_first: 'Limited Sale: ',
              title_second: 'All courses with 55% off',
            },
            year: 2022,
            mounth: 11,
            day: 25,
            hour: 0,
            minute: 0,
            second: 0,
          },
        signSection:
          {
            presentation_text: 'Hew there, my name is John Doe I\'m the founder of the Brain Academy.',
            firm_src: 'img/sign.jpg',
            text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary',
          },
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
