<template>
  <div class="app">
<!-- <h2>{{ title }}</h2>
<h2 v-text="title2"></h2> 
<h3 v-html="content"></h3>-->
<button v-on:click="add" @mousemove="move">{{ count }}</button>
  </div>
</template>

<script setup>
// const title = 'Hello World'
// const title2 = '标题'
// const content ='<p>床前明月光</p><p>疑是地上霜</p>'
import {ref} from 'vue'

let count =ref(0)//要声明称响应式的
  const add =()=>{
  count.value++
}

const move =()=>{
  console.log('鼠标在button上移动');
}

</script>

<style lang="css" scoped>

</style>