<template>
  <div>{{ state.count }}</div>
  <div>

    <button @click="state.count++">add</button>
  </div>
</template>

<script setup>
import { reactive } from "./reactivity/reactive";

const state = reactive({
  count: 1
})


</script>

<style lang="scss" scoped></style>