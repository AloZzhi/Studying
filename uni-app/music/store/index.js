import {
	createStore
} from 'vuex';

export default createStore({
	state: {
		isShowMenu: false, // 菜单的显示隐藏
		isLogin: false, // 用户是否登录
		userInfo: {}, // 用户信息
		isShowPlayer: true,
		currentPlayId: null,
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag;
		},
		changeIsLogin(state, val) {
			state.isLogin = val;
		},
		getUserInfo(state, obj) {
			state.userInfo = obj;
		},
		changeIsShowPlayer(state, flag) {
			state.isShowPlayer = flag;
		},
		changeCurrentPlayId(state, id) {
			state.currentPlayId = id;
		},
	},
});