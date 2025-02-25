<template>
  <div>
    <Child2 @childMessage="handleChildMessage"></Child2>
  </div>
</template>

<script>
import Child2 from './child2.vue';
export default {
  components: {
    Child2
  },
  methods: {
    handleChildMessage(message) {
      console.log(message);

    }
  }
}
</script>

<style lang="scss" scoped></style>