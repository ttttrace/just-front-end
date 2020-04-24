<template>
    <div class="wrap" style="width:100%">
        <div class="content">
            <img src="../assets/FansIndex.png" />
            <div class="title">Bilibili Real-time Fans</div>
            <div class="search">
                <el-input
                    v-model="uid"
                    placeholder=" (゜-゜)つロUIDの輸入"
                    @keyup.enter.native="jumpToInfo()"
                ></el-input>
                <el-button type="primary" @click="jumpToInfo()">GO</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uid: ""
        };
    },
    methods: {
        jumpToInfo() {
            if (this.uid != "") {
                this.$axios
                    .get("api/space/upstat?mid=" + this.uid)
                    .then(res => {
                        if (
                            res.data.message != "请求错误" &&
                            res.data.data!=null
                        ) {
                            this.$router.push({
                                name: "info",
                                params: { uid: this.uid }
                            });
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
.wrap {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
    position: relative;
}
.content {
    width: 100%;
}
img {
    width: 100%;
    height: 50%;
    border-bottom-right-radius: 50% 95%;
    border-bottom-left-radius: 50% 95%;
    margin: 0 0 0 0;
}
.search {
    width: 100%;
    text-align: center;
    margin-top: 40px;
}
.el-input {
    width: 230px;
}
.title {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    font-size: 8.3vw;
    font-weight: bold;
    color: #fafead;
    font-family: Trebuchet MS;
}
</style>