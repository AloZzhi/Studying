<script setup>
//显示打分
import Rate from './components/Rate.vue'
import { ref } from 'vue'

let score = ref(3)

function update(num) {
  score.value = num
}
</script>

<template>
  <div>
    <Rate @update-score="update" :score="score" theme="black" />
    <Rate @update-score="update" :score="score" theme="yellow" />
    <Rate @update-score="update" :score="score" theme="blue" />
    <Rate @update-score="update" :score="score" theme="green" />
  </div>
</template>

<style scoped></style>
