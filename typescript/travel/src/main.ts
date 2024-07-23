import { createApp } from 'vue'
import '@/assets/mian.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import {Tabbar,
  TabbarItem,
  Form, Field, CellGroup ,NavBar,Checkbox
} from 'vant'
import 'vant/lib/index.css'

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(pinia)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Checkbox);

app.mount('#app')
    
