<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="goBeijing">{{state.title}}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		onMounted,
		reactive
	} from 'vue';
	const state = reactive({
		title: 'momo'
	})

	const goBeijing = () => {
		// uni.navigateTo({
		// 	url: '/pages/hello/hello'
		// })
		// uni.reLaunch({
		// 	url:"/pages/hello/hello"
		// })

		uni.switchTab({
			url: '/pages/hello/hello'
		})
	}

	onBeforeMount(() => {
		console.log('onBeforeMount')
	})

	onMounted(() => {
		console.log('onMounted')
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>