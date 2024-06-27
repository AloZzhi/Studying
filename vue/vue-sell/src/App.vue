<template>
  <Header :seller="sellerData" />
</template>

<script setup>
import Header from '@/components/header/Index.vue'
import { getSeller } from '@/api'
import { ref } from "vue";

let sellerData = ref({})

// axios request seller
getSeller().then(seller => {
  console.log(seller);
  sellerData.value = seller
})
</script>

<style lang="less" scoped>
div {
  font-size: 30px;
}
</style>