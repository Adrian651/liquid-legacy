import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue';
import admin from './components/admin.vue';
import soon from './components/soon.vue';

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueRouter)
Vue.use(VueFullPage);

const routes = [
  { path: '/', component: soon },  
  // { path: '/', component: home },
  // { path: '/admin', component: admin },
];

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
