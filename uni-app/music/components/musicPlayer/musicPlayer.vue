<template>
	<view class="player" v-if="store.state.isShowPlayer" @click="goPlayMusic">
		<view class="mini-player">
			<view class="pic">
				<image :src="state.pic"></image>
			</view>
			<view class="song">
				<text class="name">{{ state.name }}</text>
				<text class="author">- {{ state.author }}</text>
			</view>
			<view class="player-control">
				<uni-icons custom-prefix="iconfont" type="icon-bofang" size="22"></uni-icons>
				<uni-icons type="list" size="22"></uni-icons>
			</view>
		</view>
		<view class="max-player"></view>
	</view>
</template>

<script setup>
	import {
		apiGetSongUrl,
		apiGetSongDetail
	} from '@/api/index.js';
	import {
		reactive,
		watch
	} from 'vue';
	import {
		useStore
	} from 'vuex';

	const store = useStore();
	defineProps({
		bottom: {
			type: String,
			default: '0rpx'
		}
	});

	const state = reactive({
		url: '',
		name: '',
		author: '',
		time: '',
		pic: '',
		method: 'pause'
	});

	// 播放器
	let innerAudioContext = uni.createInnerAudioContext()
	const getSongUrl = async (id) => {
		innerAudioContext.destroy()
		const res = await apiGetSongUrl(id)
		console.log(res.data.data);
		console.log(id);
		state.url = res.data.data[0].url
		// 创建播放器
		innerAudioContext = uni.createInnerAudioContext()
		innerAudioContext.autoplay = true
		innerAudioContext.src = state.url
		innerAudioContext.onPlay(() => {
			console.log('开始播放');
		})
		innerAudioContext.onError((err) => {
			console.log(err);
		})
	};
	const getSongDetail = async (id) => {
		const res = await apiGetSongDetail(id)
		// console.log(res.data.songs);
		state.name = res.data.songs[0].al.name
		state.pic = res.data.songs[0].al.picUrl
		state.time = res.data.songs[0].dt
		state.author = res.data.songs[0].ar.map((item) => item.name).join('/')
	}
	watch(
		() => store.state.currentPlayId,
		async (newVal, oldVal) => {
			getSongUrl(newVal);
			getSongDetail(newVal);
		}
	);


	//去播放页
	const goPlayMusic = async (id) => {
		const res = await apiGetSongDetail(id)
		console.log(res.data);
		uni.navigateTo({
			url: `/pages/playMusic/playMusic?id=${id}`
		})
	}
</script>

<style lang="scss">
	.player {
		position: fixed;
		bottom: v-bind(bottom);
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		box-shadow: 0 -6rpx 10rpx #eee;

		.mini-player {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 30rpx;

			.pic {
				flex: 0 0 80rpx;
				width: 80rpx;
				height: 80rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					border: 10rpx solid #000;
					box-sizing: border-box;
				}
			}

			.song {
				flex: 1;
				margin: 0 20rpx;

				.name {
					font-size: 28rpx;
					color: #333;
				}

				.author {
					font-size: 26rpx;
					color: #999;
				}
			}

			.player-control {
				flex: 0 0 100rpx;
				display: flex;
				justify-content: space-between;

				.iconfont {
					font-weight: bold;
					font-size: 36rpx;
				}

				.icon-bofanganniu {
					width: 40rpx;
					height: 40rpx;
					border: 1px solid #aaa;
					border-radius: 50%;
					position: relative;

					&::before {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
</style>