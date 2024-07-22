<template>
  <div class="signup-container">
    <van-nav-bar
      title="Sign Up"
      left-text="Back"
      left-arrow
      @click-left="goBack"
    />
    <div class="signup-content">
      <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Spotify_icon.png/640px-Spotify_icon.png" alt="Spotify Logo" />
      <h1 class="title">Create an Account</h1>
      <van-field
        v-model="email"
        label="Email"
        placeholder="Enter your email"
        left-icon="email"
        class="input-field"
      />
      <van-field
        v-model="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        left-icon="locked"
        class="input-field"
      />
      <van-button type="info" class="signup-button" @click="signUp">Sign Up</van-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const signUp = () => {
      // 在这里可以添加注册逻辑
      console.log('Email:', email.value);
      console.log('Password:', password.value);
      // 假设注册成功后跳转到登录页面
      router.push('/login');
    };

    const goBack = () => {
      router.back();
    };

    return {
      email,
      password,
      signUp,
      goBack,
    };
  },
};
</script>

<style>
.signup-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.signup-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.logo {
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-field {
  margin-bottom: 16px;
  width: 100%;
}

.signup-button {
  margin-top: 20px;
  width: 100%;
}
</style>
