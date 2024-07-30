<template>
  <div class="search-container">
    <van-nav-bar
      title="Search"
    />
    <div class="search-form">
      <van-search
        v-model="query"
        placeholder="Search for songs, artists, albums..."
        @search="onSearch"
      />
    </div>
    <div class="results">
      <van-cell-group>
        <van-cell
          v-for="(song, index) in searchResults"
          :key="index"
          :title="song.title"
          :label="song.artist"
          clickable
          @click="playSong(song)"
        >
          <template #icon>
            <van-image
              :src="song.image"
              width="48"
              height="48"
              fit="cover"
            />
          </template>
        </van-cell>
      </van-cell-group>
      <div v-if="recommendedSongs.length > 0" class="recommendations">
        <h3>Recommended for You</h3>
        <van-cell-group>
          <van-cell
            v-for="(song, index) in recommendedSongs"
            :key="index"
            :title="song.title"
            :label="song.artist"
            clickable
            @click="playSong(song)"
          >
            <template #icon>
              <van-image
                :src="song.image"
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
import axios from 'axios';
import Tabbar from '@/components/Tabbar.vue';

export default {
  components: { Tabbar },
  setup() {
    const router = useRouter();
    const query = ref('');
    const searchResults = ref([]);
    const recommendedSongs = ref([]);

    const onSearch = async (value) => {
      query.value = value;

      try {
        // Traditional search logic
        const searchResponse = await axios.get(`/api/search`, {
          params: { query: value },
        });
        searchResults.value = searchResponse.data;

        // AI recommendation logic
        const recommendationsResponse = await axios.get(`/api/recommendations`, {
          params: { query: value },
        });
        recommendedSongs.value = recommendationsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, show message to the user
        alert('Failed to fetch search results. Please try again later.');
      }
    };

    const playSong = (song) => {
      console.log('Playing song:', song);
      router.push('/player');
    };

    const goBack = () => {
      router.push('/');
    };

    return {
      query,
      searchResults,
      recommendedSongs,
      onSearch,
      playSong,
      goBack,
    };
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.search-form {
  padding: 16px;
}

.results {
  flex: 1;
  padding: 16px;
}

.recommendations {
  margin-top: 20px;
}

.recommendations h3 {
  margin-bottom: 16px;
}
</style>
