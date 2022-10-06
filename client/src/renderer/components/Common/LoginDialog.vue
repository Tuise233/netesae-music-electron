<template>
  <div class="app-logindialog">
    <div class="app-logindialog-navbar" style="-webkit-app-region: drag;">
        <img src="@/assets/img/common/close.png" @click="closeDialog" style="-webkit-app-region: no-drag;">
    </div>
    <img src="@/assets/img/common/logo.png">

    <div class="app-logindialog-group" v-if="type == 'loginCaptcha'">
        <el-input v-model="phone" placeholder="请输入手机号" style="width: 255px;" prefix-icon="el-icon-mobile-phone"></el-input>
        <el-input v-model="password" placeholder="请输入验证码" style="width: 255px; margin-top: 10px;" prefix-icon="el-icon-key">
            <el-button slot="append" @click="sendVerify">{{ verifyText }}</el-button>
        </el-input>
        <div style="width: 255px; display: flex; margin-top: 10px;">
            <span style="margin-left: 0; margin-right: auto; color: red; font-size: 12px; width: 130px; white-space: nowrap;">{{ tipText }}</span>
            <span style="margin-left: auto; margin-right: 0; color: rgb(12, 115, 194); cursor: pointer; font-size: 12px;" @click="toggleLoginFunc('loginPwd')">密码登录</span>
        </div>
    </div>

    <div class="app-logindialog-group" v-if="type == 'loginPwd'">
        <el-input v-model="phone" placeholder="请输入手机号" style="width: 255px;" prefix-icon="el-icon-mobile-phone"></el-input>
        <el-input v-model="password" placeholder="请输入密码" style="width: 255px; margin-top: 10px;" prefix-icon="el-icon-key"></el-input>
        <div style="width: 255px; display: flex; margin-top: 10px;">
            <span style="margin-left: 0; margin-right: auto; color: red; font-size: 12px;">{{ tipText }}</span>
            <span style="margin-left: auto; margin-right: 0; color: rgb(12, 115, 194); cursor: pointer; font-size: 12px;" @click="toggleLoginFunc('loginCaptcha')">验证码登录</span>
        </div>
    </div>

    <div class="app-logindialog-login" v-if="type == 'loginCaptcha' || type == 'loginPwd'">
        <el-button type="danger" style="width: 255px;" @click="login">登录</el-button>
    </div>

  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
import api from '@/util/api';

export default {
    data() {
        return {
            phone: "",
            password: "",
            verify: "",
            verifyText: "获取验证码",
            type: 'loginCaptcha', // loginPwd loginCaptcha
            tipText: ""
        }
    },

    methods: {
        sendTip(text){
            this.tipText = text;
            setTimeout(() => {
                this.tipText = "";
            }, 5000);
        },

        toggleLoginFunc(type){
            this.type = type;
        },

        closeDialog(){
            ipcRenderer.send("loginDialog:close");
        },

        sendVerify(){
            if(this.verifyText == "获取验证码"){
                api.sendVerify(this.phone);
                this.verifyText = "已发送验证码";
                setTimeout(() => {
                    this.verifyText = "获取验证码";
                }, 60000);
            }
        },

        login(){
            switch(this.type){
                case "loginPwd":{
                    this.loginByPassword();
                    break;
                }

                case "loginCaptcha":{
                    this.loginByCaptcha();
                    break;
                }
            }
        },

        loginByPassword(){
            if(this.phone == "" || this.password == ""){
                this.sendTip("请输入手机号与密码");
                return;
            }

            api.isPhoneExist(this.phone).then((res) => {
                if(res.exist == -1){
                    this.sendTip("该手机未注册");
                    return;
                }

                //登录帐号
                api.loginByPassword(this.phone, this.password).then((res) => {
                    switch(res.code){
                        case 502:{
                            this.sendTip(res.message);
                            break;
                        }

                        case 200:{
                            //登陆成功
                            this.$store.dispatch("setLoginState", true);
                            this.$store.dispatch("setUserInfo", {
                                cookie: res.cookie,
                                profile: res.profile,
                                token: res.token                                
                            });
                            break;
                        }
                    }
                });
            });
        },
        
        loginByCaptcha(){
            if(this.phone == "" || this.password == ""){
                this.sendTip("请输入手机号与密码");
                return;
            }

            api.isPhoneExist(this.phone).then((res) => {
                if(res.exist == -1){
                    this.sendTip("该手机未注册");
                    return;
                }

                //登录帐号
                api.loginByCaptcha(this.phone, this.password).then((res) => {
                    switch(res.code){
                        case 503:
                        case 502:{
                            this.sendTip(res.message);
                            break;
                        }

                        case 200:{
                            //登陆成功
                            this.$store.dispatch("setLoginState", true);
                            this.$store.dispatch("setUserInfo", {
                                cookie: res.cookie,
                                profile: res.profile,
                                token: res.token                                
                            });
                            ipcRenderer.send("loginDialog:close");
                            break;
                        }
                    }
                });
            });
        }
    },
}
</script>

<style>
.app-logindialog{
    width: 350px;
    height: 420px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background-color: white;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

.app-logindialog img:nth-child(2){
    width: 60px;
    height: 60px;
    margin-top: 30px;
}

.app-logindialog-navbar{
    width: 100%;
    display: flex;
}

.app-logindialog-navbar img{
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
}

.app-logindialog-group{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
}

.app-logindialog-login{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

/* 
.app-logindialog-option-group{
    width: 255px;
    margin-top: 10px;
    display: flex;
}

.app-logindialog-option-group span{
    margin-left: auto;
    margin-right: 0;
    font-size: 12px;
    color: rgb(12, 115, 194);
    cursor: pointer;
} */
</style>