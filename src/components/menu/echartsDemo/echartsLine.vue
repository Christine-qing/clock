<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="lineChart" :style="{width: '100%', height: '100%'}"></div>
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
                    color: ["#2D8CF0"],
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
                console.log(this.msg)
                this.lineChart.setOption({
                    series: [{
                        name: '最低气温',
                        type: 'line',
                        data:this.msg
                    }]
                })
            }
        }
    }
</script>

<style scoped>

</style>