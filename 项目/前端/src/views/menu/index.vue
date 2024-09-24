<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">
				<el-menu class="el-menu-vertical-demo" router>
					<div class="title">会议管理系统</div>
					<el-menu-item index="home">
						<el-icon>
							<House />
						</el-icon>
						<span>首页</span>
					</el-menu-item>
					<el-menu-item index="2">
						<el-icon>
							<Document />
						</el-icon>
						<span>系统概览</span>
					</el-menu-item>
					<el-sub-menu index="3">
						<template #title>
							<el-icon>
								<User />
							</el-icon>
							<span>用户管理</span>
						</template>
						<el-menu-item-group title="管理员管理">
							<el-menu-item index="3-1">超级管理员</el-menu-item>
							<el-menu-item index="3-2">管理员</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="4">
						<template #title>
							<el-icon>
								<Message />
							</el-icon>
							<span>消息管理</span>
						</template>
						<el-menu-item-group title="消息管理">
							<el-menu-item index="4-1">消息列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="回收站">
							<el-menu-item index="4-2">回收站</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-menu-item index="5">
						<el-icon>
							<Calendar />
						</el-icon>
						<span>操作日志</span>
					</el-menu-item>
					<el-menu-item index="6">
						<el-icon>
							<Sunrise />
						</el-icon>
						<span>会议管理</span>
					</el-menu-item>
					<el-menu-item index="7">
						<el-icon>
							<Setting />
						</el-icon>
						<span>系统设置</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<span class="header-left-welcome">尊敬的{{}}欢迎您登录本系统</span>
					<div class="header-right-content">
						<el-icon :size="20">
							<Message />
						</el-icon>
						<el-avatar :size="24" :src="circleUrl" />
						<el-dropdown>
							<span class="el-dropdown-link">
								设置
								<el-icon class="el-icon--right">
									<arrow-down />
								</el-icon>
							</span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item>设置账号</el-dropdown-item>
									<el-dropdown-item>更换头像</el-dropdown-item>
									<el-dropdown-item @click="outback">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
	import { reactive, toRefs } from 'vue'
	import { useRouter } from 'vue-router'
	import { ArrowDown } from '@element-plus/icons-vue'
	import ref from 'vue'
	const state = reactive({
		circleUrl:
			'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	})
	const { circleUrl } = toRefs(state)
	const router = useRouter()
	const outback = () => {
		router.push('/login')
	}
</script>

<style lang="css" scoped>
	.el-aside {
		height: 100vh;
		background-color: aquamarine;
		width: 210px;


		.el-menu {
			background-color: aquamarine;
			width: 210px;
			height: 100vh;
			border-right: 0px;
		}

		.title {
			display: flex;
			padding: 20px;
			justify-content: center;
			color: #303133;
			background-color: aquamarine;
		}
	}

	.el-menu-item:hover,
	{
	background-color: #7FFFAA;
	}

	:deep(.el-sub-menu__title:hover) {
		background-color: #7FFFAA;
	}

	:deep(.el-menu-item-group__title) {
		background-color: aquamarine;

	}

	.el-menu-item {
		background-color: aquamarine;
		color: #303133;
	}

	.el-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: aquamarine;

		.header-left-welcome {
			display: flex;
			justify-content: start;
			font-size: 14px;
		}

		.header-right-content {
			display: flex;
			justify-content: space-around;
			width: 160px;
			align-items: center;

			.el-dropdown {
				border: none;
				cursor: pointer;
			}
		}
	}
</style>