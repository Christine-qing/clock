<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div class="lineMenu">
            <Menu mode="horizontal" theme="primary" active-name="1" @on-select="register">
                <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                注册期 1
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                新客户期 2
                </MenuItem>
                <MenuItem name="3">
                <Icon type="stats-bars"></Icon>
                成长期 3
                </MenuItem>
                <MenuItem name="4">
                <Icon type="settings"></Icon>
                稳定期 4
                </MenuItem>
                <MenuItem name="5">
                <Icon type="settings"></Icon>
                休眠期 5
                </MenuItem>
                <MenuItem name="6">
                <Icon type="settings"></Icon>
                流失期 6
                </MenuItem>
                <MenuItem name="7">
                <Icon type="settings"></Icon>
                召回期 7
                </MenuItem>
            </Menu>
            <br>
            <div id="lineChart" :style="{width: '100%', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import echartsConfig from '../../common/echart/echartsCommon.js'
    export default {
        name: "",
        data() {
            return {
                lineChart: null,
                theme1: 'light'
            }
        },
        props: {
            msg: ""
        },
        mounted() {
            this.initLinechart()
            this.register()
        },
        methods: {
            initLinechart() {
                let lineChart = this.$echarts.init(document.getElementById('lineChart'))
                let commonConfig = {
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#59a4f4"],
                    title: {
                        text: '未来一周气温变化',
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 人'
                        }
                    },
                }
                lineChart.setOption(commonConfig)
                this.lineChart = lineChart;
            },
            register(name) {
                if (name === "1" || name === void 0) {
                    this.lineChart.setOption({
                        series: [{
                            name: '最低气温',
                            type: 'line',
                            data: [10.0, 40.9, 70.0, 40.2, 120.6, 76.7, 20, 162.2, 32.6, 20.0, 6.4, 3.3],
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#a8cbf7'
                                    }, {
                                        offset: 1,
                                        color: '#ffffff'
                                    }])
                                }
                            }
                        }]
                    })
                }
                if (name === "2") {
                    this.lineChart.setOption({
                        series: [{
                            name: '最低气温',
                            type: 'line',
                            data: [20.0, 50.9, 40.0, 90.2, 100.6, 10.7, 30, 182.2, 92.6, 20.0, 6.4, 3.3],
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#a8cbf7'
                                    }, {
                                        offset: 1,
                                        color: '#ffffff'
                                    }])
                                }
                            }
                        }]
                    })
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .lineMenu {
        width: 100%;
        height: 400px;
        border: 1px solid red;
        .ivu-menu-primary{
            width:100%;
              background: rgb(226, 226, 226)
        }
    }
    .bg_red {
        background: #ccc;
        height: 100px;
        border: 1px solid blue;
    }
    .ivu-menu-item-active,
    .ivu-menu-item-selected,
    {
        background: #fdfdfe !important;
    }
    .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item,
    .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu {
        width: calc(100% / 7);
        border-right: 1px solid #ccc;
        color: #2b2b2d !important;
        background: rgb(226, 226, 226)
    }
</style>