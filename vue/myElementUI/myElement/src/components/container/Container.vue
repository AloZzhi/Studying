<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>


<script lang="ts">
export default {
  name: "ElContainer"
}
</script>

<script setup lang="ts">
import { computed, useSlots, VNode, Component } from 'vue'

const slots = useSlots()

const isVertical = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name
      return tag === 'ElHeader' || tag === 'ElFooter'
    })
  } else {
    return false
  }
})
</script>

<style scoped lang="scss">
@import '../../styles/mixin.scss';

@include b(container) {
  // .el-container .is-vertical
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }
}
</style>