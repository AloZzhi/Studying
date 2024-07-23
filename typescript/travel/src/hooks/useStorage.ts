//localStorage 存储功能 html5 本地存储 +ref响应式本地存储
import { ref, watchEffect } from 'vue'
//监听器 watchEffect 相比于watch 更轻量级不需要的声明依赖
//自己根据函数体内的依赖去判断
//name key 

//value 初始值
export const useStorage = function useStorage (name:string, value = [{}]){
  let data = ref(JSON.parse(localStorage.getItem(name) || value))
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })
  return data
}