import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $ from 'jquery';
import '@/style/main.less';

Vue.config.productionTip = false;
Vue.prototype.$ = $;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
