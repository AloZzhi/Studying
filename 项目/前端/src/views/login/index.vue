<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header-wrapped">
				<div class="header-content">
					<h3>会议管理系统</h3>
					<span id="welcome">欢迎你的登录</span>
				</div>
			</el-header>
			<el-main>
				<div class="login-wrapped">
					<el-tabs v-model="activeName" class="demo-tabs" id='login-card' stretch>
						<el-tab-pane label="登录" name="first">
							<el-form class="login-form">
								<el-form-item label="账号">
									<el-input v-model="loginData.account" placeholder="请输入账号" />
								</el-form-item>
								<el-form-item label="密码">
									<el-input v-model="loginData.password" placeholder="请输入密码" />
								</el-form-item>
								<div id="footer-warpped">
									<div id="forget">
										<span id="forgetpassword" @click="openforget">忘记密码</span>
									</div>
									<div class="footer-button">
										<el-button type="primary" round @click="Logining">登录</el-button>
									</div>
									<div class="footer-zhuce">
										还没有账号？<span class="go-registe">马上去注册</span>
									</div>
								</div>
							</el-form>
						</el-tab-pane>
						<el-tab-pane label="注册" name="second">
							<el-form class="registe-form">
								<el-form-item label="账号">
									<el-input v-model="registerData.account" placeholder="账号长度6-12位" />
								</el-form-item>
								<el-form-item label="密码">
									<el-input v-model="registerData.password" placeholder="密码需要长度为6-12位包含字母数字" />
								</el-form-item>
								<el-form-item label="确认密码">
									<el-input v-model="registerData.repassword" placeholder="请再次输入密码" />
								</el-form-item>
								<div id="footer-warpped">

									<div class="footer-button">
										<el-button type="primary" round @click="Register1">注册</el-button>
									</div>

								</div>
							</el-form>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-main>
			<el-footer>
				<div class="footer-warpped">
					<div class="foot-content">
						<span>东华理工大学</span>
						<span>软件工程</span>
						<span>2021级</span>
						<span>二组</span>
					</div>
				</div>
			</el-footer>
		</el-container>
	</div>
	<forget ref="forgetP"></forget>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import forget from './components/forget_password.vue'
import { login, register } from '@/api/login';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const activeName = ref('first')
const router = useRouter()
interface formData {
	account: String;
	password: String;
	repassword?: string
}
const loginData: formData = reactive({
	account: '',
	password: ''
})
const registerData: formData = reactive({
	account: '',
	password: '',
	repassword: ''
})
const forgetP = ref()
const openforget = () => {
	forgetP.value.open()
	//登录
}
const Logining = async () => {
	const res = await login(loginData)
	const { token } = res
	console.log(res)
	if (res.message === '登陆成功') {
		ElMessage({
			message: '登录成功',
			type: 'success',
		})
		localStorage.setItem('token', token)
		router.push('./home')
	} else {
		ElMessage.error('登录失败，请检查账号密码是否正确')
	}
}
//注册
const Register1 = async () => {
	if (registerData.password === registerData.repassword) {
		const res = await register(registerData)
		console.log(res)
		if (res.message === '注册成功') {
			ElMessage({
				message: '注册成功',
				type: 'success',
			})
			activeName.value = 'first'
		} else {
			ElMessage.error('注册失败，请检查注册数据是否正确')
		}
	} else {
		ElMessage.error('注册失败，两次不密码一致')
	}

}
</script>

<style lang="css" scoped>
* {
	padding: 0;
	margin: 0;
	text-decoration: none;
}

.el-header {
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-wrapped {
	.header-content {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		#welcome {
			font-size: 13px;
		}
	}
}

.el-main {
	height: 600px;
	background: url(../../img/loginbgimg.jpg);
	background-size: cover;

	.el-form-item {
		margin-bottom: 15px;
	}

	.login-wrapped {
		width: 1200px;
		margin: 0 auto;
		height: 600px;
		display: flex;
		align-items: center;
		justify-content: end;

		#login-card {
			height: 300px;
			background-color: #ecf8f3;
			width: 250px;

			padding: 0 10px
		}

		.login-form {
			margin-top: 30px;

		}
	}

}

.foot-content {
	width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;

	span {
		margin: 0 10px;
	}
}

#footer-warpped {
	#forgetpassword {
		font-size: 10px;
		justify-content: end;
		display: flex;
		margin: 8px 0;
		color: #409eff;
		cursor: pointer;
	}

	.footer-button {
		width: 100%;

		.el-button {
			width: 100%;
		}
	}

	.footer-zhuce {
		display: flex;
		justify-content: center;
		font-size: 12px;
		margin-top: 8px;

		.go-registe {
			color: #409eff;
			cursor: pointer;
		}
	}
}

:deep(.el-tabs__item) {
	color: #333;
	font-size: 18px;
}

:deep(.el-input_inner) {
	height: 40px;
}

:deep(.el-form-item_label) {
	height: 40px;
	line-height: 40px;
}
</style>