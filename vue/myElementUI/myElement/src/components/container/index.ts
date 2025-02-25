import { App } from 'vue'
import ElContainer from './Container.vue'
import ElHeader from './Header.vue'
import ElAside from './Aside.vue'
import ElMain from './Main.vue'
import Elfooter from './footer.vue'

export default {
  install(app: App) {
    app.component(ElContainer.name, ElContainer) //注册全局组件
    app.component(ElHeader.name, ElHeader) //注册全局组件
    app.component(ElAside.name, ElAside) //注册全局组件
    app.component(ElMain.name, ElMain) //注册全局组件
    app.component(Elfooter.name, Elfooter) //注册全局组件
  }
}