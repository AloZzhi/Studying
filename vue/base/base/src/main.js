//引入vue
import { createApp } from 'vue'
//引入根组件
import App from './App.vue'
//让vue读懂根组件App，再将根组件转换成html，挂载在#app
createApp(App).mount('#app')
