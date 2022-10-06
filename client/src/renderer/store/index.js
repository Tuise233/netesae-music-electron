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
    token: "",
    account: {}
  },

  common: {
    activePage: "findMusic",

    songList: {
      myList: []
    }
  },
};

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: false,

  state: defaultState,

  mutations: {
    setUserInfo(self, data){
      this.state.userInfo.cookie = data.cookie;
      this.state.userInfo.profile = data.profile;
      this.state.userInfo.account = data.account;
      this.state.userInfo.token = data.token;
      this.state.userInfo.username = data.profile.nickname;
      this.state.userInfo.userAvatar = data.profile.avatarUrl;
    },

    clearCache(){
      this.replaceState(defaultState);
    },

    toggleActivePage(self, data){
      this.state.common.activePage = data.id;
    },
    
    setMyList(self, data){
      this.state.common.songList.myList = data.myList;
      this.state.common.songList.myList.forEach(item => {
        item.active = false;
      });
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
    },

    toggleActivePage({commit}, data){
      commit("toggleActivePage", data);
    },

    setMyList({commit}, data){
      commit("setMyList", data);
    }
  }
})
