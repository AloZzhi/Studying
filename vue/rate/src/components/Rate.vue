<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span class="star" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span class="star" @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { defineProps, computed, defineEmits, ref } from 'vue'
let props = defineProps({
  score: {
    type: Number,
    default: 0
  },
  theme: {
    type: String,
    default: 'blue'
  }
})
// 主题可定制性 
const themeObj = {
  'black': '#000',
  'yellow': '#fadb14',
  'blue': '#40a9ff',
  'green': '#73d13d'
}

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.score,
  10 - props.score))
const fontStyle = computed(() => {
  return `color: ${themeObj[props.theme]};`
})
// 私有状态  mouseover  mouseout  改变
let width = ref(props.score);

let emits = defineEmits(['update-score'])
const onRate = (num) => {
  emits('update-score', num)
}

const fontWidth = computed(() => `width:${width.value}em;`)
const mouseOver = (num) => {
  width.value = num
}

const mouseOut = () => {
  width.value = props.score
}

</script>
<style>
.star {
  letter-spacing: 3px;
}

.rate {
  position: relative;
  display: inline-block;
}

.rate>span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
