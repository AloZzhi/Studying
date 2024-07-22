import { createRouter, createWebHistory } from 'vue-router'
//类型定义RouteRecordRaw，约定路由的类型
import type { RouteRecordRaw } from "vue-router"
//vue3 98%的代码都是ts
//ts是js的超集，减少90%的错误,都是来自类型的缺失
//js写起来就像java一样
//静态编译，类型检测
//直接用js写没问题，加上一些类型检测
const rootRoutes : RouteRecordRaw[] = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage/HomePage.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes: rootRoutes
})

export default router

