<template>
	<view class="suggest">
		<wyheader>


			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="今天想听什么"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		<!-- banner -->
		<view class="banner">
			<swiper autoplay="true" interval="3000" duration="500" indicator-dots="true" active-class="swiper-active">
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue'
	const state = reactive({
		banners: []
	})
	uni.request({
		url: 'http://localhost:3000/banner/',
		method: "GET",
		data: {
			type: 2
		},
		success(res) {
			console.log(res)
			state.banners = res.data.banners
		}
	})
</script>

<style lang="scss" scoped>
	.suggest {
		padding: 0 20rpx;

		.search {
			width: 500rpx;
			height: 60rpx;

			:deep(.uni-searchbar) {
				height: 100%;
				padding: 0;

				.uni-searchbar__box {
					height: 100%;
					padding: 0;
				}
			}
		}

		.banner {
			.swiper-item {
				width: 100%;
				height: 100%;
				border-radius: 10px;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.balls {
			display: flex;
			overflow-x: scroll;
			margin: 30rpx 0;

			.ball-item {
				flex: 0 0 20%;
				font-size: 20rpx;
				text-align: center;

				.icon {
					width: 70rpx;
					height: 70rpx;
					margin: 0 auto;
					margin-bottom: 14rpx;
					background-color: $uni-primary-color;
					border-radius: 50%;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

	}
</style>