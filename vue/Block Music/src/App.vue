<template>
  <div class="app">
    <div class="pb50">
      <router-view />
    </div>

    <Tabbar v-if="showTab" />
  </div>
</template>

<script setup>
import Tabbar from '@/components/Tabbar.vue';
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

let showTab = ref(true);
const whitePath = ['/login']

router.beforeEach((to, from, next) => {

  if (whitePath.includes(to.path)) {
    console.log(to.path, '-----');

    showTab.value = false
    next()
  } else {
    next()
  }
})


</script>


<style>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); */

.pb50 {
  padding-bottom: 50px;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
