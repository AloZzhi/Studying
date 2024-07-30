<template>
  <div class="library-container">
    <van-nav-bar
      title="Library"
    />
    <div class="library-content">
      <h2>My Playlists</h2>
      <van-cell-group>
        <van-cell
          v-for="(playlist, index) in playlists"
          :key="index"
          :title="playlist.name"
          :label="`${playlist.songs} songs`"
          clickable
          @click="viewPlaylist(playlist)"
        >
          <template #icon>
            <van-image
              :src="playlist.cover"
              width="48"
              height="48"
              fit="cover"
            />
          </template>
        </van-cell>
      </van-cell-group>
      <div v-if="recentlyAdded.length > 0" class="recently-added">
        <h2>Recently Added</h2>
        <van-cell-group>
          <van-cell
            v-for="(song, index) in recentlyAdded"
            :key="index"
            :title="song.title"
            :label="song.artist"
            clickable
            @click="playSong(song)"
          >
            <template #icon>
              <van-image
                :src="song.cover"
                width="48"
                height="48"
                fit="cover"
              />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Tabbar from '@/components/Tabbar.vue';

export default {
  components: { Tabbar },
  setup() {
    const router = useRouter();

    const playlists = ref([
      { name: 'Chill Vibes', songs: 20, cover: 'https://example.com/playlist1.jpg' },
      { name: 'Top Hits', songs: 15, cover: 'https://example.com/playlist2.jpg' },
      { name: 'Rock Classics', songs: 30, cover: 'https://example.com/playlist3.jpg' },
    ]);

    const recentlyAdded = ref([
      { title: 'New Song 1', artist: 'Artist 1', cover: 'https://example.com/song1.jpg' },
      { title: 'New Song 2', artist: 'Artist 2', cover: 'https://example.com/song2.jpg' },
      { title: 'New Song 3', artist: 'Artist 3', cover: 'https://example.com/song3.jpg' },
    ]);

    const goBack = () => {
      router.back();
    };

    const viewPlaylist = (playlist) => {
      console.log('Viewing playlist:', playlist);
      // Handle navigation to playlist details
    };

    const playSong = (song) => {
      console.log('Playing song:', song);
      // Handle song play
    };

    return {
      playlists,
      recentlyAdded,
      goBack,
      viewPlaylist,
      playSong,
    };
  },
};
</script>

<style scoped>
.library-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.library-content {
  flex: 1;
  padding: 16px;
}

.recently-added {
  margin-top: 20px;
}

h2 {
  margin-bottom: 16px;
}
</style>
