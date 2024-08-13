<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <div class="logo">
        <img src="../assets/logo.jpg" alt="">
      </div>
      <h1>登录</h1>
      <div class="avatar">
        <img src="https://wx3.sinaimg.cn/large/007Badvygy1gytgbptq8yj30j60qmdmk.jpg" alt="">
      </div>
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button color="#a9c9c9" round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <p class="register" @click="() => router.push('/register')">新用户？点击这里注册</p>

    </div>
   
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/api'
import { useRouter } from 'vue-router';

    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const onSubmit = async (values) => {
  // console.log(values);
  const res = await axios.post('/user/login', {   // http://localhost:3000/user/login
    username: values.username,
    password: values.password
  })
  localStorage.setItem('userInfo', JSON.stringify(res.data))
  localStorage.setItem('token', res.token)

  router.push('/')
   
};
</script>

<style lang="less" scoped>
@import "../assets/variable.less";

.login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  .logo{
    img{
      width: 112px;
      top:50px;
      
    }
    
    
  }
  h1 {
    height: 0.6933rem;
    text-align: center;
    font-size: 0.48rem;
    margin-top: 1.12rem;
  }
  .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1rem auto 0.77rem;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
}
.register {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.374rem;
    color: rgba(16, 16, 16, 1);
  }
}

:deep(.van-cell__title.van-field__label) {
  width: 45px;
  
 
}

:deep(.van-cell-line-height){
    height: 80px; 
  }


</style>
