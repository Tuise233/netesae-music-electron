<template>
  <div class="app-navbar">
    <div class="app-navbar-logo">
        <img src="@/assets/img/navbar/logo.png">
        <span>拉布拉乐</span>
    </div>

    <div class="app-navbar-searchbox">
        <div class="app-navbar-searchbox-icon">
            <img src="@/assets/img/navbar/left_arrow.png">
        </div>
        <div class="app-navbar-searchbox-icon">
            <img src="@/assets/img/navbar/right_arrow.png">
        </div>
        <div class="app-navbar-searchbox-input">
            <img src="@/assets/img/navbar/search.png">
            <input >
        </div>
        <div class="app-navbar-searchbox-icon">
            <img src="@/assets/img/navbar/microphone.png">
        </div>
    </div>

    <div class="app-navbar-userinfo">
        <img src="@/assets/img/navbar/icon.png">
        <span>拉布拉马</span>
        <img src="@/assets/img/navbar/bottom_arrow.png">
    </div>

    <div class="app-navbar-setting">
        <img src="@/assets/img/navbar/setting.png">
        <img src="@/assets/img/navbar/message.png">
        <div class="app-navbar-setting-split"></div>
        <img src="@/assets/img/navbar/minimize.png">
        <img src="@/assets/img/navbar/maximize.png">
        <img src="@/assets/img/navbar/close.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-navbar{
    width: 100%;
    height: 60px;
    background-color: rgb(62, 72, 119);
    
    display: flex;
    align-items: center;

    -webkit-app-region: drag;
}

.app-navbar-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
}

.app-navbar-logo img{
    width: 30px;
    height: 30px;
}

.app-navbar-logo span{
    font-weight: bold;
    font-size: 17px;
    color: white;
    margin-left: 5px;
    letter-spacing: 2px;
}

.app-navbar-searchbox{
    display: flex;
    align-items: center;
    height: 40px;
    margin-left: 85px;
}

.app-navbar-searchbox-icon{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: rgb(57, 66, 109);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    -webkit-app-region: no-drag;
}

.app-navbar-searchbox-icon:nth-child(4){
    height: 30px;
    width: 30px;
}

.app-navbar-searchbox-icon:nth-child(4) img{
    height: 20px;
    width: 20px;
}

.app-navbar-searchbox-icon:nth-child(4) img:hover{
    cursor: pointer;
}

.app-navbar-searchbox img{
    width: 15px;
    height: 15px;
}

.app-navbar-searchbox-input{
    height: 30px;
    width: 160px;
    display: flex;
    align-items: center;
    background-color: rgb(57, 66, 109);
    margin: 0 5px;
    border-radius: 50px;
}

.app-navbar-searchbox-input img{
    margin-left: 10px;
}

.app-navbar-searchbox-input input{
    width: calc(100% - 20px);
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-app-region: no-drag;
    padding: 0 10px;
    color: white;
    font-size: 12px;
}

.app-navbar-userinfo{
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10px;
}

.app-navbar-userinfo img:first-child{
    width: 30px;
    height: 30px;
}

.app-navbar-userinfo span{
    color: white;
    font-size: 12px;
    margin-left: 8px;
}

.app-navbar-userinfo img:nth-child(3){
    width: 12px;
    height: 12px;
    margin-left: 8px;
}

.app-navbar-setting{
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 15px;
}

.app-navbar-setting img{
    width: 22px;
    height: 22px;
    -webkit-app-region: no-drag;
    cursor: pointer;
    margin: 0 5px;
}

.app-navbar-setting-split{
    height: 18px;
    width: 1px;
    border-left: 1px solid rgb(158, 158, 158);
    margin: 0 10px;
}
</style>