<template>
  <div>
    <van-tabbar v-model="active" route  active-color="#a9c9c9">
      <van-tabbar-item name="home" icon="home-o" to="/">Home</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/search">Search</van-tabbar-item>
      <van-tabbar-item name="library" icon="friends-o" to="/library">Library</van-tabbar-item>
      <van-tabbar-item name="aiChat" icon="smile-comment-o" to="/aiChat">AI</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('home');


</script>

<style lang="less" scoped>
</style>
