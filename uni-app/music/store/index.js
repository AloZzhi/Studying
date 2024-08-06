import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		isShowMenu: false,
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag
		}

	}
})