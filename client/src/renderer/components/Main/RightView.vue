<template>
  <div class="app-rightview">
    <FindMusic v-if="$store.state.common.activePage == 'findMusic'" />
  </div>
</template>

<script>
import FindMusic from "@/components/Views/FindMusic.vue";

export default {
    components: {
        FindMusic
    }
}
</script>

<style>
.app-rightview{
    width: 100%;
    height: 100%;
}
</style>