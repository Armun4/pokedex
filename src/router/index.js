import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newPokemon',
    name: 'newPokemon',
    component: () => import('../views/newPokemon.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
