<template>
	<div class="swipe">
		<AyiCarousel :listData="[1, 2, 3, 5]" :style="{ height: '200px' }">
			<template #default="{ record, index }">
				<div :style="{ background: index % 2 === 0 ? '#9B07EF' : '#071EEF' }" class="list-item">
					{{ record }}
				</div>
			</template>
		</AyiCarousel>
	</div>
	<div class="submit">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="会议名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="会议地点" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择会议地点">
					<el-option label="地点一" value="shanghai"></el-option>
					<el-option label="地点二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="报名时间" required>
				<el-col :span="11">
					<el-form-item prop="date1">
						<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
							style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="date2">
						<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>

			<!-- 注册后才能勾选 -->
			<el-form-item label="是否为演讲者" prop="isSpeaker">
				<el-switch v-model="ruleForm.isSpeaker"></el-switch>
			</el-form-item>

			<!-- <el-form-item label="参会者身份" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox label="普通参与者" name="type"></el-checkbox>
					<el-checkbox label="演讲者" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item> -->

			<el-form-item label="会议方式" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio label="线上"></el-radio>
					<el-radio label="线下"></el-radio>
				</el-radio-group>
			</el-form-item>

			<el-form-item label="演讲论文" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>

			<!-- 演讲PPT -->

			<!-- 分会组织者 -->

			<!-- 组织的分会 -->

			<!-- 参会的演讲者，进行选择 -->




			<!-- 是否演讲 -->
			<el-form-item label="是否演讲" prop="isSpeak">
				<el-switch v-model="ruleForm.isSpeak"></el-switch>
			</el-form-item>


			<!-- 演讲者内容 -->

			<!-- 选择有空时间 -->
			<el-form-item label="可参会时间" required>
				<el-col :span="11">
					<el-form-item prop="speakDate1">
						<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
							style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="speakDate2">
						<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>



			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			rules: {
				name: [
					{ required: true, message: '请输入会议名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				region: [
					{ required: true, message: '请选择会议活动区域', trigger: 'change' }
				],
				date1: [
					{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
				],
				date2: [
					{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
				],
				type: [
					{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
				],
				resource: [
					{ required: true, message: '请选择活动资源', trigger: 'change' }
				],
				desc: [
					{ required: true, message: '请填写活动形式', trigger: 'blur' }
				]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('已申请');
				} else {
					console.log('申请出错！');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}

</script>

<style lang="css" scoped>
.submit {
	padding: 10px;
	margin: 10px;
}

.list-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 20px;
	margin-bottom: 20px;
}
</style>