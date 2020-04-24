<template>
<div>
    <div class="title">BiliBili Real-time Fans</div>
    <div class="card">
        <el-card style="margin-top:20px;">
            <div class="banner">
                <img
                    :src="img"
                    style="position:absolute;height:100%"
                />
                <div class="face">
                    <div style="display:inline-block;height:100%;">
                        <div style="float:left;">
                            <el-avatar
                                :size="100"
                                :src="face"
                            ></el-avatar>
                        </div>
                        <div style="float:left;margin-left:10px;">
                            <div class="level">LV.{{level}}</div>
                            <div class="name">{{name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="following">
                    <span>关注</span>
                    <br />{{followInfo.following}}
                </div>
                <div class="follower">
                    <span>粉丝</span>
                    <br />{{followInfo.follower}}
                </div>
                <div class="views">
                    <span>视频播放量</span>
                    <br />{{views}}
                </div>
            </div>
        </el-card>
    </div>
     <div class="search">
                <el-input v-model="uid" placeholder=" (゜-゜)つロUIDの輸入" @keyup.enter.native="getInfoByUid()"></el-input>
                <el-button type="primary" @click="getInfoByUid()">GO</el-button>
            </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            img: "",
            face:"",
            name:"",
            level:"",
            followInfo:{},
            views:"",
            uid:""
        };
    },
    mounted(){
        this.getAllInfo()
       window.setInterval(this.getAllInfo , 1000)
    },
    methods: {
        getAllInfo(){
            this.getFollowInfo();
            this.getViews();
            this.getBanner();
        },
        getFollowInfo() {
            var uid = this.$route.params.uid;
            this.$axios
                .get("/api/relation/stat?vmid=" + uid)
                .then(res => {
                    this.followInfo=res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getBanner(){
            var uid = this.$route.params.uid;
            this.$axios
                .get("api/space/acc/info?mid=" + uid)
                .then(res => {
                    this.face=res.data.data.face;
                    this.name=res.data.data.name;
                    this.level=res.data.data.level;
                    this.img=res.data.data.top_photo;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getViews(){
            var uid = this.$route.params.uid;
            this.$axios
                .get("api/space/upstat?mid=" + uid)
                .then(res => {
                    this.views=res.data.data.archive.view;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getInfoByUid(){
            if(this.uid!=""){
                 this.$axios
                .get("api/space/acc/info?mid=" +this.uid)
                .then(res => {
                    if(res.data.message!="请求错误"&&res.data.data!=null){
                        this.$route.params.uid=this.uid;
                        this.uid="";
                        this.getAllInfo();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            }
            
        }
    }
};
</script>
<style scoped>
.card {
    padding: 0;
    margin: 0 auto;
    width: 1110px;
    height: 400px;
    position: relative;
}
.el-card {
    height: 400px;
    background: #baa5f1;
    border-radius: 20px;
    -webkit-box-shadow: 0 2px 12px 0 rgb(225, 174, 255);
    box-shadow: 0 2px 12px 0 rgb(225, 174, 255);
    border: none;
}
.el-card >>> .el-card__body {
    padding: 0;
}
.banner {
    background-size: cover;
    height: 200px;
    position: relative;
}
.info {
    width: 100%;
    height: 200px;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-top: 3px solid #765abb;
}
@media screen and (min-width: 1480px) {
    .card {
        width: 1280px !important;
    }
}
.following {
    width: 33%;
    text-align: center;
    font-size: 35px;
    border-right: 3px solid #765abb;
}
.follower {
    width: 33%;
    text-align: center;
    font-size: 35px;
    border-right: 3px solid #765abb;
}
.views {
    width: 33%;
    text-align: center;
    font-size: 35px;
}
.face {
    text-align: center;
    position: absolute;
    width: 100%;
    position: absolute;
    top: 50px;
    height: 100px;
}
.face >>> .el-avatar--circle {
    border: 3px solid #baa5f1 !important;
}
.level {
    color: #ffffff;
    margin-top: 20px;
    background: #baa5f1;
    width: 35px;
    font-size: 14px;
}
.name {
    color: #ffffff;
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
    -webkit-text-stroke: 0.5px #765abb;
}
span {
    font-size: 40px;
    font-weight: bold;
    color: #765abb;
    line-height: 110px;
}
.search {
    width: 100%;
    text-align: center;
    margin-top: 90px;
}
.el-input {
    width: 300px;
}
.title {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    font-size: 7vw;
    font-weight: bold;
    color: #fafead;
    font-family: Trebuchet MS;
}
</style>