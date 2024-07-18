<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const act = ref(false)
</script>

<style lang="less" scoped></style>