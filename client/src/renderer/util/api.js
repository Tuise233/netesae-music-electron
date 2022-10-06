import axios from 'axios';

const apiUrl = "http://localhost:3000";

//创建请求实例
const api = axios.create({
    timeout: 60000
});

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



export default api;