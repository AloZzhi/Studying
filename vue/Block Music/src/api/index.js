import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import Player from '../components/Player.vue';
import Lyrics from '../components/Lyrics.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/player', component: Player },
  { path: '/lyrics', component: Lyrics },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
