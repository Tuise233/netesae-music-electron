<template>
  <div class="app-musicbar">
    <div class="app-musicbar-info">
        <img src="@/assets/img/musicbar/song_avatar.png" >
        <div style="display: flex; flex-direction: column; height: 50px; justify-content: center;">
            <div class="app-musicbar-title">
                <span>1874</span>
                <span>(电影 《魂魄唔齐》主题曲)</span>
                <img src="@/assets/img/musicbar/like.png">
            </div>
            <span style="margin-top: auto; margin-bottom: 5px; height: 15px; line-height: 15px; font-size: 14px;">陈奕迅</span>
        </div>
    </div>

    <div class="app-musicbar-console">
        <div class="app-musicbar-console-btn">
            <img src="@/assets/img/musicbar/play1.png">
            <img src="@/assets/img/musicbar/prevsong.png">
            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgb(245, 245, 245); 
                    display: flex; align-items: center; justify-content: center;">
                <img src="@/assets/img/musicbar/pause.png">
            </div>
            <img src="@/assets/img/musicbar/nextsong.png">
            <img src="@/assets/img/musicbar/word.png">
        </div>

        <div class="app-musicbar-console-state">
            <span>00:00</span>
            <div style="width: 300px; height: auto;">
                <el-slider v-model="songStep" :show-tooltip="false"></el-slider>
            </div>
            <span>4:30</span>
        </div>
    </div>

    <div class="app-musicbar-operate">
        <img src="@/assets/img/musicbar/volume.png">
        <img src="@/assets/img/musicbar/playlist.png">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            songStep: 0
        }
    },
}
</script>

<style>
.app-musicbar{
    width: 100%;
    height: 75px;
    border-top: 1px solid rgb(224, 224, 224);
    margin-top: auto;
    margin-bottom: 0;

    display: flex;
    align-items: center;

    position: relative;
}

.app-musicbar-info{
    width: 270px;
    height: 50px;
    display: flex;
    font-size: 12px;

    position: absolute;
    left: 12px;
}

.app-musicbar-info img:first-child{
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid rgb(237, 237, 234);
    margin-right: 12px;
}

.app-musicbar-title{
    display: flex;
    margin-top: 5px;
    margin-bottom: auto;
    max-width: 150px;
}

.app-musicbar-title span{
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    max-width: 120px;
    min-width: 40px;
    font-size: 14px;
    height: 15px;
    line-height: 15px;
}

.app-musicbar-title span:nth-child(2){
    color: rgb(153, 153, 153);
    height: 15px;
}

.app-musicbar-title img{
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    margin-left: 8px;
}

.app-musicbar-console{
    width: 430px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    transform: translate(-50%, 0);
    left: 50%;
}

.app-musicbar-console-btn{
    width: 220px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.app-musicbar-console-btn img{
    width: 16px;
    height: 16px;
}

.app-musicbar-console-btn img:hover{
    cursor: pointer;
}

.app-musicbar-console-btn div:hover{
    cursor: pointer;
}

.app-musicbar-console-state{
    width: 380px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.app-musicbar-console-state span{
    font-size: 11px;
    color: rgb(153, 153, 153);
}

.el-slider__bar{
    background-color: rgb(96, 85, 132);
}

.el-slider__button{
    border: none;
    width: 10px;
    height: 10px;
}

.el-alert, .el-notification, .el-slider__button, .el-slider__stop{
    background-color: rgb(194, 184, 226);
}

.app-musicbar-operate{
    position: absolute;
    right: 20px;
}

.app-musicbar-operate img{
    width: 25px;
    height: 25px;
}

.app-musicbar-operate img:hover{
    cursor: pointer;
}

.app-musicbar-operate img:nth-child(2){
    margin-left: 10px;
    width: 20px;
}
</style>