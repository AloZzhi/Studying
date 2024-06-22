import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Hot from '../pages/Hot.vue';
import { resolveDirective } from 'vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/suggest'
      },
      {
        path: '/home/newest',
        component: () => import('../pages/home/Newest.vue')
      },
      {
        path: '/home/suggest',
        component: () => import('../pages/home/Suggest.vue')
      }
    ]
  },
  {
    path: '/bot',
    component: () => import('../pages/Bot.vue')
  },
  {
    path: '/hot/:id',
    component: Hot
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router 