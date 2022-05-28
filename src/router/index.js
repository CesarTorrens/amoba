import Vue from 'vue'
import VueRouter from 'vue-router'
import PxHome from '@/templates/PxHome'
import ClinicalHistories from '@/templates/ClinicalHistories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PxHome
  },
  {
    path: '/ClinicalHistories',
    name: 'ClinicalHistories',
    component: ClinicalHistories,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
