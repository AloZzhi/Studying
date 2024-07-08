<template>

  <div class="input-group">
    <input type="text" v-model="value">
    <button @click="add">添加</button>
  </div>

  <Child :msg="toChild"></Child>

</template>

<script setup>
import Child from '@/components/child.vue'
import { ref } from 'vue'

// const list = ref(['html', 'css', 'js'])
const value = ref('')
const toChild = ref('')

const add = () => {
  // list.value.push(value.value)
  // value.value = ''
  toChild.value = value.value

}
</script>

<style lang="css" scoped></style>