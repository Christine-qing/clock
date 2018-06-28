<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="barChart" :style="{width: '100%', height: '300px'}"></div>
        <div id="pieChart" :style="{width: '100%', height: '300px'}"></div>
        <Select v-model="model" clearable style="width:200px" @on-change="changeOption">
                       <Option v-for="item in chartList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
        <div id="anyChart" :style="{width: '100%', height: '300px'}"></div>
        <!-- <Scroll :on-reach-bottom="handleReachBottom">
                    <Card dis-hover v-for="(item, index) in 10" :key="index" style="margin: 32px 0">
                        Content {{ item }}
                    </Card>
        </Scroll> -->
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                barChart: null,
                grid: null,
                color: null,
                tooltip: null,
                legend: null,
                xAxis: null,
                yAxis: null,
                barSeries: null,
                lineSeries: null,
                chartList: [{
                    value: "横向柱状图",
                    label: "横向柱状图"
                }, {
                    value: "纵向柱状图",
                    label: "纵向柱状图"
                }, {
                    value: "折线图",
                    label: "折线图"
                }, {
                    value: "圆饼图",
                    label: "圆饼图"
                }],
                model: "",
                anyChart: null
            }
        },
        mounted() {
            this.initChart();
            this.setBardata();
            this.initPiechart();
            this.defaultChart()
        },
        methods: {
            // 根据切换的下拉列表，更改视图类型
            changeOption(val) {
                switch (val) {
                    case "横向柱状图":
                        this.anyChart.setOption({
                            series: this.barSeries,
                            xAxis: this.yAxis,
                            yAxis: this.xAxis,
                        })
                        break;
                    case "纵向柱状图":
                        this.anyChart.setOption({
                            series: this.barSeries,
                            xAxis: this.xAxis,
                            yAxis: this.yAxis,
                        })
                        break;
                    case "折线图":
                        this.anyChart.setOption({
                            series: this.lineSeries,
                            xAxis: this.xAxis,
                            yAxis: this.yAxis,
                        })
                        break;
                    case "圆饼图":
                        this.anyChart.clear();
                        this.anyChart.setOption({
                            grid: this.grid,
                            color: this.color,
                            tooltip: this.tooltip,
                            legend: this.legend,
                            series: this.pieSeries,
                        })
                        break;
                };
            },
            // 默认展示的试图类型
            defaultChart() {
                this.anyChart = this.$echarts.init(document.getElementById('anyChart'));
                this.anyChart.setOption({
                    grid: this.grid,
                    color: this.color,
                    tooltip: this.tooltip,
                    legend: this.legend,
                    series: this.barSeries,
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                })
            },
            // 拿到请求的数据，展示通用配置
            initChart() {
                //通用配置
                this.grid = {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                };
                this.color = ["#2D8CF0", "#99CCFF", "#CC9900", "#FF9999", "#FFCC99", "#3333CC"];
                this.tooltip = {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                };
                this.legend = {
                    data: ['直接访问', '邮件营销', '联盟广告']
                };
                // 请求数据，并保存
                this.xAxis = [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }];
                this.yAxis = [{
                    type: 'value',
                    name: '人口数',
                    min: 0,
                    max: 200,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                }];
                this.barSeries = [{
                    name: '人口数',
                    type: 'bar',
                    barWidth: '20%',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }]
                this.lineSeries = [{
                    name: '人口数',
                    type: 'line',
                    barWidth: '20%',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }]
                this.pieSeries = [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{
                            value: 335,
                            name: '直接访问'
                        },
                        {
                            value: 310,
                            name: '邮件营销'
                        },
                        {
                            value: 234,
                            name: '联盟广告'
                        },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },
            // 单配置饼图
            initPiechart() {
                let pieChart = this.$echarts.init(document.getElementById('pieChart'));
                pieChart.setOption({
                    grid: this.grid,
                    color: this.color,
                    tooltip: this.tooltip,
                    legend: this.legend,
                    series: this.pieSeries,
                })
            },
            // 单配置柱状图
            setBardata() {
                let barChart = this.$echarts.init(document.getElementById('barChart'));
                barChart.setOption({
                    grid: this.grid,
                    color: this.color,
                    tooltip: this.tooltip,
                    legend: this.legend,
                    xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '人口数',
                        min: 0,
                        max: 200,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} 人'
                        }
                    }],
                    series: [{
                        // name: '人口数',
                        type: 'bar',
                        barWidth: '20%',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    }, ]
                })
            },
        }
    }
</script>

<style scoped>
    #main {
        border: 1px solid red;
    }
</style>