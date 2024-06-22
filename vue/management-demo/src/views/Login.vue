<template>
    <div class="login">
        <h3>图书管理系统</h3>
        <div class="user">
            <span>账号：</span>
            <input type="text" name="" id="" v-model="state.user">
        </div>

        <div class="pwd">
            <span>密码：</span>
            <input type="text" v-model="state.pwd">
        </div>

        <div class="btn">
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from 'vue-router'

const state = reactive({
    user: '',
    pwd: ''
})

const router = useRouter()
const login = () => {
    if (state.user !== '' && state.pwd !== '') {
        localStorage.setItem('user', state.user)
        router.push('/home')
    }
}

</script>

<style lang="css" scoped>
.login {
    background-color: hsl(203, 70%, 83%);
    box-shadow: 0 0 10px #3e8ac9;
    width: 350px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
}

.user,
.pwd {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

span {
    width: 50px;

}

input {
    flex: 1;
    font-size: 18px;
    padding: 3px 10px;
}

button {
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 5px 0;
    background-color: #0269a1;
    color: #e9e9e9;
    border: none;
    border-radius: 100px;
    cursor: pointer;
}

h3 {
    margin-bottom: 20px;
    text-align: center;
}
</style>