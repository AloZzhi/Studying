<template>
  <div class="login">
    <div class="login-wrap">
      <h1>旅梦后台管理</h1>
      <el-row>
        <el-input v-model="state.account" placeholder="请输入账号" />
      </el-row>

      <el-row>
        <el-input v-model="state.password" placeholder="请输入密码" />
      </el-row>

      <el-row>
        <el-button type="success" plain @click="signIn">登录</el-button>
        <el-button>注册</el-button>
      </el-row>

    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const state = reactive({
  account: "admin",
  password: "123",
});
const router = useRouter()
const signIn = () => {
  if (state.account && state.password) {
    ElMessage({
      message: '登录成功！',
      type: 'success',
    })
    router.push('/home')
  }
}
</script>

<style lang="css" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap {
  width: 400px;
  border: 3px solid rgb(241, 239, 225);
  background-color: rgb(163, 193, 231);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  line-height: 3;
  font-size: 20px;
}

.el-row {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  justify-content: center;
}

.el-button {
  width: 40%;
  color: rgb(42, 158, 241);
}

.el-button--success {
  width: 40%;
  background-color: #3c90de;
  color: #fff;
  border: 3px solid rgb(118, 193, 255);

}
</style>
