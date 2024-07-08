<template>
  <button @click="changeName">修改仓库中的用户数据</button>
  <button @click="changeSex">修改仓库中的用户性别</button>
  <button @click="changeAge">修改仓库中的用户年龄</button>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore()

const changeName = () => {
  // userStore.userInfo.name = 'yan'//不要直接改仓库里的数据
  userStore.changeUserName('ye')

}

const changeSex = () => {
  userStore.changeUserSex('boy')

}
const changeAge = () => {
  userStore.changeUserAge(1)
}
</script>

<style lang="css" scoped></style>