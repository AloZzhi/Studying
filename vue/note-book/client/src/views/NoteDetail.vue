<template>
  <div class="note-detail">
    <div class="note-img">
      <img :src="noteDetail.head_img" alt="">
    </div>
    <div class="note-content">
      <div class="tab">
        <span class="note_type">{{ noteDetail.note_type }}</span>
        <span class="author">{{ noteDetail.nickname }}</span>
      </div>
      <p class="title">{{ noteDetail.title }}</p>
      <div class="content" v-html="noteDetail.note_content"></div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from '@/api';

const route = useRoute()
const noteDetailList = ref({})

async function getNoteDetial() {
  const res = await axios.get('/findNoteDetailById', {
    params: {
      id: route.query.id
    }
  })
  console.log(res);
  noteDetailList.value = res.data
}

getNoteDetial()
console.log(noteDetailList.value);
</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>