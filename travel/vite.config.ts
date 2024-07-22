import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//工程化工具
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },  },
})
