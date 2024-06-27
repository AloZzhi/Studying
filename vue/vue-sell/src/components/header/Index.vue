<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">老三样</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}送达
        </div>
        <div class="support" v-if="seller.supports" size="1">
          <SupportIcon :type="seller.supports[0].type"></SupportIcon>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/Index.vue'
defineProps({
  seller: {
    type: Object,
    default: () => { }
  }
})
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
    padding: 24px 12px 18px 24px;
    display: flex;

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
      display: list-item;
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

}
</style>