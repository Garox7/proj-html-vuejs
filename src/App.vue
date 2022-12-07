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
        newCoursesSection:
          {
            title:
              {
                text_title: 'New Courses',
              },
            courses: [
              {
                src: 'img/course1.jpeg',
                courses_title: 'How to be a DJ? Make Eletronic Music',
                category: 'Eletronic',
                level: 'Advanced',
                lectures: 8,
                duration: 6,
                price: '€ 100',
              },
              {
                src: 'img/course2.jpeg',
                courses_title: 'Nvidia and UE4 Technologies pratice',
                category: 'Nvidia',
                level: 'Advanced',
                lectures: 8,
                duration: 6,
                price: '€ 100',
              },
              {
                src: 'img/course3.jpg',
                courses_title: 'Fashion Photography from professional',
                category: 'Fashion',
                level: 'Advanced',
                lectures: 6,
                duration: 6,
                price: '€ 100',
              },
              {
                src: 'img/course4.jpeg',
                courses_title: 'Design instruments for communication',
                category: 'Communication',
                level: 'Intermediate',
                lectures: 6,
                duration: 6,
                price: '€ 100',
              },
              {
                src: 'img/course5.png',
                courses_title: 'Make your concept right and beautiful',
                category: 'Art',
                level: 'Intermediate',
                lectures: 6,
                duration: 6,
                price: '€ 100',
              },
              {
                src: 'img/course6.jpeg',
                courses_title: 'Road Bike Manual or How to Be a Champion',
                category: 'Bycicling',
                level: 'Beginner',
                lectures: 6,
                duration: 6,
                price: '€ 100',
              },
            ],
          },
        orderBookSection:
          {
            title: 'Get my Exclusive investing Book Just for € 19,50',
            text: 'Vestibulum imentum eu urna vel cursus, Aenean vehicula qua quam, vitae pellentesque urna elementum cursus.',
            btn_amazon: 'img/amazon.png',
            href: '#!',
            book_img: 'img/book.png',
            bg_img: 'img/slide-2.jpg',
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
  padding: 1rem;
}

//FLEX PRE-SETTING
.flex-row-center {
  display: flex;
  // flex-wrap: wrap;
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
