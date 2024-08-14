export const baseUrl = process.env.NODE_ENV ===
	'development' ?
	'http://172.22.111.140:3000' :
	'http://172.22.111.140:3000';

// 首页 banner
export const apiGetBanner = (data) => {
	return uni.request({
		url: `${baseUrl}/banner`,
		method: 'GET',
		data,
	});
};

// balls
export const apiGetBall = (data) => {
	return uni.request({
		url: `${baseUrl}/homepage/dragon/ball`,
		method: 'GET',
		data,
	});
};

//推荐歌单
export const apiGetRecommendList = (data) => {
	return uni.request({
		url: `${baseUrl}/recommend/resource`,
		method: 'GET',
		data: data,
	});
};


//获取新歌
export const apiGetNewSongs = (data) => {
	return uni.request({
		url: `${baseUrl}/recommend/songs`,
		method: 'GET',
		data
	});
};

//获取用户详情
export const apiGetUserInfo = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/detail`,
		method: 'GET',
		data: {
			uid
		},
	});
};

//获取用户歌单

export const apiGetUserSongsList = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/playlist`,
		method: 'GET',
		data: {
			uid: uid
		},
	});
};

// 获取歌单详情
export const apiGetPlayListInfo = (id) => {
	return uni.request({
		url: baseUrl + '/playlist/detail',
		method: "GET",
		data: {
			id: id
		}
	})
}

// 获取歌单列表
export const apiGetPlayList = (id, limit, offset) => {
	return uni.request({
		url: baseUrl + '/playlist/track/all',
		method: "GET",
		data: {
			id: id,
			limit,
			offset
		}
	})
}

//获取歌曲资源
export const apiGetSongUrl = (id) => {
	return uni.request({
		url: baseUrl + '/song/url/v1',
		method: "GET",
		data: {
			id: id,
			level: 'jymaster'
		}
	})
}

//获取歌曲详情
export const apiGetSongDetail = (id) => {
	return uni.request({
		url: baseUrl + '/song/detail',
		method: "GET",
		data: {
			ids: id,

		}
	})
}