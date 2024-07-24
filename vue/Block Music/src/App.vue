<template>
   <div id="app">
    <router-view />
     <van-tabbar v-model="active" route active-color="#1989fa">
      <van-tabbar-item icon="home-o" replace to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search">Search</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/library">Library</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
    const route = useRoute();
    const active = ref(route.path);
    watch(
      () => route.path,
      (newPath) => {
        active.value = newPath;
      }
    );
 
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#app {
  padding-bottom: 50px;
}
</style>
