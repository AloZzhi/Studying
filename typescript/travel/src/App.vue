<script setup lang="ts">
import Dialog from '@/components/Dialog.vue'
import { useStorage } from '@/hooks/useStorage'

let userinfo = useStorage('username')
console.log(userinfo.value);
userinfo.value = {
  name: '张三',
  age: 18
}
</script>

<template>
  <!-- <Dialog>
    <template #header>
      <span>&nbsp;&nbsp;&gt;</span>
      <h1>title</h1>
      <button>按钮</button>
    </template>
    <form>
      <input type="text" placeholder="请输入用户名">
    </form>
    <template #footer>
      授权用户信息
    </template>
  </Dialog> -->
  <router-view />
  <van-tabbar>
    <van-tabbar-item>首页</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>
