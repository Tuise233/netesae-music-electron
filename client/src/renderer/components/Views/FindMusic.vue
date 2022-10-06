<template>
  <div class="app-findmusic">

    <span style="margin-left: 30px; margin-right: auto; margin-top: 25px; font-size: 17px; font-weight: bold; min-height: 20px;">个性推荐</span>

    <!-- 跑马灯 -->
    <div class="app-findmusic-banner-container">
        <el-carousel class="app-findmusic-banner" type="card" height="200px" :interval="4000" arrow="never">
            <el-carousel-item class="app-findmusic-banner-item" v-for="(item, index) in bannerList" :key="index">
                <img :src="item.imageUrl" style="width: 100%; height: 100%;">
            </el-carousel-item>
        </el-carousel>
    </div>

    <span style="margin-left: 30px; margin-right: auto; margin-top: 10px; font-size: 17px; font-weight: bold; min-height: 20px;">推荐歌单</span>

    <div class="app-findmusic-songlist">
        <div class="app-findmusic-songlist-item" v-for="(item, index) in songList" v-bind:key="index">
            <img :src="item.picUrl" >
            <span>{{ item.name }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";

export default {
    created() {
        api.getBannerList().then((res) => {
            this.bannerList = res.banners;
        });

        api.getRecommandSongList().then((res) => {
            this.songList = res.result;
        });
    },

    data() {
        return {
            bannerList: [],
            songList: []
        }
    },
}
</script>

<style>
.app-findmusic{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll
}

.app-findmusic-banner-container{
    height: 250px;
    width: 90%;
    min-height: 250px;
    min-width: 760px;
    max-width: 1200px;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    overflow: hidden;
}

.app-findmusic-banner{
    width: 100%;
    min-width: 1100px;
    max-width: 1100px;
}

.app-findmusic-banner-item{
    border-radius: 10px;
    min-width: 540px;
    max-width: 540px;
}

.app-findmusic-songlist{
    width: 95%;
    min-height: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
}

.app-findmusic-songlist-item{
    min-width: 20%;
    width: 20%;
    height: 20%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.app-findmusic-songlist-item img{
    width: 90%;
    min-height: 90%;
    border-radius: 5px;
}

.app-findmusic-songlist-item span{
    margin-top: 10px;
    font-size: 12px;
    width: 90%;
}
</style>