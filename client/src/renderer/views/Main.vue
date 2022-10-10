<template>
  <div class="app">
    <!-- 导航栏 -->
    <NavBar />

    <div style="display: flex; width: 100%; height: 100%">
      <!-- 左侧栏 -->
      <LeftBar />

      <!-- 右侧页面 -->
      <RightView />
    </div>

    <!-- 底部音乐播放栏 -->
    <MusicBar />
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import MusicBar from "@/components/Main/MusicBar.vue";
import LeftBar from "@/components/Main/LeftBar.vue";
import RightView from "@/components/Main/RightView.vue";

export default {
  components: {
    NavBar,
    MusicBar,
    LeftBar,
    RightView,
  },
};
</script>

<style>
.app {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 10px;
  background-color: rgb(224, 224, 224);
}
</style>