<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'client'
  }
</script>

<style>
@font-face {
  font-family: "PingFang";
  src: url("./assets/font/pingfang.ttf")
}

*{
  font-family: "PingFang";
  user-select: none;
  overflow: hidden;
}

html, body{
  margin: 0;
  padding: 0;
}
</style>
