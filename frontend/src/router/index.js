import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import pagtwo from '../views/pagtwo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pagtwo',
    name: 'pagtwo',
    component: pagtwo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
