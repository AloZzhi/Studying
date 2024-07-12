import { createRouter, createWebHashHistory } from './grouter/index'
import Home from '../view/Home.vue'
import About from '../view/About.vue'


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;