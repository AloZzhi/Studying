<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" key="index">{{ item }}</li>
    </ul>
    <button v-on:click="handle">push</button>
    <button @click="reverse">reverse</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
let arr = reactive(['html', 'css', 'js', 'vue'])

const handle = () => {
  arr.push('node')
  console.log(arr);
}

const reverse = () => {
  // arr.reverse()
  arr.forEach((item, index) => {
    arr[index] = item + '1'
  })
}
</script>


<style lang="css" scoped></style>