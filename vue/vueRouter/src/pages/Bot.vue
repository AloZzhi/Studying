<template>
  <div>
    <p>BOT page</p>
    <button @click="toHot">去沸点</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toHot = () => {
  //跳转到沸点页面
  // router.push('/hot')
  router.push({ path: '/hot', query: { id: 1 } })

}
</script>

<style lang="css" scoped></style>