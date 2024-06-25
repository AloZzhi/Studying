<template>
  <!-- 订阅tianjia事件 -->
  <Child @tianjia="handle"></Child>

  <div class="child">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import Child from "@/components/child2.vue";
import { ref } from 'vue';
const list = ref(['html', 'css', 'js'])

const handle = (event) => {
  console.log(event);//是child2里的value.value
  list.value.push(event)

}
</script>

<style lang="css" scoped></style>