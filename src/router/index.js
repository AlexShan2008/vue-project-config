import App from '../App.vue';
import Home from '../page/Home/Home.vue';
import Profile from '../page/Profile/Profile.vue';

export default [{
  path: '/',
  component: App,
  children: [
    { path: '/home', component: Home },
    { path: '/profile', component: Profile },
  ],
}];
