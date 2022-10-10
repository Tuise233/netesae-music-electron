import Vue from 'vue'
import Vuex from 'vuex'
import api from "../util/api";

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

    myList: [],
    currentMyList: {},

    songList: [],
    currentSongList: {},

    currentSong: {
      name: "",
      imageUrl: "",
      description: "",
      author: "",
      url: "",
      isPlay: false,
      startTime: "00:00",
      endTime: "00:00"
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
    setUserInfo(self, data) {
      this.state.userInfo.cookie = data.cookie;
      this.state.userInfo.profile = data.profile;
      this.state.userInfo.account = data.account;
      this.state.userInfo.token = data.token;
      this.state.userInfo.username = data.profile.nickname;
      this.state.userInfo.userAvatar = data.profile.avatarUrl;
    },

    clearCache() {
      this.replaceState(defaultState);
    },

    toggleActivePage(self, data) {
      if (data.type == "self") {
        switch (data.id) {
          case "favoriteMusic": {

            break;
          }

          case "local": {

            break;
          }

          case "recent": {

            break;
          }

          default: {
            for (let i = 0; i < this.state.common.myList.length; i++) {
              if (this.state.common.myList[i].id == data.id) {
                this.state.common.currentMyList = this.state.common.myList[i];

                //判断是否存在歌单
                let exist = false;
                for (let j = 0; j < this.state.common.songList.length; j++) {
                  if (this.state.common.songList[j].id == this.state.common.currentMyList.id) {
                    exist = true;
                    this.state.common.currentSongList = this.state.common.songList[j];
                    break;
                  }
                }

                //如果不存在 则获取歌单详情
                api.getSongListDetail(this.state.common.currentMyList.id).then((res) => {
                  let item = {
                    id: this.state.common.currentMyList.id,
                    songs: res.songs
                  };
                  this.state.common.songList.push(item);
                  this.state.common.currentSongList = item;
                });
                break;
              }
            }
            this.state.common.activePage = "songList";
            break;
          }
        }
      } else if (data.type == "system") {
        this.state.common.activePage = data.id;
      }
    },

    setMyList(self, data) {
      data.myList.forEach(item => {
        item.active = false;
        item.type = "self";
      });
      this.state.common.myList = data.myList;
    },

    setSongList(self, data) {
      this.state.songList.push({
        id: data.id,
        list: data.list
      });
    },

    setCurrentSong(self, data) {
      this.state.currentSong = {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        author: data.author,
        url: data.url,
        isPlay: true,
        startTime: "00:00",
        endTime: "00:00"
      };
    },

    setCurrentSongInfo(self, data) {
      for (let i = 0; i < data.array.length; i++) {
        this.state.currentSong[data.array[i].key] = data.array[i].value;
      }
    }
  },

  actions: {
    setLoginState({ commit }, data) {
      commit("setLoginState", data);
    },

    setUserInfo({ commit }, data) {
      commit("setUserInfo", data);
    },

    clearCache({ commit }) {
      commit("clearCache");
    },

    toggleActivePage({ commit }, data) {
      commit("toggleActivePage", data);
    },

    setMyList({ commit }, data) {
      commit("setMyList", data);
    },

    setSongList({ commit }, data) {
      commit("setSongList", data);
    },

    setCurrentSong({ commit }, data) {
      commit("setCurrentSong", data);
    },

    setCurrentSongInfo({ commit }, data) {
      commit("setCurrentSongInfo", data);
    }
  }
})
