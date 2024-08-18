<template>
	<view class="suggest">
		<wyheader>
			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>

		<!-- banner -->
		<view class="banner">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<!-- 推荐歌单 -->
		<songList :list="state.songList" title="推荐歌单"></songList>

		<!-- 新歌 -->
		<newSongs :list="state.newSongs"></newSongs>

		<!-- menu -->
		<menuLeft />


	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		reactive
	} from 'vue';
	import {
		apiGetBanner,
		apiGetBall,
		apiGetRecommendList,
		apiGetNewSongs
	} from '@/api/index.js';
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const state = reactive({
		banners: [],
		balls: [],
		songList: [],
		newSongs: []
	});

	onLoad(() => {
		getBanner();
		getBall();
		getRecommendList();
		getNewSongs();
	})
	const getBanner = () => {
		apiGetBanner({
			type: 2
		}).then((res) => {
			state.banners = res.data.banners;
		});
	};

	const getBall = () => {
		apiGetBall().then(res => {
			// console.log(res)
			state.balls = res.data.data;
		})
	}

	const getRecommendList = () => {
		apiGetRecommendList().then(res => {
			// console.log(res)
			state.songList = res.data.recommend
		})
	}

	const getNewSongs = () => {
		apiGetNewSongs().then(res => {
			// console.log(res)
			state.newSongs = res.data.data.dailySongs
		})
	}
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