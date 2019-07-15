import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
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
