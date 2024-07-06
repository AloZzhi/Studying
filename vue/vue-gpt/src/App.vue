<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { chat } from './libs/gpt.js'

const main = async () => {
  // const messageList = [{
  //     role:'admin',
  //     content:'你是一位汽车4s店销售专家，可以回答有关买车卖车的问题'
  // },{
  //     role:'user',
  //     content:'奥迪霍希怎么样？'
  // }]
  // const data = await chat(messageList,"sk-KPhNXw1Jy4i3Gd6c7FxolDg6vLSc1gsamnSoUPYSYkDfaaFg" )
  // console.log(data);
}
main()


</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
