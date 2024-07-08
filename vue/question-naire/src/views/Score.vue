<template>
  <div class="score">
    总得分：{{ score() }}
  </div>
</template>

<script setup>
import { useQuestionStore } from '@/stores/question.js'
import { storeToRefs } from 'pinia';
const questionStore = useQuestionStore()
const { state } = storeToRefs(questionStore)

const score = function () {
  let sum = 0;
  state.value.questionList.forEach((question, index) => {
    question.topic_answer.forEach((answer) => {
      if (answer.is_standard_answer && answer.topic_answer_id === state.value.answerList[index]) {
        sum += (100 / state.value.questionList.length)
      }
    })
  })
  return sum

}



</script>

<style lang="css" scoped>
.score {
  font-size: 2rem;
  color: #fff;
}
</style>