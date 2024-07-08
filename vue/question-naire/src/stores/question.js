import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'

export const useQuestionStore = defineStore('question', () => {
  const state = reactive({
    questionList: [],
    itemNum: 1,//第几题
    answerList: [] //选中的答案
  })

  function getQuestionList() {//获取题目
    axios.get('https://mock.mengxuegu.com/mock/65a7d72cb674c730aaefdcea/example/question')
      .then(res => {
        console.log(res);
        state.questionList = res.data.questions
      })
  }

  function setItemNum() {
    state.itemNum++;
  }
  function saveAnswerList(id) {
    state.answerList.push(id)
  }

  return { state, getQuestionList, setItemNum, saveAnswerList }
})