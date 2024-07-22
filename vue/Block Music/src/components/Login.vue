<template>
  <div class="login-container">
    <van-nav-bar title="Login" />
    <div class="form-container">
      <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
    label-width="336px"
      v-model="username"
      name="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
    label-width="336px"
      v-model="password"
      type="password"
      name="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const onSubmit = () => {
      if (username.value && password.value) {
        // Perform login logic here
        // For simplicity, let's assume the login is always successful
        router.push('/');
      } else {
        // Show an error message (Van Toast can be used)
        this.$toast.fail('Please enter valid credentials');
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.form-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.van-cell-line-height {
  height: 80px; 
}

.button-container {
  margin-top: 20px;
}
</style>
