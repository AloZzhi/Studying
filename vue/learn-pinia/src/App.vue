<template>
  <Child :msg="title" @onSub="handle" />
  <h1>{{ res }}</h1>
</template>

<script setup>
import Child from './components/child.vue'
import { ref } from "vue";
const res = ref('')
const title = 'hello world'

const handle = (e) => {
  // console.log(e);
  res.value = e
}

</script>

<style lang="less" scoped></style>