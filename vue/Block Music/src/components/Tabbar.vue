<template>
  <div>
    <van-tabbar v-model:active="active" @change="handleTabChange">
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

const handleTabChange = (index) => {
  console.log('Tab changed to:', index);
  // 这里可以根据 Tab 的索引执行相应的操作，比如跳转到不同的页面
};
</script>

<style lang="less" scoped>
/* 你的样式代码 */
</style>
