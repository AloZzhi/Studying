<template>
  <div class="child">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
// defineProps({
//   list: {
//     type: Array,
//     default: () => []
//   }
// })


import { ref, watch } from 'vue'
const list = ref(['html', 'css', 'js'])
const props = defineProps({
  msg: ''
})

watch(
  () => props.msg,
  (newVal, oldVal) => {
    list.value.push(newVal)
  }
)

</script>

<style lang="css" scoped></style>