<template>
  <div class="playlist">
    <ul>
      <li v-for="track in tracks" :key="track.title" @click="selectTrack(track)">
        {{ track.title }} - {{ track.artist }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  emits: ['selectTrack'],
  methods: {
    selectTrack(track) {
      this.$emit('selectTrack', track);
    }
  }
}
</script>

<style scoped>
.playlist {
  margin-top: 20px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #1f1f1f;
  border-radius: 8px;
  padding: 10px;
}

.playlist ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.playlist li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #333;
}

.playlist li:hover {
  background-color: #282828;
}
</style>
