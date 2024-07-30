<template>
  <div>
    <van-tabbar v-model:active="active" >
      <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">Search</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/library">Library</van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o" to="/aiChat">AI</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);

</script>

<style lang="less" scoped>

</style>
