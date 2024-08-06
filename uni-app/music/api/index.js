const baseUrl = process.env.NODE_ENV ===
	'development' ?
	'http://localhost:3000' :
	'http://localhost:3000';

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
		data: data,
	});
};