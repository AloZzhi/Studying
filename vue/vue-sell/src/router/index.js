import { createRouter, createWebHistory } from 'vue-router'
import Goods from '../views/goods/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/comment',
      component: () => import('@/views/comment/Index.vue')
    },
    {
      path: '/seller',
      component: () => import('@/views/seller/Index.vue')
    }
  ]
})

export default router
