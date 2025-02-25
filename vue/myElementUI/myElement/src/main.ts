import { createApp } from 'vue'

import container from './components/container/index.ts'
import App from './App.vue'

const app = createApp(App)

app.use(container)
app.mount('#app')
