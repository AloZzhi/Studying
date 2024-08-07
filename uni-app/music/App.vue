<script>
	import {
		baseUrl
	} from '@/api/index.js'

	export default {
		onLaunch: function() {
			// 拿到用户的id
			// console.log('App Launch')
			let key = uni.getStorageSync('cookie')
			if (!key) {
				this.$store.commit('changeIsLogin', false)
				return
			}

			// 获取登录状态
			uni.request({
				url: `${baseUrl}/login/status`,
				data: {
					cookie: key
				},
				success: (res) => {
					console.log(res.data.data.account.id);
					let id = res.data.data.account.id
					if (id) {
						this.$store.commit('changeIsLogin', true)
						// 获取账号信息
						this.getUser(key)
					}
				}
			})


		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getUser(key) {
				if (!key) return
				uni.request({
					url: `${baseUrl}/user/account`,
					data: {
						cookie: key
					},
					success: (res) => {
						console.log(res);
						let nickname = res.data.profile && res.data.profile.nickname
						let id = res.data.profile && res.data.profile.userId
						let avatar = res.data.profile && res.data.profile.avatarUrl
						this.$store.commit('getUserInfo', {
							nickname,
							id,
							avatar
						})
					}
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "@/static/iconfont.css";
</style>