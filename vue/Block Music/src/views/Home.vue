<template>
  <div class="home":class="{ 'hide': isShowMenu }">
    <!-- 顶部导航栏 -->
     
    <van-nav-bar
      title="Spotify"
      left-text="我的"
      left-arrow
      @click-left="isShowMenu = true"
    />

    <!-- 内容部分 -->
    <div class="content">
      <!-- 每日推荐歌单 -->
      <section>
        <h2>每日推荐歌单</h2>
        <div class="playlist-list">
          <div class="playlist" v-for="item in dailyPlaylists" :key="item.id">
            <van-image :src="item.picUrl" width="100" height="100" fit="cover" :alt="item.name" />
            <div class="playlist-info">{{ item.name }}</div>
          </div>
        </div>
      </section>

      <!-- 热门歌曲 -->
      <section>
        <h2>热门歌曲</h2>
        <div class="song-list">
          <div class="song" v-for="song in popularSongs" :key="song.id">
            <van-image :src="song.picUrl" width="100" height="100" fit="cover" :alt="song.name" />
            <div class="song-info">
              <h3>{{ song.name }}</h3>
              <p>{{ song.artist }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 最近播放 -->
      <section>
        <h2>最近播放</h2>
        <div class="song-list">
          <div class="song" v-for="song in recentPlays" :key="song.id">
            <van-image :src="song.picUrl" width="100" height="100" fit="cover" :alt="song.name" />
            <div class="song-info">
              <h3>{{ song.name }}</h3>
              <p>{{ song.artist }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 推荐的专辑 -->
      <section>
        <h2>推荐的专辑</h2>
        <div class="playlist-list">
          <div class="playlist" v-for="item in recommendedAlbums" :key="item.id">
            <van-image :src="item.picUrl" width="100" height="100" fit="cover" :alt="item.name" />
            <div class="playlist-info">{{ item.name }}</div>
          </div>
        </div>
      </section>
    </div>

    <!-- 底部导航栏 -->
    <Tabbar />


    <Myself class="menu" @hidden="handle" :class="{ 'show': isShowMenu }" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Tabbar from '@/components/Tabbar.vue';
import Myself from '@/components/Myself.vue';

const router = useRouter();
const active = ref(0);
const isShowMenu = ref(false)

const handle = (e) => {
  isShowMenu.value = e
}

const dailyPlaylists = ref([
  { id: 1, name: '歌单1', picUrl: 'https://example.com/img1.jpg' },
  { id: 2, name: '歌单2', picUrl: 'https://example.com/img2.jpg' },
  { id: 3, name: '歌单3', picUrl: 'https://example.com/img3.jpg' },
]);

const popularSongs = ref([
  { id: 1, name: '热门歌曲1', artist: '歌手1', picUrl: 'https://example.com/song1.jpg' },
  { id: 2, name: '热门歌曲2', artist: '歌手2', picUrl: 'https://example.com/song2.jpg' },
  { id: 3, name: '热门歌曲3', artist: '歌手3', picUrl: 'https://example.com/song3.jpg' },
]);

const recentPlays = ref([
  { id: 1, name: '最近播放1', artist: '歌手1', picUrl: 'https://example.com/recent1.jpg' },
  { id: 2, name: '最近播放2', artist: '歌手2', picUrl: 'https://example.com/recent2.jpg' },
  { id: 3, name: '最近播放3', artist: '歌手3', picUrl: 'https://example.com/recent3.jpg' },
]);

const recommendedAlbums = ref([
  { id: 1, name: '专辑1', picUrl: 'https://example.com/album1.jpg' },
  { id: 2, name: '专辑2', picUrl: 'https://example.com/album2.jpg' },
  { id: 3, name: '专辑3', picUrl: 'https://example.com/album3.jpg' },
  { id: 4, name: '专辑4', picUrl: 'https://example.com/album4.jpg' },
  { id: 5, name: '专辑5', picUrl: 'https://example.com/album5.jpg' },
  { id: 6, name: '专辑6', picUrl: 'https://example.com/album6.jpg' },
]);



const onTabChange = (index) => {
  // index: 0 - Home, 1 - Search, 2 - Library, 3 - AI
  if (index === 0) {
    router.push('/');
  } else if (index === 1) {
    router.push('/search');
  } else if (index === 2) {
    router.push('/library');
  } else if (index === 3) {
    router.push('/aiChat');
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

section {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 16px;
}

.playlist-list,
.song-list {
  display: flex;
  overflow-x: auto;
}

.playlist,
.song {
  margin-right: 10px;
}

.song-info,
.playlist-info {
  text-align: center;
  margin-top: 5px;
}
</style>
