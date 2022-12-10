<template>
  <div>
    <HeaderApp
      :headerData="headerData"
    />
    <MainApp
      :mainData="mainData"
    />
    <FooterApp
      :footerData="footerData"
    />
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
            title: 'New Courses',
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
        benefitsSection:
          {
            title: 'Why my Courses?',
            benefit: [
              {
                title: 'Entrepreneurship',
                text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate',
                benefit_icon: 'fa-regular fa-thumbs-up',
              },
              {
                title: 'Accelerated learning',
                text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate',
                benefit_icon: 'fa-solid fa-gear',
              },
              {
                title: 'Productivity',
                text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate',
                benefit_icon: 'fa-solid fa-rocket',
              },
              {
                title: 'Life Coaching',
                text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate',
                benefit_icon: 'fa-solid fa-briefcase',
              },
            ],
          },
        goalsAchievedSection:
          {
            bg_image: 'img/slide-3.jpg',
            goals: [
              {
                goal_icon: 'fa-regular fa-user',
                goal_num: 3195,
                goal_text: 'Online Learder',
              },
              {
                goal_icon: 'fa-solid fa-film',
                goal_num: 23,
                goal_text: 'Video Courses',
              },
              {
                goal_icon: 'fa-regular fa-image',
                goal_num: 437,
                goal_text: 'Sliders & Image',
              },
              {
                goal_icon: 'fa-solid fa-briefcase',
                goal_num: 1440,
                goal_text: 'Excellent Reviews',
              },
            ],
          },
        ReviewCarousel: [
          {
            people_img: 'img/people1.jpg',
            review_title: 'Electronic Music Course',
            vote: 5,
            review_text: 'Ho frequentato il master in Music Business Management. Il corso mi ha permesso di acquisire conoscenze fondamentali per l\'industria musicale e di conoscere importanti professionisti del settore che mi hanno aiutata ad aprire gli occhi sul percorso che vorrei intraprendere nella mia vita lavorativa.',
          },
          {
            people_img: 'img/people2.jpg',
            review_title: 'Fashion Photograpy',
            vote: 5,
            review_text: 'Ho scelto questo Master per dare nuovo slancio alla mia carriera professionale. Le lezioni pratiche ed interattive ed i business case affrontati mi hanno aiutata nella gestione concreta delle issues più ricorrenti nel mondo del Fashion. Ho conosciuto tools digitali utili e facilmente fruibili. Last but not least: il Master è una grande opportunità di networking.',
          },
          {
            people_img: 'img/people3.jpg',
            review_title: 'Communication course',
            vote: 4,
            review_text: 'Il Master ha rappresentato per me un decisivo acceleratore verso il mondo del lavoro, avvicinandomi velocemente e in maniera più qualificata e strutturata, a primari contesti lavorativi nazionali e multinazionali.',
          },
        ],
      },
      footerData: {
        first_column: {
          title: 'ABOUT',
          text: 'Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education. developed by a Boolean student.',
          social: [
            {
              social_ico: 'fa-brands fa-facebook',
              href: '#!',
            },
            {
              social_ico: 'fa-brands fa-twitter',
              href: '#!',
            },
            {
              social_ico: 'fa-brands fa-instagram',
              href: '#!',
            },
          ],
        },
        second_column: {
          title: 'CONTACT',
          address: 'USA, California 46, First Avenue, California',
          tel: '+1 212 458 300 46',
          fax: '+1 212 357 375 24 46',
          email: 'info@masterstudy.com',
        },
        third_column: {
          title: 'PAGES',
          links: [
            'blog',
            'Home',
            'Shortcodes',
            'Courses',
            'Membership',
            'Typografy',
          ],
        },
        fourth_column: {
          title: 'BLOG',
          blogs: [
            {
              img: 'img/Blog1.jpeg',
              title: 'Our Main target is to "Developing Yourself as a Leader"',
              date: 'August 9, 2022',
            },
            {
              img: 'img/Blog2.jpeg',
              title: 'Those Other COllege Exanses You Aren\'t Thinking About',
              date: 'August 20, 2022',
            },
          ],
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

.container-small {
  max-width: 600px;
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
