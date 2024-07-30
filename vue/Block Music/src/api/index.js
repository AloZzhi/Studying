import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Player from '../components/Player.vue';
import Lyrics from '../components/Lyrics.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/player', component: Player },
  { path: '/lyrics', component: Lyrics },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
