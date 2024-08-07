<template>
	<view class="login">
		<view class="logo">
			<image src="../../static/images/suggest-active.png" mode=""></image>
		</view>
		<view class="login-body">
			<view class="qrimg">
				<text>{{qrmsg}}</text>
				<view class="login-img">
					<image :src="qrimg" mode=""></image>
				</view>
			</view>
			<view class="start">
				<view class="traveler">
					立即体验
				</view>
				<view class="qr-login" @click="qrLogin">
					扫码登录
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		baseUrl
	} from '@/api/index.js'

	import {
		ref
	} from 'vue'

	import {
		useStore
	} from 'vuex'




	const qrimg = ref('')
	let qrmsg = ref('扫一扫')
	const store = useStore()

	const qrLogin = () => {
		uni.request({
			url: `${baseUrl}/login/qr/key?timestamp=${Date.now()}`,
			success: (res) => {
				console.log(res.data.data.unikey)
				let key = res.data.data.unikey
				//生成二维码
				uni.request({
					url: `${baseUrl}/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
					success: (result) => {
						// console.log(result)
						qrimg.value = result.data.data.qrimg

						//读取二维码状态
						const timer = setInterval(() => {
							uni.request({
								url: `${baseUrl}/login/qr/check?key=${key}&timestamp=${Date.now()}`,
								success: (response) => {
									console.log(response);
									qrmsg.value = response.data.message
									if (response.data.code === 803) {
										clearInterval(timer)
										uni.setStorageSync('cookie',
											response.data.cookie)
										store.commit('changeIsLogin', true)

										uni.reLaunch({
											url: '/pages/suggest/suggest'
										})
									}
								}
							})
						}, 1000)
					}
				})
			}
		})
	}
</script>

<style lang="scss">
	.login {
		height: 100vh;
		background: linear-gradient(#f9ebeb, #ffffff);
		position: relative;

		.logo {
			width: 150rpx;
			height: 150rpx;
			position: absolute;
			top: 200rpx;
			left: 50%;
			margin-left: -75rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.login-body {
			position: absolute;
			top: 400rpx;
			left: 50%;
			transform: translateX(-50%);

			.qrimg {
				text-align: center;

				.login-img {
					width: 400rpx;
					height: 400rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.start {
				margin-top: 50rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>