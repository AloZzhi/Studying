import { ref, watch, onUnmounted } from 'vue'

export const useIntersectionObserver = () => {
    const hasMore = ref<boolean>(true)
    onUnmounted(() => {

    })
    watch(hasMore, (value) => {
        
    })
    return {
        hasMore,
        setHasMore: (value:boolean) => {
            hasMore.value = value
        }
    }
}