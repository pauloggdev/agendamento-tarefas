import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/bootstrap'


import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
// import './assets/css/app.css'
// import './assets/js/app.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
