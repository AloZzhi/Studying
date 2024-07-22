<template>
  <div class="player-container">
    <van-nav-bar
      title="Now Playing"
      left-text="Back"
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
        v-model="musicStore.progress"
        :max="musicStore.currentTrack.duration"
        class="progress-bar"
        @change="onProgressChange"
      />
      <div class="controls">
        <van-button icon="prev" class="control-button" @click="musicStore.prevTrack" />
        <van-button
          :icon="musicStore.isPlaying ? 'pause' : 'play'"
          class="control-button"
          @click="musicStore.togglePlay"
        />
        <van-button icon="next" class="control-button" @click="musicStore.nextTrack" />
      </div>
    </div>
    <van-button type="default" class="lyrics-button" @click="viewLyrics">View Lyrics</van-button>
  </div>
</template>

<script>
import { useMusicStore } from '../stores/useMusicStore';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
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

    return {
      musicStore,
      onProgressChange,
      viewLyrics,
      goBack,
    };
  },
};
</script>

<style>
.lyrics-button {
  margin-top: 20px;
  width: 100%;
}
</style>
