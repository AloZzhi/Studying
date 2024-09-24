<template>
	<el-dialog v-model="state.forgetpassworddialog" title="忘记密码" width="400px">
		<el-form class="login-form" :rules="rules">
			<el-form-item label="输入你的注册账号" prop="account">
				<el-input v-model="forgetData.account" placeholder="请输入账号" />
			</el-form-item>
			<el-form-item label="请输入邮箱" prop="email">
				<el-input v-model="forgetData.email" placeholder="请输入邮箱" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.forgetpassworddialog = false">取消</el-button>
				<el-button type="primary" @click='openchangepassword'>
					下一步
				</el-button>
			</div>
		</template>
	</el-dialog>
	<!-- 修改密码 -->
	<el-dialog v-model="state.changepassworddialog" title="修改密码" width="400px">
		<el-form class="login-form" :rules="rules">
			<el-form-item label="输入你的新密码" prop="password">
				<el-input v-model="forgetData.password" placeholder="输入你的新密码" />
			</el-form-item>
			<el-form-item label="请再次输入密码" prop="repassword">
				<el-input v-model="forgetData.repassword" placeholder="请再次输入密码" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.changepassworddialog = false">取消</el-button>
				<el-button type="primary"  @click="state.forgetpassworddialog = false">确认</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
	import { reactive, ref } from 'vue'
	interface forgetData {
		account : number;
		email : string;
		password : string;
		repassword : string
	}
	const rules = reactive({
		account: [
			{ required: true, message: '请输入正确的账号', trigger: 'blur' },

		],
		email: [
			{ required: true, message: '请输入正确的注册邮箱', trigger: 'blur' },

		],
		password: [
			{ required: true, message: '请输入密码', trigger: 'blur' },

		],
		repassword: [
			{ required: true, message: '请输入正确密码', trigger: 'blur' },

		],
	})
	const forgetData : forgetData = reactive({
		account: null,
		email: '',
		password: '',
		repassword: ''
	})
	const state = reactive({
		forgetpassworddialog: false,
		changepassworddialog: false
	})
	const open = () => {
		state.forgetpassworddialog = true

	}
	defineExpose({
		open
	})
	const openchangepassword = () => {
		state.changepassworddialog = true
		state.forgetpassworddialog = false
	}
</script>

<style lang="css" scoped>

</style>