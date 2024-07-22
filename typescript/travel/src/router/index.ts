import { createRouter, createWebHistory } from 'vue-router'
// RouteRecordRaw 约定路由的类型
import type { RouteRecordRaw } from "vue-router"
import HomePage from '../views/HomePage/HomePage.vue' // home
import TheRoot from '../views/TheRoot.vue' // layout

// vue3 98% 代码是用ts 写的， 而不是js 
// ts 是js 的超级 减少js 开发90%以上的错误， 都来自类型的缺失
// js 写起来跟java一样 
// 静态编译，类型检测
// 直接用js 写没问题， 加上一些 
const rootRoutes: RouteRecordRaw[] = [{
    path: 'home',
    name: 'Home',
    component: HomePage
}]

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: TheRoot,
        redirect: "/home",
        children: rootRoutes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

