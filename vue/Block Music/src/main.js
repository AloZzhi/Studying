import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/reset.css'
import 'lib-flexible/flexible.js'   // 修改跟字体大小

import { Form, Field,Button, NavBar, Tabbar, TabbarItem, Icon, Image as VanImage, Cell, CellGroup, List } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(VanImage);
app.use(Cell);
app.use(List);

app.mount('#app')
