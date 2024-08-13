// stores/aiMessageStore.js
import { defineStore } from "pinia";
import { ref } from "vue";



export const useAiChatStore = defineStore("aiChat", () => {
  const messages = ref([]);

  const addMessage = (Message, role) => {
    const newMessage = {
      id: messages.value.length + 1,
      role: role,
      content: Message,
    };

    messages.value.push(newMessage);
  };

  return {
    messages,
    addMessage,
  };
});
