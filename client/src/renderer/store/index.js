import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron';

//import modules from './modules'

Vue.use(Vuex)

const defaultState = {
  userInfo: {
    username: "",
    userAvatar: "",
    cookie: "",
    profile: {},
    token: ""
  },

  common: {
    
  }
};

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production',

  state: defaultState,

  mutations: {
    setLoginState(self, data){
      this.state.userInfo.isLogin = data.state;
    },

    setUserInfo(self, data){
      this.state.userInfo.cookie = data.cookie;
      this.state.userInfo.profile = data.profile;
      this.state.userInfo.token = data.token;
      this.state.userInfo.username = data.profile.nickname;
      this.state.userInfo.userAvatar = data.profile.avatarUrl;
    },

    clearCache(){
      this.replaceState(defaultState);
    }
  },

  actions: {
    setLoginState({commit}, data){
      commit("setLoginState", data);
    },

    setUserInfo({commit}, data){
      commit("setUserInfo", data);
    },

    clearCache({commit}){
      commit("clearCache");
    }
  }
})
