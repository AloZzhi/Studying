<template>
  <div class="input-group">
    <input type="text" v-model="value">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')

const emits = defineEmits(['tianjia'])//创建一个tianjia事件
const add = () => {
  //将value给到父组件
  emits('tianjia', value.value)//发布事件
}
</script>

<style lang="css" scoped></style>