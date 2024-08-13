import { createApp } from 'vue'
import { createPinia } from 'pinia'

// main.js
import 'tailwindcss/tailwind.css';

import App from './App.vue'
import router from './router'
import '@/assets/reset.css'
import 'lib-flexible/flexible.js'   // 修改跟字体大小

import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Vant)

app.mount('#app')
