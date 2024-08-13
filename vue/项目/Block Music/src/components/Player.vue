<template>
  <div class="player-container">
    <van-nav-bar
      title="Now Playing"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="player-content">
      <van-image
        :src="musicStore.currentTrack.image"
        width="200"
        height="200"
        fit="cover"
        class="album-art"
      />
      <h2 class="track-title">{{ musicStore.currentTrack.title }}</h2>
      <p class="track-artist">{{ musicStore.currentTrack.artist }}</p>
      <van-slider
        v-model:value="musicStore.progress"
        :max="musicStore.currentTrack.duration"
        class="progress-bar"
        @change="onProgressChange"
      />
      <div class="controls">
        <van-button icon="arrow-left" class="control-button" @click="musicStore.prevTrack" />
        <van-button
          :icon="musicStore.isPlaying ? 'pause' : 'play'"
          class="control-button"
          @click="musicStore.togglePlay"
        />
        <van-button icon="arrow-right" class="control-button" @click="musicStore.nextTrack" />
      </div>
    </div>
    <van-button type="default" class="lyrics-button" @click="viewLyrics">View Lyrics</van-button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMusicStore } from '../stores/useMusicStore';

const router = useRouter();
const musicStore = useMusicStore();

const onProgressChange = (value) => {
  musicStore.updateProgress(value);
};

const viewLyrics = () => {
  router.push('/lyrics');
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.player-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.player-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.album-art {
  margin-bottom: 20px;
}

.track-title {
  font-size: 1.5em;
  margin: 10px 0;
}

.track-artist {
  font-size: 1em;
  color: gray;
}

.progress-bar {
  width: 80%;
  margin: 20px 0;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.control-button {
  width: 50px;
  height: 50px;
}

.lyrics-button {
  margin: 20px;
  width: 100%;
}
</style>
