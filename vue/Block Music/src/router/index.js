import { createRouter, createWebHistory } from 'vue-router';

// 路由组件使用动态导入
const Home = () => import('@/views/Home.vue');
const Player = () => import('@/components/Player.vue');
const Lyrics = () => import('@/components/Lyrics.vue');
const Login = () => import('@/views/Login.vue');
const Register = () => import('@/views/Register.vue');
const AiChat = () => import('@/views/AiChat.vue');
const Search = () => import('@/views/Search.vue');
const Library = () => import('@/views/Library.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  { 
    path: '/player', 
    name: 'Player',
    component: Player,
  },
  { 
    path: '/lyrics', 
    name: 'Lyrics',
    component: Lyrics,
  },
  { 
    path: '/login', 
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/aichat',
    name: 'AiChat',
    component: AiChat,
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
