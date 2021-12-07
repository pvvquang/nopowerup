import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.ts'
import './assets/scss/reset.scss';
import mixin from './mixins/mixin.js';

Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
