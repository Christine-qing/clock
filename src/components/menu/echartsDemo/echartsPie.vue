<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="sexPieChart" :style="{width: '200px', height: '300px'}"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "",
        data() {
            return {
                sexPieChart: null,
            }
        },
        mounted() {
            this.initsexPiechart()
            this.chart()
        },
        methods: {
            initsexPiechart() {
                // 基于准备好的dom，初始化echarts实例
                let sexPieChart = this.$echarts.init(document.getElementById('sexPieChart'))
                // 绘制图表
                sexPieChart.setOption({
                    grid: {
                        top: '100',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ["#2D8CF0", "#6DCE67 "],
                    title: {
                        text: '南丁格尔玫瑰图',
                        subtext: '纯属虚构',
                        x: 'center',
                        textStyle: {
                            color: "red"
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
                this.sexPieChart = sexPieChart
            },
            chart() {
                this.sexPieChart.setOption({
                    series: [{
                        name: '男女比例',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
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