import { defineConfig } from 'vite';  
import vue from '@vitejs/plugin-vue';  
import { resolve } from 'path';  

const pathResolve = dir => resolve(__dirname, dir);  

// https://vitejs.dev/config/  
export default defineConfig({  
  plugins: [vue()],  
  define: {  
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true, // 启用特性标志  
  },  
  server: {  
    port: 8080,  
    open: true,  
    cors: true,  
  },  
  resolve: {  
    alias: {  
      '@': pathResolve('./src'),  
    },  
  },  
});