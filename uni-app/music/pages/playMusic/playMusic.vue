<template>

	<view class="container">
		<image :src="song.cover" class="background" mode="aspectFill" />
		<view class="overlay">
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
				<slider value="{{ currentTime }}" max="{{ duration }}" @change="seek" />
				<text class="time">{{ formatTime(duration) }}</text>
			</view>
			<view class="lyrics">
				<text v-for="(line, index) in lyrics" :key="index" class="lyric">{{ line }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				song: {
					id: null,
					name: '示例歌曲',
					artist: '示例歌手',
					cover: 'https://example.com/cover.jpg', // 替换为实际封面
				},
				isPlaying: false,
				currentTime: 0,
				duration: 0,
				lyrics: [
					"这是第一句歌词",
					"这是第二句歌词",
					"这是第三句歌词",
					"这是第四句歌词",
					// 更多歌词
				],
				audioContext: null,
			};
		},
		onLoad(options) {
			this.song.id = options.id; // 获取传递的歌曲ID
			this.fetchSongDetails(this.song.id); // 获取歌曲详情
			this.initAudio(); // 初始化音频上下文
		},
		methods: {
			async fetchSongDetails(id) {
				// 模拟获取歌曲详情的 API 调用
				const response = await this.getSongDetail(id);
				if (response) {
					this.song = {
						id: response.id,
						name: response.name,
						artist: response.artist,
						cover: response.cover,
					};
				}
			},
			getSongDetail(id) {
				// 这里可以使用真实的API调用获取歌曲信息
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve({
							id: id,
							name: '示例歌曲',
							artist: '示例歌手',
							cover: 'https://example.com/cover.jpg',
						});
					}, 1000);
				});
			},
			initAudio() {
				// 初始化音频上下文
				this.audioContext = uni.createInnerAudioContext();
				this.audioContext.src = `https://example.com/music/${this.song.id}.mp3`; // 替换为实际的音频源
				this.audioContext.onPlay(() => {
					this.isPlaying = true;
				});
				this.audioContext.onPause(() => {
					this.isPlaying = false;
				});
				this.audioContext.onEnded(() => {
					this.isPlaying = false;
					this.onNext(); // 播放下一曲
				});
				this.audioContext.onTimeUpdate(() => {
					this.currentTime = this.audioContext.currentTime;
					this.duration = this.audioContext.duration || 0;
				});
			},
			togglePlay() {
				if (this.isPlaying) {
					this.audioContext.pause();
				} else {
					this.audioContext.play();
				}
			},
			onNext() {
				// 这里可以实现下一曲的逻辑
				console.log('播放下一曲');
			},
			onPrevious() {
				// 这里可以实现上一曲的逻辑
				console.log('播放上一曲');
			},
			seek(event) {
				const value = event.detail.value;
				this.audioContext.seek(value); // 跳转到指定时间
			},
			formatTime(seconds) {
				const minutes = Math.floor(seconds / 60);
				const secs = Math.floor(seconds % 60);
				return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
			},
		},
		onUnload() {
			// 清理音频上下文
			if (this.audioContext) {
				this.audioContext.destroy();
			}
		},
	};
</script>

<style lang="scss">
	.container {
		position: relative;
		height: 100vh;
		overflow: hidden;
		background-color: #f8f8f8;
		/* 浅色背景 */
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
		/* 半透明白色背景 */
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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
		/* 深色字体 */
	}

	.song-title {
		font-size: 26px;
		font-weight: bold;
	}

	.song-artist {
		font-size: 20px;
		color: #666;
		/* 较浅的艺术家颜色 */
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
		/* 控制按钮颜色 */
	}

	.control-button:hover {
		background-color: #5a5a5a;
		/* 控制按钮悬停效果 */
	}

	.play-button {
		background-color: #1db954;
		/* 播放按钮颜色 */
	}

	.play-button:hover {
		background-color: #1aa34a;
		/* 播放按钮悬停效果 */
	}

	.progress-bar {
		width: 90%;
		display: flex;
		align-items: center;
	}

	.time {
		color: #333;
		/* 深色时间字体 */
	}

	.lyrics {
		margin-top: 20px;
		color: #333;
		/* 深色歌词 */
		text-align: center;
	}

	.lyric {
		margin: 2px 0;
		font-size: 16px;
	}
</style>