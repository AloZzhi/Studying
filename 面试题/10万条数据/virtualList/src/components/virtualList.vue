<template>
  <div ref="listRef" class="infinite-list-container" @scroll="scrollEvent()">
    <div class="infinite-list-phantom" :style="{height: listHeight + 'px'}"></div>

    <div class="infinite-list" :style="{transform: getTransform}">
      <div 
        class="infinite-list-item" 
        v-for="item in visibleData" 
        :key="item.id"
        :style="{height: itemSize + 'px', lineHeight: itemSize + 'px'}"
      >
        {{item.value}}
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUpdated, reactive, ref } from 'vue';

const props = defineProps({
  listData: [],
  itemSize: {
    type: Number,
    default: 50
  }
})

const state = reactive({
  screenHeight: 0, 
  startOffset: 0,
  start: 0,
  end: 0
})

// 可视区显示的数据条数
const visibleCount = computed(() => {
  return state.screenHeight / props.itemSize
})
// 可视区域显示的真是数据
const visibleData = computed(() => {
  return props.listData.slice(state.start, Math.min(state.end, props.listData.length))
})
// 当前列表总高度
const listHeight = computed(() => {
  return props.listData.length * props.itemSize
})
// list跟着父容器移动了，现在列表要移动回来
const getTransform = computed(() => {
  return `translateY(${state.startOffset}px)`
})



const listRef = ref(null)
onMounted(() => {
  state.screenHeight = listRef.value.clientHeight
  state.end = state.start + visibleCount.value
})



const scrollEvent = () => {
  let scrollTop = listRef.value.scrollTop
  state.start = Math.floor(scrollTop / props.itemSize)
  state.end = state.start + visibleCount.value
  state.startOffset = scrollTop - (scrollTop % props.itemSize)
}


</script>

<style lang="css" scoped>
.infinite-list-container{
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.infinite-list-phantom{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
}
.infinite-list{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
}
.infinite-list-item{
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
</style>