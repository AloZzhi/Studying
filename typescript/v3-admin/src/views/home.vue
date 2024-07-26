<template>
<div class="wrapper">
  <v-header />
  <v-sidebar />
  <div class="content-box">
    <router-view />
  </div>
</div>
</template>

<script lang ="ts" setup>
import  vHeader from '../components/header.vue'
import vSiderbar from '../store/sidebar'
</script>

<style lang="scss" scoped>

</style>