<template>
    <div class="flex flex-col h-screen">
        <div class="flex flex-nowrap fixed
         w-full items-baseline top-0 px-6 py-4 bg-gray-100">
            <div class="text-2xl font-bold">ChatGPT</div>
            <div class="ml-4 text-sm text-gray-500">
                基于 OpenAI 的 ChatGPT自然语言模型人工智能对话
            </div>
            <div class="ml-auto px-3 py-2 text-sm
             cursor-pointer hover:bg-white rounded-md" @click="clickConfig()">
                设置
            </div>
        </div>
        <div class="flex-1">
        </div>
        <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
            <div v-if="isConfig" class="mb-2 text-sm text-gray-500">
                请输入 API key:
            </div>
            <div class="flex">
                <input class="input" :type="isConfig ? 'password' : 'text'" :placehold="isConfig ? 'sk-xxxxxx' : '请输入'"
                    v-model="messageContent" @keydown.enter="sendOrSave()" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { chat } from '../libs/gpt.js'
import { ref, onMounted } from 'vue'
let messageContent = ref("")
let isConfig = ref(true) // 是否显示设置

onMounted(() => {
    if (getAPIKey()) {
        switchConfigStatus();
    }
})


const clickConfig = () => {
    if (!isConfig.value) { //    不是配置状态
        messageContent.value = getAPIKey()
    } else {
        clearMessageContent();
    }
    switchConfigStatus();
}

const getAPIKey = () => {
    return localStorage.getItem('apiKey');
}

const clearMessageContent = () => {
    messageContent.value = "";
}

const sendOrSave = () => {
    console.log(messageContent.value)
    if (!messageContent.value.length) return;
    if (isConfig.value) {
        if (saveAPIKey(messageContent.value.trim())) {
            switchConfigStatus();
        }
        clearMessageContent()
    } else {
        // 发送openai
        sendChatMessage()
    }
}

const sendChatMessage = async () => {
    const apiKey = getAPIKey();
    const messageList = [{
        role: 'system',
        content: '你是一个AI助手，你帮助用户解决各种问题。'
    }, {
        role: 'user',
        content: messageContent.value
    }]

    const data = await chat(messageList, apiKey)
    console.log(data)
}

const saveAPIKey = (apiKey) => {
    localStorage.setItem('apiKey', apiKey)
    return true
}

const switchConfigStatus = () => {
    isConfig.value = !isConfig.value
}
</script>
<style></style>