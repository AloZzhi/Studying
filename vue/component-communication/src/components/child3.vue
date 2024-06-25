<template>
  <div class="input-group">
    <input type="text" v-model="value">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['update:list']);
const add = () => {
  // props.list.push(value.value)//不建议直接操作父组件给过来的数据

  const arr = props.list
  arr.push(value.value)
  emits('update:list', arr)
}
</script>

<style lang="css" scoped></style>