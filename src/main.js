import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faSignal,
  faListUl,
  faGear,
  faRocket,
  faBriefcase,
  faFilm,
  faAngleLeft,
  faAngleRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faClock,
  faThumbsUp,
  faImage,
  faUser,
  faStar as faStarEmpty,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faSignal,
  faListUl,
  faClock,
  faThumbsUp,
  faGear,
  faRocket,
  faBriefcase,
  faImage,
  faFilm,
  faUser,
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarEmpty,
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
