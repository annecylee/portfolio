import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '../src/router/routes'

let router = new VueRouter({
  routes: routes,
  mode: 'history'
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
