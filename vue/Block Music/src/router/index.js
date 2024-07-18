import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/collection',
      component: () => import('@/views/Collection.vue')
    },
    {
      path: '/lyrics',
      component: () => import('@/views/Lyrics.vue')
    },
    {
      path: '/musicPlay',
      component: () => import('@/views/MusicPlay.vue')
    }
  ]
})

export default router
