<template>
  <div class="lyrics-container">
    <van-nav-bar
      title="Lyrics"
      left-text="Back"
      left-arrow
      @click-left="goBack"
    />
    <div class="lyrics-content">
      <div v-for="(line, index) in musicStore.currentTrack.lyrics" :key="index" class="lyric-line">
        <span :class="{ highlighted: index === currentLyricIndex }">{{ line }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMusicStore } from '../stores/useMusicStore';

export default {
  setup() {
    const router = useRouter();
    const musicStore = useMusicStore();
    const currentLyricIndex = ref(0);

    const goBack = () => {
      router.back();
    };

    return {
      musicStore,
      currentLyricIndex,
      goBack,
    };
  },
};
</script>

<style>
.lyrics-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.lyrics-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.lyric-line {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.5;
}

.highlighted {
  color: #1db954; /* Spotify green */
  font-weight: bold;
}
</style>
