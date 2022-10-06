<template>
  <div class="app-leftbar">
    <div class="app-leftbar-item" v-for="item in defaultList" v-bind:key="item.id"
        :style="{ backgroundColor: item.active == false ? '' : 'rgb(246, 246, 247)' }"
        @click="toggleItem(item.id)">
        <span style="margin-left: 10px; margin-right: auto;" 
            :style="{ fontWeight: item.active == true ? 'bold' : '', 
            fontSize: item.active == true ? '16px' : '14px' }">{{ item.name }}</span>
    </div>

    <span style="min-height: 25px; font-size: 14px; margin-left: 20px; margin-right: auto; margin-top: 10px; color: rgb(159, 159, 159);">我的音乐</span>

    <div class="app-leftbar-item" v-for="item in bottomList" v-bind:key="item.id"
        :style="{ backgroundColor: item.active == false ? '' : 'rgb(246, 246, 247)' }"
        @click="toggleItem(item.id)">
        <i :class="item.icon" style="margin-left: 10px;"></i>
        <span style="font-size: 14px; margin-left: 8px; margin-right: auto;">{{ item.name }}</span>
    </div>

    <span style="min-height: 25px; font-size: 14px; margin-left: 20px; margin-right: auto; margin-top: 10px; color: rgb(159, 159, 159);">创建的歌单</span>

    <div class="app-leftbar-item" v-for="item in $store.state.common.songList.myList" v-bind:key="item.id"
        :style="{ backgroundColor: item.active == false ? '' : 'rgb(246, 246, 247)' }"
        @click="toggleItem(item.id)">
        <i class="el-icon-s-unfold" style="margin-left: 10px;"></i>
        <span style="font-size: 13px; margin-left: 8px; margin-right: auto;
            white-space: nowrap; display: inline-block; width: 120px; overflow: hidden; text-overflow: ellipsis; line-height: 0.9">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";

export default {
    created() {
        if(this.$store.state.userInfo.username != ""){
            api.getMyList(this.$store.state.userInfo.account.id).then((res) => {
                this.$store.dispatch("setMyList", {
                    myList: res.playlist
                });
            });
        }
    },
    
    data() {
        return {
            defaultList: [{
                name: "发现音乐",
                id: "findMusic",
                active: true
            }, {
                name: "播客",
                id: "radio",
                active: false
            }, {
                name: "视频",
                id: "video",
                active: false
            }, {
                name: "关注",
                id: "follow",
                active: false
            }, {
                name: "直播",
                id: "live",
                active: false
            }, {
                name: "私人FM",
                id: "fm",
                active: false
            }],

            bottomList: [{
                name: "我喜欢的音乐",
                icon: "el-icon-star-off",
                id: "favoriteMusic",
                active: false
            }, {
                name: "本地与下载",
                icon: "el-icon-download",
                id: "local",
                active: false
            }, {
                name: "最近播放",
                icon: "el-icon-document",
                id: "recent",
                active: false
            }]
        }
    },

    methods: {
        toggleItem(id){
            //切换页面
            this.$store.dispatch("toggleActivePage", {
                id: id
            });

            //样式修改
            this.defaultList.forEach(item => {
                item.active = false;
            });
            this.bottomList.forEach(item => {
                item.active = false;
            });
            this.$store.state.common.songList.myList.forEach(item => {
                item.active = false;
            });


            let exist = false;
            for(let i = 0; i < this.defaultList.length; i++){
                if(this.defaultList[i].id == id){
                    this.defaultList[i].active = true;
                    exist = true;
                    break;
                }
            }

            if(exist == false){
                for(let i = 0; i < this.bottomList.length; i++){
                    if(this.bottomList[i].id == id){
                        this.bottomList[i].active = true;
                        exist = true;
                        break;
                    } 
                }
            }

            if(exist == false){
                for(let i = 0; i < this.$store.state.common.songList.myList.length; i++){
                    if(this.$store.state.common.songList.myList[i].id == id){
                        this.$store.state.common.songList.myList[i].active = true;
                    }
                }
            }
        }
    },
}
</script>

<style>
.app-leftbar{
    width: 200px;
    min-width: 200px;
    height: 98%;
    padding: 10px 0;
    border-right: 1px solid rgb(246, 246, 247);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}

.app-leftbar-item{
    width: 180px;
    height: 36px;
    min-height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 1px 0;
    cursor: pointer;
}

.app-leftbar-item:hover{
    background-color: rgb(246, 246, 247);
}
</style>