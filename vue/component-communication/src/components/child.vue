<template>
  <div class="child">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue';
import { ref, watch } from 'vue';
const list = ref(["html", "css", "js"]);

const props = defineProps({
  msg: "",
});
list.value.push(props.msg);

watch(() => props.msg, (newVal, oidVal) => {
  console.log(newVal, oidVal);
  list.value.push(newVal);

})
</script>

<style lang="css" scoped></style>
