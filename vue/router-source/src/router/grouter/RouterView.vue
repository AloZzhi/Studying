<template>
  <component :is="component"></component>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from './index'

//怎么拿到的
//useRouter router.url ->routes /->component:About
let router = useRouter()//router对象
console.log(router, '???????????');
//动态的，响应式的 计算属性
const component = computed(() => {

  const route = router.routes.find(
    (route) => route.path === router.current.value
  )
  return route ? route.component : null
})
</script>