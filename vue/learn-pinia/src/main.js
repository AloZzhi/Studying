import { createApp } from 'vue'
import App from './App3.vue'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).mount('#app')
