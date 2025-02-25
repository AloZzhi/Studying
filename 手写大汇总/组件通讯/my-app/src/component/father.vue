<template>
  <div>
    <child-component :message="parentMessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './child.vue';
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped></style>