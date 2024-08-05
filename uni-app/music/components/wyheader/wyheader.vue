<template>
	<view class="header-box">
		<view class="header">

		</view>
	</view>
	<view class="header">
		<uni-icons type="bars" size="30"></uni-icons>

		<view class="content">
			<slot name="content"></slot>
		</view>
		<uni-icons :type="icon" size="22"></uni-icons>
	</view>
</template>

<script setup>
	defineProps({
		icon: {
			type: String,
			default: 'mic'
		},
		fontColor: {
			type: String,
			default: '#000'
		}
	})
</script>

<style lang="scss" scoped>
	.header-box {
		//#ifdef H5
		height: 100rpx;
		// #endif

		//#ifndef H5
		height: 180rpx;
		//#endif
	}

	.header {
		display: flex;
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		position: fixed;
		// #ifdef H5
		top: 0;
		// #endif

		// #ifndef H5
		top: 80rpx;
		// #endif
		width: 100%;
		box-sizing: border-box;
		z-index: 9999;
		color: v-bind(fontColor);

		:deep(.uni-icons) {
			color: v-bind(fontColor) !important;
		}
	}
</style>