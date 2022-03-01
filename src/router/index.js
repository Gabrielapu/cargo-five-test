import Vue from 'vue'
import VueRouter from 'vue-router'
import PortList from '../views/PortList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PortList',
    component: PortList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
