// VueRouter 封装就在这里
import { ref, inject } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'

//在任何地方，就可以拿到router对象
//贼拉方便 createRouter对象
const useRouter = () => {
  return inject(ROUTER_KEY)
}

const createRouter = (options) => {
  return new Router(options)
}
// 返回一个hash 路由对象
// url #/about 
// hashchange
const createWebHashHistory = () => {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }
  return {
    url: window.location.hash.slice(1) || '/',
    bindEvents
  }
}

class Router {

  constructor(options) {

    this.history = options.history
    this.routes = options.routes
    console.log(options, '////')
    // 当前的url 状态  它是router-view  component计算属性的依赖
    this.current = ref(this.history.url)
    this.history.bindEvents(() => {
      // this 是router
      this.current.value = window.location.hash.slice(1)
      console.log(this.current.value)
    })
  }

  install(app) {
    console.log(app)
    // console.log('vue 要对接vue-router')
    // 全局组件的声明
    //provide向外提供router对象
    app.provide(ROUTER_KEY, this)
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
  }
}

export {
  createRouter,
  createWebHashHistory,
  useRouter
}