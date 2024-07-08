<template>
  <ul>
    <li>姓名:{{ userStore.userInfo.name }}</li>
    <li>年龄:{{ age }}</li>
    <li>十年后年龄:{{ userStore.afterAge }}</li>
    <li>性别:{{ userInfo.sex }}</li>
  </ul>
</template>

<script setup>
import { useUserStore } from "@/store/user.js";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore()
const age = computed(() => userStore.userInfo.age)

const { userInfo } = storeToRefs(userStore)

// console.log(userStore);
</script>

<style lang="css" scoped></style>
