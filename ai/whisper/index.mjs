import fs from 'fs';
import axios from 'axios';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-X0elCqFwBaSuKkLwmcvMKGMlacmRAwmb2hjaKm4MxBu2cdIY',
  baseUrl: 'https://api.302.ai/v1'
})

async function textToSpeech(content) {
  try {
    const response = await client.audio.speech.create({
      model: 'whisper-1',
      message: [{
        role: 'system',
        content: '你好欢迎使用OpenAI文字转语音'
      }]
    })
    console.log(response.data);
  } catch (err) {
    console.log('文本转语音失败了', err);
  }
}

textToSpeech('你好，我是Alo');