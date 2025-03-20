<template>
  <button @click="functionB">通知父组件</button>
</template>
<script setup>
const emitA = defineEmits(['A'])

const functionB = () => {
  emitA('c', '数据')
}
</script>
