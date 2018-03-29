<template>
    <div>
     <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div class="listPage clearfix" v-for="item in lists" :key="item.id">
            <!--左侧图片-->
            <div class="demoImg fl"></div>
            <!--右侧数据-->
            <div class="dataExhibition fl">
                <div class="dataExhibitionTop clearfix">
                    <div class="demoTitle fl">
                        <p class="title">西单大悦城</p>
                        <p class="demoPath">中心点+5km半径</p>
                    </div>
                    <div class="specificData fl clearfix">
                        <div class="smallMould fl">
                            <p class="date">人口90天</p>
                            <p>
                                <span class="data">60800</span>
                                <span class="percent">20%</span>
                            </p>
                        </div>
                        <div class="smallMould fl">
                            <p class="date">人口90天</p>
                            <p>
                                <span class="data">60800</span>
                                <span class="percent">20%</span>
                            </p>
                        </div>
                        <div class="smallMould fl">
                            <p class="date">人口90天</p>
                            <p>
                                <span class="data">60800</span>
                                <span class="percent">20%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="dataExhibitionBottom clearfix">
                    <div class="state fl">
                        <span class="category">人口画像</span>
                        <span class="actualState">计算中</span>
                        <span class="category">人流检测</span>
                        <span class="actualState">未计算</span>
                        <span class="category">交通分析</span>
                        <span class="actualState">分析可用</span>
                    </div>
                    <div class="operation fl clearfix">
                        <div class="operationIcon fl" style="border-right: 1xp solid #F2F2F3;">
                            <Icon type="compose" class="icon"></Icon>
                        </div>
                        <div class="operationIcon fl" style="border-right: 1xp solid #F2F2F3;">
                            <Icon type="trash-a" class="icon"></Icon>
                        </div>
                        <div class="operationIcon fl" style="border-right: 1xp solid #F2F2F3;">
                            <Icon type="share" class="icon"></Icon>
                        </div>
                        <div class="viewReport fl">
                            <Icon type="clock" class="icon"></Icon>
                            <span>查看报表</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--右侧数据展示end-->
        </div>
        <Page :total="100" class="page"></Page>
    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                lists: [
                    1, 2, 3, 4, 5, 6
                ]
            }
        },
        mounted() {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .clearfix:after {
        clear: both;
        content: "";
        display: block;
    }
    .fl {
        float: left;
    }
    .rl {
        float: right;
    }
    .page {
        margin: 5% 0 5% 64%;
    }
    .listPage {
        width: 1080px;
        height: 150px;
        box-shadow: 0 3px 8px 0;
        margin: 0 auto;
        border-radius: 6px;
        margin-bottom: 24px;
        .demoImg {
            width: 17%;
            height: 100%;
            background: url("../../../assets/img/demo1.png")
        }
        .dataExhibition {
            width: 83%;
            height: 100%;
        }
    }
    .dataExhibitionTop {
        width: 100%;
        height: 99px;
        border-bottom: 1px solid #F2F2F3;
        .demoTitle {
            width: 375px;
            hegiht: 71px;
            margin-top: 28px;
            .title {
                opacity: 0.8;
                font-family: PingFangSC-Medium;
                font-size: 18px;
                color: #1C2438;
                letter-spacing: 0;
                line-height: 18px;
                font-weight: 600;
                margin-left: 20px;
            }
            .demoPath {
                color: #1C2438;
                font-size: 12px;
                margin-left: 37px;
                margin-top: 17px;
                opacity: 0.56;
                font-family: PingFangSC-Regular;
                letter-spacing: 0;
                line-height: 12px;
            }
        }
        .specificData {
            width: 520px;
            height: 72px;
            margin-top: 27px;
            .smallMould {
                width: 166px;
                height: 50px;
                border-left: 1px solid #F2F2F3;
            }
            .date {
                opacity: 0.56;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #1C2438;
                line-height: 12px;
                margin-left: 19.5px;
                margin-bottom: 15.5px;
            }
            .data {
                opacity: 0.8;
                font-family: HelveticaNeue;
                font-size: 20px;
                color: #1C2438;
                letter-spacing: 0;
                line-height: 20px;
                margin-left: 19.5px;
            }
            .percent {
                opacity: 0.8;
                font-family: HelveticaNeue;
                font-size: 12px;
                color: #1C2438;
                letter-spacing: 0;
                line-height: 12px;
                margin-left: 36.5px;
            }
        }
    }
    .dataExhibitionBottom {
        width: 100%;
        height: 50px; //  background:red;
        .state {
            width: 550px;
            height: 100%;
            border-right: 1px solid #F2F2F3;
            line-height: 50px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #1C2438;
            letter-spacing: 0;
            .category {
                opacity: 0.56;
                margin-left: 19.5px;
            }
            .actualState {
                opacity: 0.8;
                margin-left: 4px;
            }
        }
        .operation {
            width: 346px;
            height: 100%;
            line-height: 50px;
            .operationIcon {
                width: 55px;
                height: 56%;
                border-right: 1px solid #F2F2F3;
                margin-top: 10px;
                position: relative;
                .icon {
                    color: rgba(28, 36, 56, 0.56);
                    opacity: 0.8;
                    font-size: 20px;
                    margin-left: 20px;
                    line-height: 2;
                    position: absolute;
                    top: -4px;
                    cursor: pointer;
                }
            }
            .viewReport {
                width: 180px;
                height: 56%;
                margin-top: 10px;
                position: relative;
                .icon {
                    color: rgba(28, 36, 56, 0.56);
                    opacity: 0.8;
                    font-size: 20px;
                    margin-left: 20px;
                    line-height: 2;
                    position: absolute;
                    top: -4px;
                    cursor: pointer;
                }
                span {
                    position: absolute;
                    top: -8px;
                    left: 50px;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: rgba(28, 36, 56, 0.56);
                    letter-spacing: 0;
                    cursor: pointer;
                }
            }
        }
    }
</style>