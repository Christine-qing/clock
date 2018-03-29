<template>
    <div class="project">
     <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <!--项目概览-->
        <div class="projectOverview">
            <div class="content clearfix">
                <p class="projectName">
                    <span class="demoName">东方明珠项目报告</span>
                    <span class="demoDate">2017.09.20</span>
                </p>
                <div class="contentData fl">
                    <p class="dataName">消费商圈
                        <span>东方明珠</span>
                    </p>
                    <p class="dataContent">总人口数
                        <span>680,000</span>
                    </p>
                </div>
                <div class="contentData fl">
                    <p class="dataName">围栏方式
                        <span>中心点&半径</span>
                    </p>
                    <p class="dataContent latAndlng">经度纬度
                        <span>89,000°N . 60,680°S</span>
                    </p>
                </div>
                <div class="contentData fl">
                    <p class="dataName">锚点(A)
                        <span>东方明珠</span>
                    </p>
                    <p class="dataContent latAndlng">经度纬度
                        <span>89,000°N . 60,680°S</span>
                    </p>
                </div>
                <div class="contentData fl last">
                    <p class="dataName">锚点(B)
                        <span>东方明珠</span>
                    </p>
                    <p class="dataContent latAndlng">经度纬度
                        <span>89,000°N . 60,680°S</span>
                    </p>
                </div>
            </div>
        </div>
        <!--详细数据-->
        <div class="detaileData">
            <!--地图数据-->
            <div class="carousel ">
                <div class="carouselBox">
                    <!-- <div class="map " ></div>  -->
                    <Tabs value="name1" class="carouselTabs">
                        <Tab-pane label="商圈概述" name="name1" style="padding-left:20px;">
                            <div class="map">
                                <div class="demo-carousel" id="map" style="height:100%;"></div>
                            </div>
                        </Tab-pane>
                        <Tab-pane label="人口画像" name="name2" class="">人口画像</Tab-pane>
                        <Tab-pane label="人流统计" name="name3">人流统计</Tab-pane>
                        <Tab-pane label="交通分析" name="name4">交通分析</Tab-pane>
                    </Tabs>
                </div>
            </div>
            <!--人口画像报告-->
            <div class="populationInformation">
                <p class="title">人口画像报告</p>
                <div class="informationBox">
                    <p class="address">新天地商圈（中心点&5km）</p>
                    <div class="tableTitle">
                        <ul class="clearfix">
                            <li v-for="item in dates" class="fl title" :key="item.id">{{item}}</li>
                        </ul>
                    </div>
                    <ul class="clearfix person">
                        <li class="first fl">人口数</li>
                        <li v-for="item in persons" class="fl" :key="item.id">{{item}}</li>
                        <li class="last fl">20%</li>
                    </ul>
                    <div class="hr"></div>
                    <div id="barLineChart" :style="{width: '1000px', height: '300px'}">sdsd</div>
                </div>
            </div>
            <!--人流统计报告 -->
            <div class="populationInformation peopleCounting">
                <p class="title">人流统计报告</p>
                <div class="informationBox">
                    <p class="address">新天地商圈（A点）</p>
                    <div class="tableTitle">
                        <ul class="clearfix">
                            <li class="fl">总人数</li>
                            <li class="fl data">90900</li>
                            <li class="fl">经度纬度</li>
                            <li class="fl data">89,000°N . 60,680°S</li>
                            <li class="fl">采集日期</li>
                            <li class="fl data">2017.07.28～2017.08.01</li>
                            <li class="fl">采集时间</li>
                            <li class="fl data">01～24点</li>
                        </ul>
                    </div>
                    <div id="lineChart" :style="{width: '1000px', height: '300px'}"></div>
                </div>
                <div class="informationBox">
                    <p class="address">新天地商圈（B点）</p>
                    <div class="tableTitle">
                        <ul class="clearfix">
                            <li class="fl">总人数</li>
                            <li class="fl data">90900</li>
                            <li class="fl">男性／女性比例</li>
                            <li class="fl data">80% : 20%</li>
                            <li class="fl individual">婚否比例</li>
                            <li class="fl data">40% : 60%</li>
                            <li class="fl">购车比例</li>
                            <li class="fl data">40% : 60%</li>
                        </ul>
                    </div>
                    <div class="clearfix">
                        <div id="barChart" :style="{width: '450px', height: '300px'}" class="fl"></div>
                        <div id="genderPieChart" :style="{width: '180px', height: '300px'}" class="fl"></div>
                        <div id="carPieChart" :style="{width: '180px', height: '300px'}" class="fl"></div>
                        <div id="marriedPieChart" :style="{width: '180px', height: '300px'}" class="fl"></div>
                    </div>
                </div>
            </div>
            <div class="populationInformation trafficAnalysis peopleCounting">
                <p class="title">交通分析报告</p>
                <div class="informationBox">
                    <p class="address">新天地商圈（A点）</p>
                    <div class="tableTitle">
                        <ul class="clearfix">
                            <li class="fl">出行方式</li>
                            <li class="fl data">公交车</li>
                            <li class="fl">出行时间</li>
                            <li class="fl data">5分钟</li>
                            <li class="fl individual">远点坐标 (A)</li>
                            <li class="fl data">89,000°N . 60,680°S</li>
                            <li class="fl">远点坐标 (B)</li>
                            <li class="fl data">89,000°N . 60,680°S</li>
                        </ul>
                    </div>
                    <div class="traffic"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                myChart: null,
                lineChart: null,
                genderPieChart: null,
                carPieChart: null,
                marriedPieChart: null,
                dates: [
                    "日期", "2016年Q1", "2016年Q2", "2016年Q3", "2016年Q4", "2017年Q1", "2017年Q2", "2017年Q3", "2017年Q4", "复合增长率"
                ],
                persons: [
                    98000, 98000, 98000, 98000, 98000, 98000, 98000, 98000,
                ],
                map: null,
            }
        },
        mounted() {
            this.initMap();
            this.initBarLinechart();
            this.initLinechart();
            this.initBarchart();
            this.initgenderPiechart();
            this.initcarPieChart();
            this.initmarriedPieChart();
            this.chart();
        },
        methods: {
            initMap() {
                this.map = new IMAP.Map("map", {
                    minZoom: 4, //最小地图级别
                    maxZoom: 18, //最大地图级别
                    zoom: 12, //初始化级别
                    center: new IMAP.LngLat(116.40976, 39.90131) //中心点坐标
                })
            },
            // 折柱混合图
            initBarLinechart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('barLineChart'))
                // 绘制图表
                myChart.setOption({
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0", "#6DCE67"],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data: ['人口数', '增长率']
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    }, ],
                    yAxis: [{
                            type: 'value',
                            name: '人口数',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} 人'
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#999"
                                }
                            }
                        },
                        {
                            type: 'value',
                            name: '增长率',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#999"
                                }
                            }
                        }
                    ],
                })
                this.myChart = myChart
            },
            //   折线图配置
            initLinechart() {
                let lineChart = this.$echarts.init(document.getElementById('lineChart'))
                lineChart.setOption({
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0"],
                    title: {
                        // text: '未来一周气温变化',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['最高气温', '最低气温']
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 人'
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    },
                })
                this.lineChart = lineChart;
            },
            //  柱状图配置
            initBarchart() {
                // 基于准备好的dom，初始化echarts实例
                let barChart = this.$echarts.init(document.getElementById('barChart'))
                // 绘制图表
                barChart.setOption({
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0"],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data: ['人口数']
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '人口数',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} 人'
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    }],
                })
                this.barChart = barChart
            },
            //  男女比例饼图
            initgenderPiechart() {
                // 基于准备好的dom，初始化echarts实例
                let genderPieChart = this.$echarts.init(document.getElementById('genderPieChart'))
                // 绘制图表
                genderPieChart.setOption({
                    grid: {
                        top: '10%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0", "#6DCE67 "],
                    title: {
                        text: '男女比例',
                        textStyle: {
                            color: "#4D5363",
                            fontWeight: '100',
                            fontSize: 16,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 0, 0, 0]
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'center',
                        y: 'bottom',
                        data: ['男性', '女性']
                    },
                })
                this.genderPieChart = genderPieChart
            },
            //  购车比例饼图
            initcarPieChart() {
                let carPieChart = this.$echarts.init(document.getElementById('carPieChart'))
                // 绘制图表
                carPieChart.setOption({
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0", "#6DCE67 "],
                    title: {
                        text: '购车比例',
                        textStyle: {
                            color: "#4D5363",
                            fontWeight: '100',
                            fontSize: 16,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 0, 0, 0]
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'center',
                        y: 'bottom',
                        data: ['有车', '无车']
                    },
                })
                this.carPieChart = carPieChart
            },
            //   已婚比例饼图
            initmarriedPieChart() {
                let marriedPieChart = this.$echarts.init(document.getElementById('marriedPieChart'))
                // 绘制图表
                marriedPieChart.setOption({
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0", "#6DCE67 "],
                    title: {
                        text: '已婚比例',
                        textStyle: {
                            color: "#4D5363",
                            fontWeight: '100',
                            fontSize: 16,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 0, 0, 0]
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'center',
                        y: 'bottom',
                        data: ['已婚', '未婚']
                    },
                })
                this.marriedPieChart = marriedPieChart
            },
            chart() {
                this.myChart.setOption({
                    series: [{
                            name: '人口数',
                            type: 'bar',
                            barWidth: '20%',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name: '增长率',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                });
                this.lineChart.setOption({
                    series: [{
                        name: '最低气温',
                        type: 'line',
                        data: [1, 4, 2, 5, 3, 2, 0],
                    }]
                });
                this.barChart.setOption({
                    series: [{
                        name: '人口数',
                        type: 'bar',
                        barWidth: '40%',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    }, ]
                });
                this.genderPieChart.setOption({
                    series: [{
                        name: '男女比例',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        // avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                }
                            }
                        },
                        data: [{
                                value: 335,
                                name: '男性'
                            },
                            {
                                value: 310,
                                name: '女性'
                            },
                        ]
                    }]
                });
                this.carPieChart.setOption({
                    series: [{
                        name: '购车比例',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        // avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                }
                            }
                        },
                        data: [{
                                value: 335,
                                name: '有车'
                            },
                            {
                                value: 310,
                                name: '无车'
                            },
                        ]
                    }]
                });
                this.marriedPieChart.setOption({
                    series: [{
                        name: '已婚比例',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        // avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                }
                            }
                        },
                        data: [{
                                value: 335,
                                name: '已婚'
                            },
                            {
                                value: 310,
                                name: '未婚'
                            },
                        ]
                    }]
                });
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
    .ml20 {
        margin-left: 20px;
    }
    .project {
        width: 100%;
        list-style: none;
        padding: 0 0 97px 0;
        margin: 0;
        background: rgba(28, 36, 56, 0.03);
    }
    .projectOverview {
        width: 100%;
        height: 160px;
        box-shadow: 0 1px 4px 0 rgba(28, 36, 56, 0.16);
        background: white;
        margin-bottom: 24px;
        .content {
            width: 1080px;
            height: 100%;
            background: white;
            margin: 0 auto;
            .projectName {
                padding-top: 32px;
                .demoName {
                    font-family: PingFangSC-Regular;
                    font-size: 20px;
                    color: rgba(28, 36, 56, 0.80);
                    letter-spacing: -0px;
                    line-height: 20px;
                }
                .demoDate {
                    font-family: HelveticaNeue-Light;
                    font-size: 14px;
                    color: rgba(28, 36, 56, 0.80);
                    letter-spacing: -0px;
                    line-height: 12px;
                }
            }
        }
        .contentData {
            width: 265px;
            height: 48px;
            border-right: 2px solid #2D8CF0;
            margin-top: 30px;
            padding-left: 4px;
            .dataName {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: rgba(28, 36, 56, 0.56);
                letter-spacing: -0px;
                line-height: 12px;
                span {
                    color: rgba(28, 36, 56, 0.80);
                    margin-left: 10px;
                }
            }
            .dataContent {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: rgba(28, 36, 56, 0.56);
                letter-spacing: -0px;
                line-height: 12px;
                margin-top: 17px;
                span {
                    font-family: HelveticaNeue;
                    font-size: 16px;
                    color: #2D8CF0;
                    letter-spacing: -0px;
                    line-height: 16px;
                    margin-left: 10px;
                }
            }
            .latAndlng span {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: rgba(28, 36, 56, 0.80);
                letter-spacing: -0px;
                line-height: 12px;
            }
        }
        .last {
            border-right: 1px solid white;
        }
    }
    .detaileData {
        width: 1080px;
        margin: 0 auto;
        background: #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(28, 36, 56, 0.16);
        border-radius: 4px;
    }
    .carousel {
        width: 1080px;
        .carouselBox {
            width: 1080px;
            height: 460px;
            padding-top: 24px; //    background:yellow;
            //    border-top:1px solid #EDEEEF;
            border-bottom: 1px solid #EDEEEF;
            .carouselTabs {}
            .map {
                width: 1000px;
                height: 320px;
                background: #D8D8D8;
                margin: 24px 40px 40px 20px;
            }
        }
    }
    .ivu-tabs-nav .ivu-tabs-tab {
        padding: 24px 43px;
    }
    .populationInformation {
        margin-top: 38px;
        .title {
            font-family: "微软雅黑";
            font-size: 16px;
            color: rgba(28, 36, 56, 0.80);
            letter-spacing: 0;
            line-height: 16px;
            font-weight: 600;
            margin-left: 40px;
            margin-bottom: 16px;
        }
        .informationBox {
            width: 1000px;
            height: 420px;
            margin: 0 auto;
            border-top: 1px solid #EDEEEF;
            border-bottom: 1px solid #EDEEEF;
            .address {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: rgba(28, 36, 56, 0.56);
                letter-spacing: 0;
                line-height: 14px;
                margin-top: 20px;
                margin-bottom: 25px;
            }
            .tableTitle {
                width: 1000px;
                height: 40px;
                background: rgba(28, 36, 56, 0.03);
                margin: 0 auto;
                .title {
                    margin-left: 42px;
                    font-size: 12px;
                    color: rgba(28, 36, 56, 0.80);
                    font-weight: 600;
                    line-height: 40px;
                }
            }
            .person {
                li {
                    font-family: HelveticaNeue-Light;
                    font-size: 14px;
                    color: rgba(28, 36, 56, 0.80);
                    margin-left: 60px;
                }
                .first {
                    margin-left: 36px;
                    margin-right: -14px;
                    font-size: 12px;
                    color: rgba(28, 36, 56, 0.80);
                }
            }
            .hr {
                width: 1000px;
                height: 1px;
                background: #EDEEEF;
                margin-top: 20px;
            }
        }
        .traffic {
            width: 1000px;
            height: 220px;
            background: #D8D8D8;
            margin: 24px auto 0 auto;
        }
    } // 人流统计报告
    .peopleCounting {
        li {
            line-height: 40px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(28, 36, 56, 0.56);
            margin-left: 40px;
        }
        .data {
            font-weight: 600;
            font-family: HelveticaNeue-Medium;
            font-size: 14px;
            color: rgba(28, 36, 56, 0.80);
            margin-left: 16px;
        }
        .individual {
            margin-left: 60px;
        }
    }
    .trafficAnalysis {}
</style>