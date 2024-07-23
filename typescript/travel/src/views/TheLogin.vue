<template>
  <div class="w-screen h-screen">
    <van-nav-bar left-arrow>
      <template #rigth>
        <span class="text-xs text-gray-400">遇到问题</span>
      </template>
    </van-nav-bar>
      <van-form model="params" @submit="onSubmit">
          <van-cell-group inset>
              <van-field 
                  v-model="params.username"
                  name="用户名"
                  label="用户名" 
                  placeholder="请输入用户名" 
                  :rules="[{ required: true, message: '请输入用户名'}]"
              />
              <van-field 
                  v-model="params.password"
                  type="password"
                  name="密码"
                  label="密码" 
                  placeholder="请输入密码" 
                  :rules="[{ required: true, message: '请输入密码'}]"
              />
          </van-cell-group>
          <div>
              <van-button block native-type="submit">登录</van-button>
          </div>
          <div class="text-center" @click="toRegister">无账号？点击注册</div>
            <span class="text-ms ml-4 text-[#e6723c]">如欲继续操作，请先同意必选条款</span>
            <van-field name="checkbox">
                <template #input>
                <van-checkbox v-model="checked" shape="square" />
                <span class="text-xs ml-2">(必选)我同意<a href="#">《用户协议》</a>和<a href="#">《使用条款》</a></span>
                </template>
            </van-field>
      </van-form>
  </div>
</template>
<script setup lang="ts">
import { ref,reactive } from 'vue'
import {LoginInfo} from '@/types/login'
import { useRouter } from 'vue-router';

//类型接口
const router = useRouter()

const params = reactive<LoginInfo>({
  username: '',
  password: ''
})

function onSubmit() {
  console.log('submit!',params)
}
const checked = ref(false)
const toRegister = ()=>{
  router.push('/register')
}
</script>