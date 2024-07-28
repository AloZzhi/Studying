<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const active = ref(0);


</script>


<style>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); */

#app {
  padding-bottom: 50px;
}
</style>
