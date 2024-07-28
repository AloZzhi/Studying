import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
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

  { path: '/register', component: Register },
  {
    path: '/aiChat', component: AiChat
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
