<template>
    <div class="storeIndex ">
        <ul class="store-header clearfix">
            <li class="user-icon fl"></li>
            <li class="user-name fl">店缘</li>
            <li class="update-user fl">
                <Button type="primary">更新授权</Button>
            </li>
            <li class="add-user fl">
                <Button type="primary">新增授权</Button>
            </li>
        </ul>
        <ul>
            <!-- <li class="title foo"></li> -->
            <Button type="primary" size="large">Large</Button>
            <Button type="primary">Default</Button>
        </ul>
        <!-- <echartsBar style="width:500px;height:200px"></echartsBar> -->
        <echartsLine style="width:500px;height:200px" :msg="this.setData"></echartsLine>
    </div>
</template>

<script>
    import echartsBar from "../echartsDemo/echartsBar.vue"
    import echartsLine from "../echartsDemo/echartsLine.vue"
    export default {
        name: "",
        data() {
            return {
                xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                genderData: null,
                setData:[10,20,50,60,10,20,56,60,80,30]
            }
        },
        components: {
            echartsBar,
            echartsLine
        },
        mounted() {
            // this.foo()
        },
        methods: {
            foo(){
                  this.genderData = {
                title: {
                    text: '测试',
                    textStyle: {
                        color: '#feb763',
                        fontSize: 18
                    },
                    textAlign:'right',
                    right:76,
                    top:125
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}：{d}%",
                    confine: true
                },
                grid: {
                    top: 35,
                    left: 0,
                    right: 0
                },
                legend: {
                    // data: icon
                },
                series: [{
                    name: '',
                    data: this.setData
                }]
            }

            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../style/base.css';
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
    .w-100 {
        width: 100px;
        height: 100%;
    }
    .storeIndex {
        width: 1080px;
        border: 1px solid red;
        .store-header {
            width: 100%;
            height: 80px;
            font-size: 16px;
            margin: 0px auto;
            list-style: none;
            border: 1px solid blue;
            .user-icon {
                width: 60px;
                height: 60px;
                border-radius: 50% 50%;
                border: 1px solid black;
                margin: 10px 0 0 10px;
            }
            .user-name {
                @extend.w-100;
                text-align: center;
                line-height: 100%;
            }
            .update-user {
                @extend.w-100;
                margin: 20px auto;
            }
            .add-user {
                @extend.w-100;
                margin: 20px auto;
            }
        }
    }
    .title {
        width: 100px;
        height: 100px;
        border: 1px solid red;
    }
</style>