<template>
  <Child @c="functionD" />
</template>

<script setup>
import Child from './Child.vue';
const functionD = (dataE) => {
  console.log(dataE);

}
</script>

<style lang="scss" scoped></style>