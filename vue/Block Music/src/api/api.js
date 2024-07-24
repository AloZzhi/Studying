// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // 替换为实际的网易云音乐API URL，如果本地测试使用你的本地服务
  withCredentials: true, // 确保请求时发送cookie，以便获取用户数据
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getDailySongs() {
    return apiClient.get('/recommend/resource'); // 网易云音乐API每日推荐歌单的实际端点
  },
};
