<template>
  <div class="app">
  </div>

  <div class="main">
    <h2 v-show="isEn">{{ title1 }}</h2>
    <button @click="change">切换</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let title1 = 'Hello'
let title2 = '你好'
let isEn = ref(true)


const change = () => {
  isEn.value = !isEn.value
}
</script>

<style lang="css" scoped></style>