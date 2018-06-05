import Vue from 'vue';
import router from './router';
import notify from './plugin/notify';
import store from './store/index';
import App from './App.vue';

// 使用notify插件
Vue.use(notify, {
  delay: 5000,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

