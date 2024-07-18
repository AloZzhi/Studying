<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#a9c9c9" @change="onChange">
      <van-tabbar-item to="/home">
        <i class="iconfont icon-shouye-copy" v-if="act">首页</i>
        <i class="iconfont icon-shouye" v-else>首页</i>


      </van-tabbar-item>

      <van-tabbar-item to="/collection">
        <i class="iconfont icon-icon-collection-copy" v-if="act">喜欢</i>
        <i class="iconfont icon-icon-collection" v-else>喜欢</i>
      </van-tabbar-item>

      <van-tabbar-item to="/myself">
        <i class="iconfont icon-gerenzhongxin-copy" v-if="act">个人</i>
        <i class="iconfont icon-gerenzhongxin" v-else>个人</i>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const act = ref(false)
</script>

<style lang="less" scoped>
.icon-wubianxing_mianxing {
  color: #62CD5D;
}
</style>