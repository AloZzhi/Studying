<template>
    <div class="login-bg">
        <div class="login-container">
            <div class="login-header">
                <img class="logo 10rem" src="../assets/img/login.jpg" alt="">
                <div class="login-title">后台管理系统</div>
            </div>
            <el-form :model="param" :rules="rules" ref="login" size="large">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名">
                        <template #prepend>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="param.password" placeholder="密码" type="password">
                        <template #prepend>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="pwd-tips">
                    <el-checkbox class="pwd-checkbox" v-model="checked" label="记住密码" />
                </div>
                <el-button class="login-btn" type="primary" @click="submitForm()">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
import { usePermissStore } from '../store/permiss'

const permissStore = usePermissStore()
const router = useRouter()

interface LoginInfo {
    username: string;
    password: string;
}

const lgStr = localStorage.getItem('login-param')
const defParam = lgStr ? JSON.parse(lgStr) : null

const param = reactive<LoginInfo>({
    username: defParam ? defParam.username : '',
    password: defParam ? defParam.password : ''
})

const rules: FormRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到  15 个字符', trigger: 'blur' }
    ]
}

const login = ref(null);

const checked = ref(lgStr ? true : false);

const submitForm = () => {
    if (!login.value) return
    // 严谨
    login.value.validate(valid => {
        console.log(valid);
        if (valid) {
            ElMessage.success('登录成功')
            localStorage.setItem('username', param.username)
            const keys = permissStore.defaultList[
                param.username == 'admin' ? 'admin' : 'user']
            permissStore.handleSet(keys)
            if (checked.value) {
                localStorage.setItem('login-param', JSON.stringify(param))
            } else {
                localStorage.removeItem('login-param')
            }
            router.push('/')
        } else {
            ElMessage.error('登录失败')
        }

    });
}
</script>

<style>


</style>