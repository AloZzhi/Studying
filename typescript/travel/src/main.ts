import { createApp } from 'vue'
import '@/assets/mian.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import {Tabbar,
  TabbarItem
} from 'vant'
import 'vant/lib/index.css'

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(pinia)

app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')
    
