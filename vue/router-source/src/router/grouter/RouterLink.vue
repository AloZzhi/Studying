<template>
  <a :href="'#' + props.to">
    <slot>

    </slot>
  </a>
</template>
<script setup>
import { defineProps } from "vue";

let props = defineProps({
  to: {
    type: String,
    required: true //必传
  }
})

</script>