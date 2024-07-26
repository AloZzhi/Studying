//组件可以复用
//响应式的业务也可以复用
//loadMore  hooks
//useRouter 是第三方提供的hooks函数
//我们也可以自定义hooks函数
//组件加hooks函数式编程，让项目开发更快更简单

import { watch, onUnmounted, ref, onMounted } from "vue";
import type { Ref } from "vue";
const useIntersectionObserver = (
  nodeRef: Ref<HTMLElement | null>,
  loadMore: () => void
) => {
  //IntersectionObserver实例() 联合类型
  let observer: IntersectionObserver | null = null

  //是否还有下一页的标志
  const hasMore = ref(true)

  watch(nodeRef, (newNodeRef, oldNodeRef) => {

    //取消监听旧节点
    if (oldNodeRef && observer) {
      observer.unobserve(oldNodeRef)
    }
    if (newNodeRef) {
      //创建IntersectionObserver实例
      observer = new IntersectionObserver((entries) => {
        //解构获取第一个元素
        //isIntersection表示元素是否在视口内
        if (entries[0].isIntersecting) {
          //触发加载更多数据
          loadMore()
        }
      })
      observer.observe(newNodeRef)
    }

  })

  //组件卸载，取消监听
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  //监听hasMore变化
  watch(hasMore, (value) => {
    if (observer) {
      if (value && nodeRef.value) {
        observer.observe(nodeRef.value)
      } else {
        observer.disconnect()
      }
    }
  })

  return {
    //暴露hasMore，便于外部组件控制
    hasMore,
    //提供设置
    setHasMore: (value: boolean) => {
      hasMore.value = value
    }
  }

}

export default useIntersectionObserver