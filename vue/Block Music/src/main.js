import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/reset.css'
import 'lib-flexible/flexible.js'   // 修改跟字体大小

import { Button, Form, Field, Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Button);
app.use(Form);
app.use(Field);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')
