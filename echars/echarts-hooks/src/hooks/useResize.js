// - use 开头的函数
// - 对响应式状态和业务的封装  
//     封装 它的复杂性  
//         useloadMore  hasMore intersectionObserver, onUnmounted
//     复用  vueuse 第三方hooks 库
//         除UI组件库外的组件   响应式 
//         现在连响应式的业务也有复用了  hooks  
//     维护
//         下线  或修改
// 响应式业务
import { onUnmounted, onMounted } from 'vue'

export function useResize(
    handlerFn,
    immediate = true
) {
    const handler = () => {
        handlerFn()
    }

    onMounted(() => {
        window.addEventListener('resize', handler)
        immediate && handler() // 先执行一次。。。。。
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handler)
    })
}




