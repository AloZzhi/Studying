<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }} </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => {
      return [];
    },
  }
})
</script>

<style lang="scss" scoped></style>