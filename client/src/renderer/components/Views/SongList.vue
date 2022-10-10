<template>
  <div class="app-songlist">
    <div class="app-songlist-detail">
      <img
        :src="$store.state.common.currentMyList.coverImgUrl"
        style="
          width: 185px;
          min-width: 185px;
          height: 185px;
          min-height: 185px;
          border-radius: 5px;
        "
      />
      <div
        style="
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <el-tag size="mini" effect="plain" type="info">歌单</el-tag>
          <span style="font-size: 20px; font-weight: bold; margin-left: 5px">{{
            $store.state.common.currentMyList.name
          }}</span>
        </div>
        <div style="display: flex; margin-top: 10px; align-items: center">
          <img
            :src="$store.state.common.currentMyList.creator.avatarUrl"
            style="width: 30px; height: 30px; border-radius: 50%"
          />
          <span
            style="margin-left: 5px; font-size: 13px; color: rgb(11, 88, 176)"
            >{{ $store.state.common.currentMyList.creator.nickname }}</span
          >
        </div>
        <div style="display: flex; margin-top: 5px; align-items: center">
          <span style="font-size: 13px"
            >歌曲: {{ $store.state.common.currentSongList.songs.length }}</span
          >
          <span style="font-size: 13px; margin-left: 10px"
            >播放: {{ $store.state.common.currentMyList.playCount }}</span
          >
        </div>
        <span
          style="margin-top: 5px; font-size: 13px"
          v-if="$store.state.common.currentMyList.description != null"
          >简介: {{ $store.state.common.currentMyList.description }}</span
        >
      </div>
    </div>
    <span
      style="
        margin-left: 30px;
        margin-right: auto;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;
        min-height: 30px;
      "
      >歌曲列表</span
    >
    <div class="app-songlist-list">
      <div class="app-songlist-list-item">
        <span>操作</span>
        <span>标题</span>
        <span>歌手</span>
        <span>专辑</span>
        <span>时长</span>
      </div>

      <div
        class="app-songlist-list-item"
        v-for="(item, index) in $store.state.common.currentSongList.songs"
        v-bind:key="index"
        @dblclick="clickSong(item.id, item.name, item.al.picUrl, item.al.name, item.ar[0].name)"
      >
        <span><img src="@/assets/img/musicbar/like_active.png"></span>
        <span>{{ item.name }}</span>
        <span>{{ item.ar[0].name }}</span>
        <span>{{ item.al.name }}</span>
        <span>时长</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";

export default {
  methods: {
    clickSong(id, name, imageUrl, description, author){
      api.getSongPlayUrl(id).then((res) => {
        this.$store.dispatch("setCurrentSong", {
          name: name,
          imageUrl: imageUrl,
          description: description,
          author: author,
          url: res.data[0].url
        });

        setTimeout(() => {
          let audio = document.getElementById("audioTag");
          audio.play();

          this.$store.dispatch("setCurrentSongInfo", {
            "array": [{
              key: "endTime",
              value: `${parseInt(audio.duration / 60)}:${parseInt(audio.duration - parseInt(audio.duration / 60))}`
            }]
          });

          console.log(this.$store.state.currentSong.endTime);
        }, 500);
      });
    }
  },
};
</script>

<style>
.app-songlist {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-songlist-detail {
  width: 700px;
  height: 185px;
  min-height: 185px;

  display: flex;
  margin-top: 32px;
  margin-left: 30px;
  margin-right: auto;
}

.app-songlist-list {
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin-top: 10px;
}

.app-songlist-list-item {
  width: 100%;
  height: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  font-size: 13px;
}

.app-songlist-list-item img{
  width: 16px;
  height: 16px;
}

.app-songlist-list-item:hover {
  background-color: rgb(241, 242, 243);
}

.app-songlist-list-item span {
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app-songlist-list-item span:nth-child(1) {
  min-width: 70px;
  margin-left: 30px;
}
.app-songlist-list-item span:nth-child(2) {
  min-width: 300px;
  width: 50%;
  max-width: 680px;
}
.app-songlist-list-item span:nth-child(3) {
  min-width: 140px;
  width: 50%;
  max-width: 320px;
}
.app-songlist-list-item span:nth-child(4) {
  min-width: 190px;
  width: 50%;
  max-width: 430px;
}
.app-songlist-list-item span:nth-child(5) {
  min-width: 75px;
  width: 50%;
  max-width: 170px;
}
</style>