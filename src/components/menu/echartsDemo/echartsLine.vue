<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="lineChart" :style="{width: '600px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                lineChart: null,
            }
        },
        props: {
            msg: ""
        },
        mounted() {
            this.initLinechart()
            this.chart()
        },
        methods: {
            initLinechart() {
                let lineChart = this.$echarts.init(document.getElementById('lineChart'))
                lineChart.setOption({
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
                })
                this.lineChart = lineChart;
            },
            chart() {
                this.lineChart.setOption({
                    series: [{
                        name: '最低气温',
                        type: 'line',
                        data: [20.0, 40.9, 70.0, 40.2, 120.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
        }
    }
</script>

<style scoped>

</style>