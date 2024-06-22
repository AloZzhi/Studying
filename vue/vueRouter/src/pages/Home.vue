<template>
  <div>
    <h2>home page</h2>
    <div class="nav">
      <router-link to="/home/newest">最新</router-link>
      <router-link to="/home/suggest">推荐</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>