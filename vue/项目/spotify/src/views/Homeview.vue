<script setup>
import HomeCard from '../components/HomeCard.vue';
</script>

<template>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      播客
    </button>
    <div class="py-1.5"></div>
    <!-- 使用picsum.photo随机图库 -->
    <div class="flex items-center">
      <HomeCard image="http://picsum.photos/id/30/300/300" title="标题" subTitle="子标题" />
      <HomeCard image="http://picsum.photos/id/45/300/300" title="标题" subTitle="子标题" />
      <HomeCard class="md:block hidden" image="http://picsum.photos/id/60/300/300" title="标题"
        subTitle="子标题" />
      <HomeCard class="lb:block hidden" image="http://picsum.photos/id/67/300/300" title="标题"
        subTitle="子标题" />
      <HomeCard class="xl:block hidden" image="http://picsum.photos/id/100/300/300" title="标题"
        subTitle="子标题" />
    </div>
  </div>


  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      推荐歌曲
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/88/300/300" title="标题" subTitle="子标题" />
      <HomeCard image="https://picsum.photos/id/243/300/300" title="标题" subTitle="子标题" />
      <HomeCard class="md:block hidden" image="https://picsum.photos/id/123/300/300" title="标题"
        subTitle="子标题" />
      <HomeCard class="lg:block hidden" image="https://picsum.photos/id/121/300/300" title="标题"
        subTitle="子标题" />
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/99/300/300" title="标题"
        subTitle="子标题" />
    </div>
  </div>
</template>
