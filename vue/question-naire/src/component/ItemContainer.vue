<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="parentComponent === 'home'">第一周</span>
      <span class="num_tip" v-if="parentComponent === 'item'">题目{{ state.itemNum }}</span>

    </header>

    <div v-if="parentComponent === 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="/item" class="start button_style"></router-link>
    </div>

    <div v-if="parentComponent === 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="state.questionList.length">
          <header class="item_title">{{ state.questionList[state.itemNum - 1].topic_name }}</header>
          <ul>
            <li class="item_list" v-for="(item, index) in state.questionList[state.itemNum - 1].topic_answer"
              @click="choosed(index, item.topic_answer_id)">
              <span class="option_style" :class="{ 'current': currentNum === index }">{{ chooseTyep(index) }}</span>
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="state.itemNum < state.questionList.length"></span>
      <span class="submit_item button_style" @click="submit" v-else></span>
    </div>

  </section>
</template>

<script setup>
import { useQuestionStore } from '@/stores/question.js'
import { storeToRefs } from 'pinia';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const questionStore = useQuestionStore()
const { state } = storeToRefs(questionStore)
// console.log(state.value.questionList);



const chooseTyep = (i) => {
  switch (i) {
    case 0: return 'A'
    case 1: return 'B'
    case 2: return 'C'
    case 3: return 'D'
    case 4: return 'E'
    case 5: return 'F'
  }
}

let currentNum = ref(null)
let currentId = ref(null)
const choosed = (index, id) => {
  currentNum.value = index
  currentId.value = id
}



const nextItem = () => { //修改仓库中的值
  console.log(currentId.value);
  if (!currentId.value) return
  console.log(123);
  questionStore.setItemNum()//去到下一题
  questionStore.saveAnswerList(currentId.value)//记录答案
  currentNum.value = null
  currentId.value = null
}

const router = useRouter()
const submit = () => {
  if (!currentId.value) return
  questionStore.saveAnswerList(currentId.value)//记录答案
  router.push('/score')
}


defineProps({
  parentComponent: String
})



</script>

<style lang="less" scoped>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;

  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}

.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}

.home_logo {
  background: url(../assets/images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}

.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.175rem;
  background-repeat: no-repeat;
}

.start {
  background-image: url(../assets/images/1-4.png);
}

.item_back {
  background-image: url(../assets/images/2-1.png);
  background-size: 100% 100%;
}

.item_list_container {
  position: absolute;
  width: 8rem;
  height: 7rem;
  top: 2.4rem;
  left: 3rem;

  .item_title {
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }

  .item_list {

    // margin-top: 0.4rem;
    span {
      display: inline-block;
      font-size: 0.6rem;
      color: #fff;
    }

    .option_style {
      width: 0.725rem;
      height: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: Arial;

      &.current {
        background-color: #ffd400;
        color: #575757;
        border-color: #ffd400;
      }
    }
  }
}

.next_item {
  background-image: url(../assets/images/2-2.png);
}

.submit_item {
  background-image: url(../assets/images/3-1.png);
}
</style>
