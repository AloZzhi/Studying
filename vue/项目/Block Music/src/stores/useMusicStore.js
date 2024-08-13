// stores/useMusicStore.js
import { defineStore } from 'pinia';

export const useMusicStore = defineStore('music', {
  state: () => ({
    items: [],
    currentTrack: {
      title: '',
      artist: '',
      image: '',
      duration: 0,
      lyrics: [],
    },
    isPlaying: false,
    progress: 0,
    loading: false,
    finished: false,
  }),
  actions: {
    async loadItems() {
      if (this.loading || this.finished) return;

      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 1000));

      for (let i = 0; i < 10; i++) {
        this.items.push({
          id: this.items.length + 1,
          title: `Song ${this.items.length + 1}`,
          artist: 'Artist Name',
          image: 'https://via.placeholder.com/48',
          duration: 300,
          lyrics: [
            'Line 1 of the lyrics',
            'Line 2 of the lyrics',
            'Line 3 of the lyrics',
          ],
        });
      }

      this.loading = false;
      if (this.items.length >= 30) {
        this.finished = true;
      }
    },
    playTrack(track) {
      this.currentTrack = track;
      this.isPlaying = true;
      this.progress = 0;
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    },
    updateProgress(value) {
      this.progress = value;
    },
    nextTrack() {
      // Implement logic to play the next track
    },
    prevTrack() {
      // Implement logic to play the previous track
    },
  },
});
