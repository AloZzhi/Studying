<template>
	<view class="container">
		<image :src="song.cover" class="background" mode="aspectFill" />
		<view class="overlay">
			<view class="header">
				<button @click="goBack" class="back-button">
					<uni-icons type="left" size="22" color="#ffffff"></uni-icons>
				</button>
			</view>
			<image :src="song.cover" class="cover" mode="aspectFill" />
			<view class="song-info">
				<text class="song-title">{{ song.name }}</text>
				<text class="song-artist">{{ song.artist }}</text>
			</view>
			<view class="controls">
				<button @click="onPrevious" class="control-button" style="margin: 20rpx;">
					<image src="../../static/images/music_previous.png" mode="aspectFill"
						style="width: 120px; height: 120px;" />
				</button>
				<button @click="togglePlay" class="play-button" style="margin: 20rpx;">
					<image
						:src="isPlaying ? '../../static/images/music_pause.png' : '../../static/images/music_play.png'"
						mode="aspectFill" style="width: 100px; height: 100px;" />
				</button>
				<button @click="onNext" class="control-button" style="margin: 20rpx;">
					<image src="../../static/images/music_next.png" mode="aspectFill"
						style="width: 120px; height: 120px;" />
				</button>
			</view>
			<view class="progress-bar">
				<text class="time">{{ formatTime(currentTime) }}</text>
				<slider v-model:value="currentTime" :max="duration" @change="seek" />
				<text class="time">{{ formatTime(duration) }}</text>
			</view>
			<view class="lyrics">
				<text v-for="(line, index) in lyrics" :key="index" class="lyric">{{ line }}</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		ref,
		onMounted,
		onUnmounted
	} from 'vue';
	import {
		useRouter
	} from 'vue-router';

	const props = defineProps({
		id: Number
	});

	const song = ref({
		id: null,
		name: '示例歌曲',
		artist: '示例歌手',
		cover: 'https://example.com/cover.jpg',
	});
	const isPlaying = ref(false);
	const currentTime = ref(0);
	const duration = ref(0);
	const lyrics = ref([
		"这是第一句歌词",
		"这是第二句歌词",
		"这是第三句歌词",
	]);

	let audioContext = null;
	const router = useRouter();

	onMounted(() => {
		if (props.id) {
			song.value.id = props.id;
			fetchSongDetails(song.value.id);
			initAudio();
		}
	});

	onUnmounted(() => {
		if (audioContext) {
			audioContext.destroy();
		}
	});

	const fetchSongDetails = async (id) => {
		const response = await getSongDetail(id);
		if (response) {
			song.value = {
				id: response.id,
				name: response.name,
				artist: response.artist,
				cover: response.cover,
			};
		}
	};

	const getSongDetail = (id) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					id: id,
					name: '歌名',
					artist: '歌手',
					cover: 'https://wx2.sinaimg.cn/large/002I0yDzly1hmxpe748o2j60u00k0gqe02.jpg',
				});
			}, 1000);
		});
	};

	const initAudio = () => {
		audioContext = uni.createInnerAudioContext();
		audioContext.src = `https://example.com/music/${song.value.id}.mp3`;
		audioContext.onPlay(() => {
			isPlaying.value = true;
		});
		audioContext.onPause(() => {
			isPlaying.value = false;
		});
		audioContext.onEnded(() => {
			isPlaying.value = false;
			onNext();
		});
		audioContext.onTimeUpdate(() => {
			currentTime.value = audioContext.currentTime;
			duration.value = audioContext.duration || 0;
		});
	};

	const togglePlay = () => {
		if (isPlaying.value) {
			audioContext.pause();
		} else {
			audioContext.play();
		}
	};

	const onNext = () => {
		// Load next song logic
	};

	const onPrevious = () => {
		// Load previous song logic
	};

	const seek = (event) => {
		const value = event.detail.value;
		audioContext.seek(value);
	};

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
	};

	const goBack = () => {
		router.back();
	};
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(to bottom, #1c1c1c, #3a3a3a);
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(20px);
		opacity: 0.4;
	}

	.overlay {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.cover {
		width: 280px;
		height: 280px;
		border-radius: 50%;
		margin-bottom: 20px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
	}

	.song-info {
		text-align: center;
		color: #ffffff;
	}

	.song-title {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.song-artist {
		font-size: 22px;
		color: #dddddd;
	}

	.controls {
		margin: 30px 0;
		display: flex;
		justify-content: center;
	}

	.control-button,
	.play-button {
		width: 60px;
		height: 60px;
		border: none;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;
		transition: background-color 0.3s;

	}

	.control-button {
		background-color: #3e3e3e;

	}

	.control-button:hover {
		background-color: #5a5a5a;
	}

	.play-button {
		background-color: #e64340;
	}

	.play-button:hover {
		background-color: #e64340;
	}

	.progress-bar {
		width: 80%;
		display: flex;
		align-items: center;
		color: #ffffff;
	}

	.time {
		font-size: 16px;
		margin: 0 10px;
	}

	.lyrics {
		margin-top: 20px;
		color: #ffffff;
		text-align: center;
		max-height: 200px;
		overflow-y: auto;
	}

	.lyric {
		margin: 4px 0;
		font-size: 18px;
		line-height: 24px;
	}

	.header {
		position: absolute;
		top: 20px;
		left: 20px;
		display: flex;
		align-items: center;
	}

	.back-button {
		background: none;
		border: none;
		cursor: pointer;
		color: #ffffff;
	}
</style>