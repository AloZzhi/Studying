<template>
	<view class="menu-left" :class="isShow ? 'show' : 'hide'">
		<!-- userInfo -->
		<view class="menu-hd">
			<view class="user-info">
				<view class="avatar">
					<image class="pic" src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="username">
					<text>蜗牛</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
			<!-- 扫一扫 -->
			<view class="qricon">
				<uni-icons type="scan" size="24"></uni-icons>
			</view>
		</view>

		<view class="menu-bd">hello</view>
	</view>

	<view class="menu-mask" @click="hideMenu" v-show="isShow"></view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'

	const store = useStore()
	const isShow = computed(() => store.state.isShowMenu)

	const hideMenu = () => {

		//修改仓库中的isShowMenu = return false;
		store.commit('changeIsShowMenu', false)
	}
</script>

<style lang="scss" scoped>
	.menu-left {
		position: fixed;
		top: 80rpx;
		z-index: 9999;
		width: 620rpx;
		height: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		// box-shadow: 5px 0 20rpx #eee;
		transition: all 0.5s ease-in-out;

		&.show {
			left: 0;
		}

		&.hide {
			left: -620rpx;
		}

		.menu-hd {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.user-info {
				display: flex;
				align-items: center;

				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					overflow: hidden;

					.pic {
						width: 100%;
						height: 100%;
					}
				}

				.username {
					margin-left: 20rpx;
				}
			}
		}
	}

	.menu-mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
</style>