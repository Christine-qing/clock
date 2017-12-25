<template>
    <div>
        <div class="rightForm">
            <p class="rightFormTitle">商圈:东直门商圈</p>
            <p class="persons">总人口</p>
            <div class="clearfix">
                <p class="personData fl">60900</p>
                <Button class="fl export">导出Excel</Button>
                <Button class="fl" type="primary">查看报告</Button>
            </div>
            <!--人口统计-->
            <div class="statistics"> 人口统计</div>
            <div id="barLineFrom" :style="{width: '400px', height: '180px'}"></div>
            <!--人群画像-->
            <div class="statistics">人群画像</div>
            <div id="barFrom" :style="{width: '400px', height: '220px'}"></div>
            <hr width="400" color="#F1F1F2" />
            <div class="pieChart">
                <div id="genderPieChart" :style="{width: '132px', height: '240px'}" class="fl"></div>
                <div id="carPieChart" :style="{width: '132px', height: '240px'}" class="fl"></div>
                <div id="marriedPieChart" :style="{width: '132px', height: '240px'}" class="fl"></div>
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
                barLineFrom: null,
                barFrom: null,
                genderPieChart: null,
                carPieChart: null,
                marriedPieChart: null,
            }
        },
        mounted() {
            this.initMychart()
            this.myData()
        },
        methods: {
            initMychart() {
                let barLineFrom = this.$echarts.init(document.getElementById('barLineFrom'))
                let barFrom = this.$echarts.init(document.getElementById('barFrom'))
                let genderPieChart = this.$echarts.init(document.getElementById('genderPieChart'))
                let carPieChart = this.$echarts.init(document.getElementById('carPieChart'))
                let marriedPieChart = this.$echarts.init(document.getElementById('marriedPieChart'))
                //   人口统计
                barLineFrom.setOption({
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                        backgroundColor: 'red',
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
                        },
                    ],
                });
                // 人群画像
                barFrom.setOption({
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
                        }
                    ],
                });
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
                            fontSize: 12,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 0, 0, 20]
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
                });
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
                            fontSize: 12,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 0, 0, 20]
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
                });
                marriedPieChart.setOption({
                    grid: {
                        left: '5%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    color: ["#2D8CF0", "#6DCE67 "],
                    title: {
                        text: '已婚比例',
                        textStyle: {
                            color: "#4D5363",
                            fontWeight: '100',
                            fontSize: 12,
                            fontFamily: "PingFangSC-Medium"
                        },
                        padding: [20, 10, 0, 20]
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
                this.barLineFrom = barLineFrom;
                this.barFrom = barFrom;
                this.genderPieChart = genderPieChart;
                this.carPieChart = carPieChart;
                this.marriedPieChart = marriedPieChart;
            },
            myData() {
                this.barLineFrom.setOption({
                    series: [{
                            name: '人口数',
                            type: 'bar',
                            barWidth: '40%',
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
                this.barFrom.setOption({
                    series: [{
                            name: '人口数',
                            type: 'bar',
                            barWidth: '60%',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                    ]
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
                                        fontSize: '12',
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
                        }
                    ]
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
                                        fontSize: '12',
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
                        }
                    ]
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
                                        fontSize: '12',
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
                        }
                    ]
                })
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
    .rightForm {
        width: 400px; //   background:#ccc;
        border-left: 1px solid #ccc;
        position: absolute;
        right: 0;
        top: 0;
        .rightFormTitle {
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: rgba(28, 36, 56, 0.80);
            letter-spacing: 0;
            line-height: 14px;
            margin: 24px 0 0 18px;
            font-weight: 600;
        }
        .persons {
            font-family: PingFangSC-Medium;
            font-size: 12px;
            color: rgba(28, 36, 56, 0.56);
            letter-spacing: 0;
            line-height: 12px;
            margin: 24px 0 0 18px;
        }
        .personData {
            font-family: HelveticaNeue;
            font-size: 22px;
            color: #2D8CF0;
            letter-spacing: 0;
            line-height: 12px;
            margin: 13px 0 24px 18px;
        }
        .export {
            margin: 0 8px 0 120px;
        }
        .statistics {
            width: 100%;
            height: 32px;
            padding-left: 18px;
            line-height: 32px;
            font-family: PingFangSC-Medium;
            font-size: 12px;
            color: rgba(28, 36, 56, 0.80);
            background: rgba(28, 36, 56, 0.03)
        }
        .pieChart {
            width: 100%;
            height: 270px;
        }
    }
</style>