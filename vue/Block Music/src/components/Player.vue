<template>
  <div class="player">
    <AlbumArt :art="currentTrack.art" />
    <div class="controls">
      <button @click="prevTrack">Prev</button>
      <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <button @click="nextTrack">Next</button>
    </div>
    <div class="track-info">
      <h2>{{ currentTrack.title }}</h2>
      <p>{{ currentTrack.artist }}</p>
    </div>
    <Playlist :tracks="tracks" @selectTrack="selectTrack" />
  </div>
</template>

<script>
import { ref } from 'vue'
import AlbumArt from './AlbumArt.vue'
import Playlist from './Playlist.vue'

export default {
  components: {
    AlbumArt,
    Playlist
  },
  setup() {
    const tracks = ref([
      { title: 'Song 1', artist: 'Artist 1', art: 'art1.jpg' },
      { title: 'Song 2', artist: 'Artist 2', art: 'art2.jpg' },
      { title: 'Song 3', artist: 'Artist 3', art: 'art3.jpg' }
    ])
    const currentTrack = ref(tracks.value[0])
    const isPlaying = ref(false)

    function togglePlay() {
      isPlaying.value = !isPlaying.value
    }

    function prevTrack() {
      const index = tracks.value.indexOf(currentTrack.value)
      if (index > 0) {
        currentTrack.value = tracks.value[index - 1]
      }
    }

    function nextTrack() {
      const index = tracks.value.indexOf(currentTrack.value)
      if (index < tracks.value.length - 1) {
        currentTrack.value = tracks.value[index + 1]
      }
    }

    function selectTrack(track) {
      currentTrack.value = track
    }

    return {
      tracks,
      currentTrack,
      isPlaying,
      togglePlay,
      prevTrack,
      nextTrack,
      selectTrack
    }
  }
}
</script>

<style scoped>
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  color: #e1e1e1;
}
.controls {
  display: flex;
  gap: 10px;
}
button {
  background-color: #1db954;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1ed760;
}
.track-info {
  text-align: center;
}
</style>
