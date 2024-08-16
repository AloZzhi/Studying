<template>
	<view class="container">
		<image :src="song.cover" class="background" mode="aspectFill" />
		<view class="overlay">
			<view class="header">
				<button @click="goBack" class="back-button">
					<uni-icons type="left" size="22" color="#134567"></uni-icons>
				</button>
			</view>
			<image :src="song.cover" class="cover" mode="aspectFill" />
			<view class="song-info">
				<text class="song-title">{{ song.name }}</text>
				<text class="song-artist">{{ song.artist }}</text>
			</view>
			<view class="controls">
				<button @click="onPrevious" class="control-button">上一曲</button>
				<button @click="togglePlay" class="play-button">{{ isPlaying ? '暂停' : '播放' }}</button>
				<button @click="onNext" class="control-button">下一曲</button>
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

	// 组件的 props
	const props = defineProps({
		id: Number
	});

	// 响应式数据
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
	const router = useRouter(); // 使用 Vue Router

	// 组件生命周期钩子
	onMounted(() => {
		if (props.id) {
			song.value.id = props.id;
			fetchSongDetails(song.value.id); // 获取歌曲详情
			initAudio(); // 初始化音频上下文
		}
	});

	onUnmounted(() => {
		if (audioContext) {
			audioContext.destroy();
		}
	});

	// 方法定义
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
		audioContext.src = `https://example.com/music/${song.value.id}.mp3`; // 替换为实际的音频源
		audioContext.onPlay(() => {
			isPlaying.value = true;
		});
		audioContext.onPause(() => {
			isPlaying.value = false;
		});
		audioContext.onEnded(() => {
			isPlaying.value = false;
			onNext(); // 播放下一曲
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
		currentSongIndex.value = (currentSongIndex.value + 1) % songList.value.length;
		loadSong(songList.value[currentSongIndex.value].id);
		audioContext.src = `https://example.com/music/${song.value.id}.mp3`;
		audioContext.play();
	};

	const onPrevious = () => {
		currentSongIndex.value = (currentSongIndex.value - 1 + songList.value.length) % songList.value.length;
		loadSong(songList.value[currentSongIndex.value].id);
		audioContext.src = `https://example.com/music/${song.value.id}.mp3`;
		audioContext.play();
	};

	const seek = (event) => {
		const value = event.detail.value;
		audioContext.seek(value); // 跳转到指定时间
	};

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
	};

	// 返回上一页
	const goBack = () => {
		router.back(); // 使用 Vue Router 返回上一页
	};
</script>


<style lang="scss">
	.container {
		position: relative;
		height: 100vh;
		overflow: hidden;
		background-color: #f8f8f8;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(15px);
		z-index: 1;
	}

	.overlay {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.cover {
		width: 300px;
		height: 300px;
		border-radius: 10px;
		margin-bottom: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.song-info {
		text-align: center;
		color: #333;
	}

	.song-title {
		font-size: 26px;
		font-weight: bold;
	}

	.song-artist {
		font-size: 20px;
		color: #666;
	}

	.controls {
		margin: 20px 0;
		display: flex;
		justify-content: center;
	}

	.control-button,
	.play-button {
		margin: 0 10px;
		padding: 10px 20px;
		border: none;
		border-radius: 25px;
		font-size: 16px;
		color: white;
	}

	.control-button {
		background-color: #3e3e3e;
	}

	.control-button:hover {
		background-color: #5a5a5a;
	}

	.play-button {
		background-color: #1db954;
	}

	.play-button:hover {
		background-color: #1aa34a;
	}

	.progress-bar {
		width: 90%;
		display: flex;
		align-items: center;
	}

	.time {
		color: #333;
	}

	.lyrics {
		margin-top: 20px;
		color: #333;
		text-align: center;
	}

	.lyric {
		margin: 2px 0;
		font-size: 16px;
	}

	.header {
		position: absolute;
		top: 10px;
		left: 10px;
		display: flex;
		align-items: center;
	}

	.back-button {
		background: none;
		border: none;
		cursor: pointer;

	}

	.back-icon {
		width: 24px;
		height: 24px;
	}
</style>