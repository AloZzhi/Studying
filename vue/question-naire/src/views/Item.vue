<template>
  <ItemContainer parentComponent="item" />
</template>

<script setup>
import ItemContainer from '@/component/ItemContainer.vue';
import { useQuestionStore } from '@/stores/question.js';

const questionStore = useQuestionStore()

questionStore.getQuestionList();

</script>

<style lang="css" scoped></style>