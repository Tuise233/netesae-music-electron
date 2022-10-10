<template>
  <div class="app-rightview">
    <FindMusic v-if="$store.state.common.activePage == 'findMusic'" />
    <SongList v-if="$store.state.common.activePage == 'songList'" />
  </div>
</template>

<script>
import FindMusic from "@/components/Views/FindMusic.vue";
import SongList from "@/components/Views/SongList.vue";

export default {
    components: {
        FindMusic,
        SongList
    }
}
</script>

<style>
.app-rightview{
    width: 100%;
    height: 100%;
}
</style>