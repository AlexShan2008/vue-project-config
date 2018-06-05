import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import Home from '../page/Home/Home.vue';
import Profile from '../page/Profile/Profile.vue';

Vue.use(VueRouter);
export default new VueRouter({
  routes: [{
    path: '/',
    component: App,
    children: [
      { path: '/home', component: Home },
      { path: '/profile', component: Profile },
    ],
  }],
});

