# 手撕 vue-router

- <router-link></router-link>
  组件 hashRouter
  <a : href="'#'+props.to"></a>
  如何显示不同名字的链接文字？
  <router-link>
  首页<slot>插槽 提升组件的定制性 可读性
  </router-link>

- vue-router 中不需要用的时候引入
  全局组件
  app.component('router-link',RouterLink)
  app.use(router)
  use 方法做了什么

- vue 分成 vue 本体，及生态的
- google angular
- 一个人 vue 开源项目
- 边界（MVVM，组件，VDOM）和社区生态（install）
  app.use(router)
  router.install(app)

# 从源码学习的 vue 语法

- slot 插槽
- <component :is="component">动态组件
- app.provider(KEY,router)//将我们的对象挂载到 app 上，向任何组件提供
  -inject
- useRouter use 开头，这一类的函数叫做 hooks 函数，来自于 react
