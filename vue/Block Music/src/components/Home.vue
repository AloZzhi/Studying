<template>
  <div>
    <van-nav-bar
      title="Spotify"
      left-text="Back"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item icon="search">Search</van-tabbar-item>
      <van-tabbar-item icon="friends-o">Library</van-tabbar-item>
    </van-tabbar>
    <div class="content">
      <van-cell-group>
        <van-cell
          v-for="item in musicStore.items"
          :key="item.id"
          :title="item.title"
          :label="item.artist"
          clickable
          @click="playTrack(item)"
        >
          <template #icon>
            <van-image
              :src="item.image"
              width="48"
              height="48"
              fit="cover"
            />
          </template>
        </van-cell>
      </van-cell-group>
      <van-list
        v-model="musicStore.loading"
        :finished="musicStore.finished"
        finished-text="No more"
        @load="musicStore.loadItems"
      />
    </div>
  </div>
</template>

<script>
import { useMusicStore } from '../stores/useMusicStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const musicStore = useMusicStore();

    const playTrack = (track) => {
      musicStore.playTrack(track);
      router.push('/player');
    };

    return {
      musicStore,
      playTrack,
    };
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      // 返回操作
    },
  },
};
</script>

<style>
.content {
  padding: 16px;
}
</style>
