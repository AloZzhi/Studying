<template>
	<view class="search">
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="search-search">
					<uni-search-bar placeholder="歌曲"></uni-search-bar>
				</view>
				<view class="search-history">
					<view class="search-history-head">
						<text>历史记录</text>
						<image src="../../static/images/lajitong.png" mode=""></image>
					</view>
					<view class="search-history-list">
						<view>
							Love Story
						</view>
						<view>
							测试歌曲。。。
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>