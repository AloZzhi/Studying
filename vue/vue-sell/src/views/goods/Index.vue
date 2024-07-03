<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-wrap" ref="menuWrap">
        <ul>
          <li @click="selectMenu(index)" class="menu-item" :class="{ 'current': currentIndex === index }"
            v-for="(item, index) in state.goods" :key="index">

            <span class="text">
              <SupportIcon size="3" :type="item.type" v-if="item.type >= 0" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrap" ref="foodsWrap">
        <ul>
          <!-- 菜系 -->
          <li ref="foodList" class="food-list" v-for="(item, index) in state.goods" :key="index">
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <!-- 菜品 -->
              <li class="food-item" v-for="(food, idx) in item.foods" :key="idx">
                <div class="pic">
                  <img :src="food.image" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <div class="desc">{{ food.description }}</div>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                  <!-- ++++ -->
                  <div class="cartcontrol-wrap">
                    <CartControl :food="food" @update:food="updateFoods" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 购物车 -->
  <ShopCart :selectedFoods="state.selectedFoods" :seller="seller" />
</template>

<script setup>
import { getGoods } from '@/api'
import { reactive, ref, onMounted, nextTick, computed } from 'vue';
import BScroll from '@better-scroll/core'
import SupportIcon from '@/components/support-icon/Index.vue'
import CartControl from '@/components/cart-control/Index.vue'
import ShopCart from '@/components/shop-cart/Index.vue'

defineProps({
  seller: {
    type: Object,
    default: () => { }
  }
})

const state = reactive({
  goods: [],
  // currentIndex: 0,
  foodsScroll: null,
  listHeight: [], // 右侧菜系的高度
  scrollY: 0,  // 记录右侧容器滚动的距离
  selectedFoods: []  // 想要购买的商品
})

// 获取商品数据
getGoods().then(res => {
  console.log(res);
  state.goods = res

  nextTick(() => { // nextTick只会在组件编译，挂载且在浏览器上渲染完成后才会执行
    betterScroll()
    _calculateHeight()
  })
})

// 滚动效果
const menuWrap = ref(null)
const foodsWrap = ref(null)
const betterScroll = () => {
  new BScroll(menuWrap.value, {
    scrollY: true,
    click: true
  })
  state.foodsScroll = new BScroll(foodsWrap.value, {
    click: true,
    probeType: 3
  })
  // 监听右侧页面的滚动
  state.foodsScroll.on('scroll', (pos) => {
    // console.log(Math.abs(pos.y));
    state.scrollY = Math.abs(pos.y)
  })
}

// 点击菜单
const foodList = ref(null)
const selectMenu = (i) => {
  // state.currentIndex = i
  state.foodsScroll.scrollToElement(foodList.value[i], 300)
  // console.log(foodList.value[0]);
}

// 右侧商品滚动要能修改 state.currentIndex
const currentIndex = computed(() => {
  // state.scrollY  ===>  state.currentIndex
  for (let i = 0; i < state.listHeight.length; i++) {
    let h1 = state.listHeight[i]
    let h2 = state.listHeight[i + 1]
    if (!h2 || (state.scrollY >= h1 && state.scrollY < h2)) {
      return i
    }
  }
  return 0
})

// 计算所有菜系的高度
const _calculateHeight = () => {
  // 获取到所有的菜系 li，计算每一个li的高度
  // console.log(foodList.value);

  let height = 0
  state.listHeight.push(height)

  Array.from(foodList.value).forEach(li => {
    height += li.clientHeight
    state.listHeight.push(height)
  });

  // console.log(state.listHeight);
}


// 子组件点击购买+
const updateFoods = () => {
  // console.log(state.goods);
  // 需要购买的菜全部记录下来
  const arr = []
  for (let good of state.goods) {
    if (good.foods) {
      for (let food of good.foods) {
        if (food.count) {
          arr.push(food)
        }
      }
    }
  }
  state.selectedFoods = arr
  console.log(state.selectedFoods);
}








// onMounted(async () => { // 挂载完成之后,该组件被编译完成并且添加在了index.html中
//   betterScroll()
// })


</script>

<style lang="less" scoped>
@import '@/assets/variable.less';

.goods {
  width: 100%;
  position: absolute;
  bottom: 46px;
  top: 177px;
  overflow: hidden;

  &-content {
    display: flex;
    height: 100%;

    .menu-wrap {
      flex: 0 0 80px;
      background-color: @color-background-ssss;
      // overflow-y: scroll;

      .menu-item {
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.current {
          background-color: #fff;
          font-weight: bold;
        }
      }
    }

    .foods-wrap {
      flex: 1;

      .title {
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background-color: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }

      .food-item {
        display: flex;
        padding: 18px;

        .pic {
          flex: 0 0 57px;
          margin-right: 10px;

          img {
            width: 100%;
          }
        }

        .content {
          flex: 1;
          position: relative;

          .name {
            font-size: @fontsize-medium;
            color: @color-background;
            margin: 2px 0 8px 0;
          }

          .desc,
          .extra {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            margin-bottom: 8px;

            .count {
              margin-right: 12px;
            }
          }

          .price {
            font-weight: 700;

            .now {
              font-size: @fontsize-medium;
              color: @color-red;
              margin-right: 8px;
            }

            .old {
              font-size: @fontsize-small-s;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }

          .cartcontrol-wrap {
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        }
      }
    }
  }
}
</style>