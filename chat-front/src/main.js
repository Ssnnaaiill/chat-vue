import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import './plugins/socketPlugin';
import Directives from './plugins/directives';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  Directives,
  render: h => h(App),
}).$mount('#app');
