import axios from 'axios';

const apiUrl = "http://localhost:3000";

//创建请求实例
const api = axios.create({
    timeout: 60000
});

export default api;

//响应拦截器
api.interceptors.response.use(response => {
    return response;
}, (error) => {
    return error.response;
});


/*** APIs */

//判断手机是否注册
api.isPhoneExist = async(phone) => {
    let { data } = await api.get(apiUrl + `/cellphone/existence/check?phone=${phone}`);
    return data;
};

//密码登录
api.loginByPassword = async(phone, password) => {
    console.log(phone, password);
    let { data } = await api.get(apiUrl + `/login/cellphone?phone=${phone}&password=${password}`);
    return data;
};

//验证码登录
api.loginByCaptcha = async(phone, captcha) => {
    let { data } = await api.get(apiUrl + `/login/cellphone?phone=${phone}&captcha=${captcha}`);
    return data;
}

//发送手机验证码
api.sendVerify = async(phone) => {
    await api.get(apiUrl + `/captcha/sent?phone=${phone}`);
};

//退出登录
api.logOut = async() => {
    await api.get(apiUrl + `/logout`);
};

//获取轮播图
api.getBannerList = async() => {
    let { data } = await api.get(apiUrl + "/banner?type=0");
    return data;
}

//获取推荐歌单
api.getRecommandSongList = async() => {
    let { data } = await api.get(apiUrl + "/personalized?limit=10");
    return data;
}

//获取我的歌单
api.getMyList = async(uid) => {
    let { data } = await api.get(apiUrl + `/user/playlist?uid=${uid}`);
    return data;
}

//获取歌单具体详情
api.getSongListDetail = async(id) => {
    let { data } = await api.get(apiUrl + `/playlist/track/all?id=${id}`);
    return data;
};

//获取歌曲播放链接
api.getSongPlayUrl = async(id) => {
    let { data } = await api.get(apiUrl + `/song/url?id=${id}`);
    return data;
}