<template>
  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child :data="dataToSend" />
</template>

<script setup>
import Child from './Child.vue';
import { ref } from 'vue';
const msg = ref('')
const dataToSend = ref('')
const add = () => {
  dataToSend.value = msg.value
}
</script>

<style lang="scss" scoped></style>