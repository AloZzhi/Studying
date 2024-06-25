<template>
  <Child v-model:list="list"></Child>

  <div class="child">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import Child from "@/components/child3.vue";
import { ref } from 'vue';
const list = ref(['html', 'css', 'js'])
</script>

<style lang="css" scoped></style>