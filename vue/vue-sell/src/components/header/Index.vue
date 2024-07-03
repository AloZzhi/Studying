<template>
  <div class="header" @click="showDetail = true">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <SupportIcon :type="seller.supports[0].type" size="1" />
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="bg"></div>

    <HeaderDetail v-show="showDetail" @hidden="handle" :seller="seller" />
  </div>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/Index.vue'
import HeaderDetail from '@/components/header-detail/Index.vue'
import { ref, computed } from 'vue';

const props = defineProps({
  seller: {
    type: Object,
    default: () => { }
  }
})

const bg = computed(() => {
  return `url(${props.seller.avatar})`
})

let showDetail = ref(false)

const handle = (e) => {
  showDetail.value = e
}
</script>

<style lang="less" scoped>
@import '@/assets/variable.less';
@import '@/assets/mixin.less';

.header {
  position: relative;
  overflow: hidden;
  color: @color-white;
  background-color: @color-background-ss;

  .content-wrapper {
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative;

    .avatar {
      flex: 0 0 64px;
      margin-right: 16px;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          .bg-image('brand');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: @fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          font-size: @fontsize-small-s;
          margin-left: 4px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      background-color: @color-background-sss;
      border-radius: 14px;
      display: flex;
      align-items: center;

      .count {
        font-size: @fontsize-small-s;
      }

      .iconfont {
        font-size: 8px;
        margin-left: 2px;
      }
    }
  }

  .bulletin-wrapper {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 8px;
    background-color: @color-background-sss;

    .bulletin-title {
      flex: 0 0 22px;
      height: 12px;
      .bg-image('bulletin');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      margin-left: 4px;
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: @fontsize-small-s;
    }

    .icon-youjiantou {
      flex: 0 0 10px;
      font-size: 8px;
    }
  }

  .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: v-bind(bg);
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>