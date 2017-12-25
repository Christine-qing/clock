<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="main" :style="{width: '1000px', height: '300px'}"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                myChart: null,
            }
        },
        mounted() {
            this.initChart()
            this.chart()
        },
        methods: {
            initChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('main'))
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
                            }
                        }
                    ],
                })
                this.myChart = myChart
            },
            chart() {
                this.myChart.setOption({
                    series: [{
                            name: '人口数',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name: '增长率',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                })
            },
        }
    }
</script>

<style scoped>

</style>