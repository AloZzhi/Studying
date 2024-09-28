import { createApp } from 'vue';  
import App from './App.vue';  
import router from './router';  
import * as ElementPlusIconsVue from '@element-plus/icons-vue';  
import ElementPlus from 'element-plus';  
import 'element-plus/dist/index.css';  
import zhCn from 'element-plus/es/locale/lang/zh-cn';  
import "@yll10243/vue3-carousel/dist/style.css"

const app = createApp(App);  

// 使用 Element Plus 组件库，并设置语言为中文  
app.use(ElementPlus, {  
  locale: zhCn,  
});  

// 注册 Element Plus 图标组件  
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {  
  app.component(key, component);  
}  

// 使用路由并挂载应用  
app.use(router).mount('#app');
