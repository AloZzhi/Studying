<template>
  <router-view></router-view>
  <div class="search">
    <i class="iconfont icon-sousuo"></i>
  </div>

  <div class="daily">

  </div>

  <div class="palylist">

  </div>
</template>

<script setup>
import axios from '@/api'


axios.get('/recommend/songs').then(res => {

})

</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.search {
  left: 27px;
  top: 58px;

  background-color: @color3;
  padding: 24px 12px 18px 24px;

  .iconfont icon-sousuo {
    width: 25px;
    height: 25px;
  }
}

.daily {
  position: absolute;
  margin: 0 auto;
  left: 24px;
  top: 105px;
  width: 329px;
  height: 113px;
  background-color: @color1;
  border-radius: 30px;
}

.palylist {
  background-color: @color3;
  top: 243px;
  left: 26px;
  width: 375px;
  height: 20px;
}
</style>