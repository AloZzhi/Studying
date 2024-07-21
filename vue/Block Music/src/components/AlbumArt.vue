<template>
  <div class="album-art">
    <img :src="art" alt="Album Art" />
  </div>
</template>

<script>
export default {
  props: {
    art: String
  }
}
</script>

<style scoped>
.album-art img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}
</style>
