<template>
  <div class="chat-app h-screen flex flex-col pb-[0.2rem]">
    <header class="app-header sticky top-0 z-10 bg-amber-700 h-[1.5rem] text-white flex items-center justify-center">
      <h1 class="text-[0.7rem] font-bold">AI Chat Assistant</h1>
    </header>
    <!-- 消息内容 -->
    <div class="message-list flex-1 overflow-y-auto p-1 overflow-auto" ref="messageContainer">
      <!-- 全部消息 -->
      <div class="message-item flex mt-1 items-center" v-for="(item, index) in messages" :key="index"
        :class="[item.role === 'bot' ? 'justify-start' : 'justify-end']">
        <div v-if="loading && index === latestBotMessageIndex">
          <van-loading color="#1989fa">正在生成回复</van-loading>
        </div>
        <div class="rounded p-1 bg-gray-100">
          <p class="leading-normal text-[0.4rem] text-black">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <footer class="app-footer bg-gray-100 border-t border-gray-200 rounded-sm px-1" ref="footer">
      <div class="app-footer-content flex items-center justify-between py-1 space-x-1">
        <input type="text" v-model="newMessage" placeholder="请输入你的问题"
          class="w-full p-[0.2rem] text-[0.4rem] text-gray-700 bg-white border border-gray-300 rounded-sm" />
        <button @click="sendMessage"
          class="ml-2 p-[0.2rem] text-[0.4rem] text-white bg-amber-700 hover:bg-blue-600 rounded-sm" v-if="!loading">
          Send
        </button>
        <van-loading color="#1989fa" v-else></van-loading>
      </div>
    </footer>
    <Tabbar />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from "vue";
import { useAiChatStore } from "@/stores/aiChatStore";
import Tabbar from "@/components/Tabbar.vue";

const newMessage = ref("");
const messageContainer = ref(null);
const footer = ref(null);

const { addMessage } = useAiChatStore();

const { messages } = toRefs(useAiChatStore());

let loading = ref(true);
// 记录最新的消息索引
let latestBotMessageIndex = ref(-1);

// 加载首次消息
const firstLoad = async () => {
  await coze_request();
  loading.value = false;
};

async function sendMessage() {
  const query = newMessage.value;
  addMessage(query, "user");
  // 清空输入框
  newMessage.value = "";

  // 更新最新的消息索引
  latestBotMessageIndex.value = messages.value.length - 1;
  loading.value = true;

  // 发送 Coze POST 请求
  await coze_request(query);
  loading.value = false;

  scrollToBottom();
}

// 组件挂载后,消息滚动到容器底部
onMounted(() => {
  // 消息的首次加载
  firstLoad();

  // 确保初次滚动到底部
  scrollToBottom();
});

// 滚动到底部的函数
function scrollToBottom() {
  if (messageContainer.value && footer.value) {
    messageContainer.value.scrollTop =
      messageContainer.value.scrollHeight - messageContainer.value.clientHeight;
  }
}

function coze_request(query: string = "") {
  // 配置请求头和请求体
  const url = "https://api.coze.cn/open_api/v2/chat";
  const headers = {
    Authorization:
      "Bearer pat_6uokZUQklz9WRpmpDU3unQZno5mjn7JOwb6Qrpyk0fRrKV3FxDfbl4Buwxqn7ER1",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    Accept: "*/*",
  };
  const data = {
    bot_id: "7396244431357820955",
    conversation_id: "11",
    user: "user_1",
    stream: false,
    query: query ? query : "你好",
  };
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        addMessage(data.messages[0].content, "bot");
        scrollToBottom();
        resolve("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
</script>
