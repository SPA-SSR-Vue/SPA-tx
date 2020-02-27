import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import Home from '../views/Home/Home.vue'
import Hot from '../views/Hot/Hot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/hot', name: 'hot', component: Hot },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
