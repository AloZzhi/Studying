<template>
  <div>
    <nav>
      <router-link to="/home">首页</router-link>|
      <router-link to="/bot">BOT</router-link>|
      <router-link to="/hot">沸点</router-link>
    </nav>
    <!-- 页面 -->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>