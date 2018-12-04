<template>
    <div>
        <div ref="chart" :style="{width: '500px', height: '300px'}"></div>
        <!-- </div> -->
    </div>
</template>

<script>
    import echartsConfig from './echartsCommon.js'
    export default {
        props: {
            xAxisData: {
                type: Object,
                default: function() {
                    return {};
                }
            },
            yAxisData: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            seriesData: {
                type: Object,
                default: function() {
                    return {};
                }
            },
            pieSeriesData: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            chartType: {
                type: String,
                default: function() {
                    return ""
                }
            }
        },
        name: "",
        data() {
            return {
                id: null,
                myChart: null,
                option: null,
            }
        },
        watch: {
            //  监听数据改变
            'xAxisData': {
                handler: function(val, oldVal) {
                    debugger
                    this.initData(val);
                },
                deep: true
            },
            'yAxisData': {
                handler: function(val, oldVal) {
                    debugger
                    // this.initData();
                },
                deep: true
            },
            'seriesData': {
                handler: function(val, oldVal) {
                    debugger
                    this.initData(val);
                },
                deep: true
            },
            'pieSeriesData': {
                handler: function(val, oldVal) {
                    debugger
                    this.initData(val);
                },
                deep: true
            },
        },
        mounted() {
            this.initData();
            debugger
        },
        methods: {
            // 根据类型判断，筛选操作
            initData(val) {
                this.option = echartsConfig.barPortraitOption;
                if (this.option.series.hasOwnProperty('data')) {
                    this.option.series = {}
                }
                if (this.myChart) {
                    window.removeEventListener('resize', this.myChart.resize, false);
                    this.myChart = null;
                }
                this.myChart = this.$echarts.init(this.$refs.chart);
                if (val && val.type) {
                    if (val.type !== "pie") {
                        this.setData()
                    } else {
                        delete this.option.xAxis
                        delete this.option.yAxis
                        delete this.option.series
                        this.option.series = this.pieSeriesData
                    }
                    this.chartsType()
                } else {
                    this.setData()
                    this.chartsType()
                    if (this.chartType === "h_bar") {
                        this.option.xAxis = this.yAxisData
                        this.option.yAxis = this.xAxisData
                    }
                }
                this.myChart.setOption(this.option, true);
            },
            // chart赋值
            setData() {
                this.option.xAxis = this.xAxisData
                this.option.yAxis = this.yAxisData
                this.option.series.data = this.seriesData.data
                this.option.series.barWidth = "20%"
            },
            chartsType() {
                if (this.chartType === "v_bar" || this.chartType === "h_bar") {
                    this.option.series.type = "bar"
                } else {
                    this.option.series.type = this.chartType
                }
            }
        }
    }
</script>

<style scoped>

</style>