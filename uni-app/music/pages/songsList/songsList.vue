<template>
	<view class="songs-list">
		<!-- #ifndef  H5 -->
		<view class="head"></view>
		<!-- #endif -->
		<view class="header">
			<uni-icons type="left" size="22" color="#fff" @click="goBack"></uni-icons>
			<view class="title">歌单</view>
			<uni-icons type="more-filled" size="22" color="#fff"></uni-icons>
		</view>

		<view class="list-hd">
			<view class="hd-info">
				<view class="pic boxShadow">
					<image :src="info.coverImgUrl" mode="aspectFill"></image>
				</view>
				<view class="desc">
					<view class="title">{{ info.name }}</view>
					<view class="user">
						<view class="avatar">
							<image :src="info.creator && info.creator.avatarUrl" mode="aspectFill"></image>
						</view>
						<view class="nickname">{{ info.creator && info.creator.nickname }}</view>
						<uni-icons type="right" size="15" color="#fff"></uni-icons>
					</view>
				</view>
			</view>
			<view class="hd-status">
				<view class="share btn">
					<uni-icons type="redo" size="20" color="#fff"></uni-icons>
					<text>{{ info.shareCount }}</text>
				</view>
				<view class="commit btn">
					<uni-icons type="chat" size="20" color="#fff"></uni-icons>
					<text>评论</text>
				</view>
				<view class="collection btn">
					<uni-icons type="download" size="20" color="#fff"></uni-icons>
					<text>{{ info.subscribedCount }}</text>
				</view>
			</view>
		</view>
		<view class="list-bd">
			<view class="bd-title">
				<uni-icons type="headphones" size="26" color="#d81e06"></uni-icons>
				<text>全部播放</text>
				<text class="count">（{{ info.trackCount }}）</text>
			</view>
			<view class="bd-content">
				<view class="item" @click="showPlayer(song.id)" v-for="(song, index) in list" :key="song.id">
					<view class="num">{{ index + 1 }}</view>
					<view class="song-desc">
						<view class="name">{{ song.name }}</view>
						<view class="author">
							<text v-for="(item, i) in song.ar" :key="item.id">
								{{ item.name }}
								<text v-if="i !== song.ar.length - 1">/</text>
							</text>
							<text>- {{ song.al && song.al.name }}</text>
						</view>
					</view>
					<view class="iconfont icon-more"></view>
				</view>
			</view>
		</view>

		<!-- 播放器 -->
		<musicPlayer></musicPlayer>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		apiGetPlayListInfo,
		apiGetPlayList
	} from '@/api/index.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useStore
	} from 'vuex'

	const info = ref({})
	const list = ref([])
	const store = useStore()

	onLoad((option) => { // option 路由上的参数
		// console.log(option);
		getPlayListInfo(option.id)
		getPlayList(option.id)
	})


	const getPlayListInfo = (id) => {
		apiGetPlayListInfo(id).then(res => {
			info.value = res.data.playlist
		})
	}
	const getPlayList = (id) => {
		apiGetPlayList(id).then(res => {
			list.value = res.data.songs
		})
	}

	const goBack = () => {
		// uni.navigateBack()
		uni.switchTab({
			url: '/pages/my/my' // 确保路径正确，路径应该是 tabBar 的路径
		});
	}

	// const goBack = () => {
	// 	uni.navigateBack({
	// 		url: `/pages/my/my`
	// 	})
	// }

	const showPlayer = (id) => {
		// 展示播放器
		// 记录要播放的歌曲的id
		store.commit('changeIsShowPlayer', true)
		store.commit('changeCurrentPlayId', id)
	}
</script>

<style lang="scss">
	.songs-list {

		// height: 100%;
		// overflow: scroll;
		.head {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 80rpx;
			background-color: #fff;
			z-index: 9999;
		}

		.header {
			height: 100rpx;
			width: 100%;
			position: fixed;
			// #ifndef H5
			top: 80rpx;
			// #endif
			// #ifdef H5
			top: 0;
			// #endif
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 15rpx;
			box-sizing: border-box;
			color: #fff;
			background-color: #588b77;
			z-index: 999;
		}

		.list-hd {
			background: linear-gradient(to bottom, #588b77, #79af9a);
			padding: 100rpx 30rpx 40rpx;

			.hd-info {
				display: flex;
				margin-top: 20rpx;

				.pic {
					width: 160rpx;
					height: 160rpx;
					box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);

					image {
						width: 100%;
						height: 100%;
						border-radius: 8px;
					}
				}

				.desc {
					margin-left: 20rpx;
					color: #fff;

					.user {
						display: flex;
						align-items: center;
						margin-top: 10rpx;

						.avatar {
							width: 50rpx;
							height: 50rpx;

							image {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}

						.nickname {
							margin: 0 10rpx;
							font-size: 24rpx;
						}
					}
				}
			}

			.hd-status {
				display: flex;
				margin-top: 70rpx;

				.btn {
					flex: 1;
					text-align: center;
					background-color: rgba(255, 255, 255, 0.3);
					color: #fff;
					border-radius: 50rpx;
					padding: 10rpx 0;
					font-size: 28rpx;
					margin: 0 10rpx;
				}
			}
		}

		.list-bd {
			background-color: #fff;
			padding: 0 30rpx;
			position: relative;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			top: -20rpx;

			// overflow: hidden;
			.bd-title {
				display: flex;
				align-items: center;
				padding: 30rpx 0;
				position: -webkit-sticky;
				position: sticky;
				top: 100rpx;
				background-color: #fff;

				.uni-icons {
					margin-right: 10rpx;
				}

				.count {
					font-size: 20rpx;
				}
			}

			.bd-content {
				.item {
					display: flex;
					align-items: center;
					margin-bottom: 40rpx;

					.num {
						flex: 0 0 50rpx;
						color: #8b8f9b;
					}

					.icon-more {
						flex: 0 0 30rpx;
						color: #8b8f9b;
						font-size: 40rpx;
						font-weight: bold;
					}

					.song-desc {
						flex: 1;

						.name {
							font-size: 28rpx;
						}

						.author {
							font-size: 20rpx;
							color: #8b8f9b;
							margin-top: 4rpx;
						}
					}
				}
			}
		}
	}
</style>