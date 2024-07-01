<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-wrap" ref="menuWrap">
        <ul>

          <li class="menu-item" v-for="(item, index) in state.goods" key:="">
            <span class="text">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="food-wrap">

      </div>
    </div>
  </div>
</template>

<script setup>
import { getGoods } from "@/api";
import { reactive, ref, onMounted } from "vue";
import BScroll from '@better-scroll/core'

const state = reactive({
  good: []
})
getGoods().then(res => {
  //获取商品数据
  console.log(res);
  state.goods = res
})

const menuWrap = ref(null)
const betterScroll = () => {
  new BScroll(menuWrap.value, {

  })
}

nextTick(() => {//挂载完成之后，该组件被编译完成并添加在了index.html中
  betterScroll()
})


</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.goods {
  position: absolute;
  bottom: 45px;
  top: 177px;
  overflow: hidden;

  &-content {
    display: flex;
    height: 100%;

    .menu-wrap {
      width: 80px;
      background-color: @color-background-ssss;
      // overflow-y: scroll;


      .menu-item {
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

}
</style>
