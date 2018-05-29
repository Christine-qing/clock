<template>
    <div>
    <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="barChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                barChart: null,
            }
        },
        mounted() {
            this.initBarchart()
            this.chart()
        },
        methods: {
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
                        }
                    ],
                })
                this.barChart = barChart
            },
            chart() {
                this.barChart.setOption({
                    series: [{
                            name: '人口数',
                            type: 'bar',
                            barWidth: '20%',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                    ]
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