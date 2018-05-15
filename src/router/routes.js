import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '*', component: require('../components/About.vue').default},
  {name: 'intro', path: '/', component: require('../components/About.vue').default},
  {name: 'projects', path: '/projects', component: require('../components/Projects.vue').default},
  {name: 'contact', path: '/contact', component: require('../components/Contact.vue').default}
]
export const router = new VueRouter({
  mode: 'history',
  routes: routes,
  // Redirect to the home route if any routes are unmatched
  redirect: {'*': '/intro'}
})

new Vue({
  router
}).$mount('#app')

export default routes
