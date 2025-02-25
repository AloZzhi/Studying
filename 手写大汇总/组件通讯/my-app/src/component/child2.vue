<template>
  <div>
<button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
export default{
  methods:{
    sendMessage(){
      this.$emit('childMessage','Hello from child')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>