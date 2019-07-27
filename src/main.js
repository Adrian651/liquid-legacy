import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue';
import admin from './components/admin.vue';
import soon from './components/soon.vue';
import Vuetify from 'vuetify'

Vue.use(VueRouter)
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  breakpoint: {
    thresholds: {
      width: 900
    },
    theme: {
      primary: '#c41230',
      secondary: '#002c76',
      accent: '#8c9eff',
      error: '#b71c1c'
    },
  }
})


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
  vuetify: new Vuetify(),
  render: h => h(App),
  router
})