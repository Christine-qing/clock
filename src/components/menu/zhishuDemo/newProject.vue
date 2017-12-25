<template>
    <div>
     <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div class="newProject">
            <div class="steps clearfix">
                <div style="position:relative;z-index:10;">
                    <div class="stepOne fl first"></div>
                    <div class="stepOne fl"></div>
                    <div class="stepOne fl"></div>
                    <div class="stepOne fl last"></div>
                </div>
                <div class="hr1D4D6D9 hr"></div>
                <div class="hr2D4D6D9 hr"></div>
                <div class="hr3D4D6D9 hr"></div>
                <div class="fl projectDebriefing">
                    <span class="ml40">设定项目名称</span>
                    <span>设定操作城市</span>
                    <span>创建项目</span>
                    <span>选址分析探索</span>
                </div>
            </div>
            <div class="establish">
                <div class="demoName">
                    <span class="name">项目名称</span>
                    <Input placeholder="请输入项目名称" class="inputBox" :autofocus="true" @on-blur="valueBlur" v-model="value"></Input>
                    <span class="rule">{{matchingResult}}</span>
                </div>
                <div class="choiceCity clearfix">
                    <span class="name fl">操作城市</span>
                    <Cascader :data="cityList" filterable change-on-select v-model="cascaderVal" clearable @on-change="cascaderChange" class="inputBox fl">
                    </Cascader>
                </div>
                <Button type="primary" class="newlyBuild" @click="creatProject">创建项目</Button>
                <Button type="ghost" class="cancel">取消</Button>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        cityList
    } from '../../../../city'
    export default {
        name: "",
        data() {
            return {
                cascaderVal:[],
                value: "",
                matchingResult: "不可以使用符号",
                cityList: cityList,
            }
        },
        mounted() {
        },
        methods: {
            creatProject() {
        
                if (this.value.length < 1) {
                    this.$Message.error('请输入项目名称');
                } else if (this.cascaderVal.length < 1) {
                    this.$Message.error('请选择城市');
                } else {
                    this.$Message.info('项目已创建')
                }
            },
            // 失去焦点触发
            valueBlur() {
                if (/^[\u4e00-\u9fa5\w]{3,16}$/g.test(this.value)) {
                    this.matchingResult = "可以使用"
                } else {
                    if (this.value.length > 16) {
                        this.matchingResult = "字符过长"
                    } else if (this.value.length < 3) {
                        this.matchingResult = "字符过短"
                    } else {
                        this.matchingResult = "不可以使用符号"
                    }
                }
            },
            cascaderChange(value, selectedData) {
                if(selectedData.length===0){
                     this.$Message.error('请选择城市')
                }
                if (selectedData.length > 1) {
                    if (selectedData[1].label === "请选择") {
                        this.$Message.error('请重新选择城市')
                    } else {
                        console.log(selectedData[1].label)
                    }
                } else {
                    console.log(selectedData[0].label)
                }
            },
        }
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
    .ml40 {
        margin-left: 40px;
    }
    .newProject {
        width: 100%;
        background: rgba(28, 36, 56, 0.03);
        .steps {
            width: 640px;
            height: 80px;
            line-height: 80px;
            margin: 0 auto;
            padding-top: 38px;
            .hr {
                width: 140px;
                height: 2px;
                background: #D4D6D9;
                border-radius: 7px;
            }
            .hr1D4D6D9 {
                margin-left: 82px;
                margin-top: 10px;
            }
            .hr2D4D6D9 {
                margin-left: 244px;
            }
            .hr3D4D6D9 {
                margin-left: 404px;
                margin-top: -2px;
            }
            .stepOne {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(28, 36, 56, 0.03);
                border: 2px solid rgba(28, 36, 56, 0.16);
                margin-right: 137px;
            }
            .first {
                margin-left: 60px;
            }
            .last {
                margin-right: 10px;
            }
            .projectDebriefing {
                height: 50px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: rgba(28, 36, 56, 0.56);
                letter-spacing: 0;
                line-height: 12px;
                margin-top: 16px;
                span {
                    margin-right: 92px;
                }
            }
        }
        .establish {
            width: 640px;
            height: 240px;
            background: #FFFFFF;
            box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
            border-radius: 6px;
            margin: 0 auto;
            margin-top: 40px;
            .demoName {
                // width:480px;
                // height:70px;
                padding-top: 40px;
            }
            .name {
                opacity: 0.8;
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #1C2438;
                letter-spacing: 0;
                line-height: 12px;
                font-weight: 600;
                margin-left: 40px;
            }
            .inputBox {
                width: 280px;
                height: 32px;
                margin-left: 16px;
                margin-top: -6px;
            }
            .rule {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: rgba(28, 36, 56, 0.56);
                letter-spacing: 0;
                line-height: 12px;
                margin-left: 16px;
            }
            .choiceCity {
                margin-top: 30px;
            }
            .newlyBuild {
                width: 96px;
                height: 32px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #FFFFFF;
                letter-spacing: 0;
                line-height: 12px;
                margin-left: 104px;
                margin-top: 25px;
            }
            .cancel {
                width: 72px;
                height: 32px;
                border: 1px solid #DDDEE1;
                margin-left: 8px;
                margin-top: 25px;
            }
        }
    }
</style>