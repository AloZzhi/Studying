import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { componentSizeMap } from 'element-plus'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: () => import('../views/Layout.vue')
    }

  ]
})

export default router

