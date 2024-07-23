import {ref,onMounted,onUnmounted } from 'vue'
//hook函数 特点 将一组响应式状态或逻辑封装复用
export const useMouse = ()=>{
  const x = ref(0)
  const y = ref(0)
  const update =(e)=>{
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(()=>{
    window.addEventListener('mousemove',update)
  })

  onUnmounted(()=>{
    window.addEventListener('mousemove',update)
  })
//pinia
  return{
    x,
    y
  }
}


