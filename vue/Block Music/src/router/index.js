import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Search from '../views/Search.vue';
import Library from '../views/Library.vue';
import AiChat from '@/views/AiChat.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  { path: '/login', component: Login },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/aichat',
    name: 'AiChat',
    component: () => import('@/views/AiChat.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('@/views/Library.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
