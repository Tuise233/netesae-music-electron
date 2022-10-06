<template>
  <div class="app">
    <!-- 导航栏 -->
    <NavBar />

    <span style="font-size: 10px;">{{$store.state.userInfo}}</span>

    <!-- 底部音乐播放栏 -->
    <MusicBar />
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import MusicBar from "@/components/Main/MusicBar.vue";

export default {
    components: {
        NavBar,
        MusicBar
    }
}
</script>

<style>
.app{
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>