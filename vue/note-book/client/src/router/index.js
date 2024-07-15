import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register.vue')
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: () => import('@/views/noteClass.vue')
    }
  ]
})
//全局路由守卫
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  if (!whitePath.includes(to.path)) {
    //判断本地有无此数据
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})

export default router
