<template>
  <div class="input-group">
    <input type="text" v-model="value">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
const list = ref(['html', 'css', 'js'])


const add = () => {
  list.value.push(value.value)
}

defineExpose({ list })//心甘情愿暴露list

</script>

<style lang="css" scoped></style>