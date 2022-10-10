<template>
  <div class="app-musicbar">
    <div class="app-musicbar-info">
      <img :src="$store.state.currentSong.imageUrl" />
      <div
        style="
          display: flex;
          flex-direction: column;
          height: 50px;
          justify-content: center;
        "
      >
        <div class="app-musicbar-title">
          <span>{{ $store.state.currentSong.name }}</span>
          <span>({{ $store.state.currentSong.description }})</span>
          <img src="@/assets/img/musicbar/like.png" />
        </div>
        <span
          style="
            margin-top: auto;
            margin-bottom: 5px;
            height: 15px;
            line-height: 15px;
            font-size: 14px;
          "
          >{{ $store.state.currentSong.author }}</span
        >
      </div>
    </div>

    <div class="app-musicbar-console">
      <audio controls="controls" controlsList="nodownload" id="audioTag" :src="$store.state.currentSong.url"></audio>
    </div>

    <div class="app-musicbar-operate">
      <!-- <img src="@/assets/img/musicbar/volume.png"> -->
      <img style="width: 20px" src="@/assets/img/musicbar/playlist.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songStep: 0,
    };
  },

  methods: {
    togglePlayMusic() {
      let audio = document.getElementById("audioTag");
      if (this.$store.state.currentSong.isPlay == false) {
        audio.play();
      } else {
        audio.pause();
      }

      this.$store.dispatch("setCurrentSongInfo", {
        array: [
          {
            key: "isPlay",
            value: !this.$store.state.currentSong.isPlay,
          },
        ],
      });
    },
  },
};
</script>

<style>
.app-musicbar {
  width: 100%;
  height: 75px;
  border-top: 1px solid rgb(224, 224, 224);
  margin-top: auto;
  margin-bottom: 0;

  display: flex;
  align-items: center;

  position: relative;
}

.app-musicbar-info {
  width: 270px;
  height: 50px;
  display: flex;
  font-size: 12px;

  position: absolute;
  left: 12px;
}

.app-musicbar-info img:first-child {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgb(237, 237, 234);
  margin-right: 12px;
}

.app-musicbar-title {
  display: flex;
  margin-top: 5px;
  margin-bottom: auto;
  max-width: 150px;
}

.app-musicbar-title span {
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
  max-width: 120px;
  min-width: 40px;
  font-size: 14px;
  height: 15px;
  line-height: 15px;
}

.app-musicbar-title span:nth-child(2) {
  color: rgb(153, 153, 153);
  height: 15px;
}

.app-musicbar-title img {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-left: 8px;
}

.app-musicbar-console {
  width: 430px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  transform: translate(-50%, 0);
  left: 50%;
}

.app-musicbar-operate {
  position: absolute;
  right: 20px;
}

.app-musicbar-operate img {
  width: 25px;
  height: 25px;
}

.app-musicbar-operate img:hover {
  cursor: pointer;
}

.app-musicbar-operate img:nth-child(2) {
  margin-left: 10px;
  width: 20px;
}

audio {
  width: 100%;
  height: 80px;
  margin-top: -45px;
}

audio::-webkit-media-controls-panel {
  background-color: transparent;
}
</style>