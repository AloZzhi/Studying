<template>
  <div>
    noteClass
  </div>
</template>

<script setup>
import axios from '@/api';

axios.post('/user/home').then(res => {
  console.log(res);
})
</script>

<style lang="scss" scoped></style>