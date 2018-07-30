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
                    this.initData();
                },
                deep: true
            },
            'yAxisData': {
                handler: function(val, oldVal) {
                    this.initData();
                },
                deep: true
            },
            'seriesData': {
                handler: function(val, oldVal) {
                    this.initData(val);
                },
                deep: true
            },
            'pieSeriesData': {
                handler: function(val, oldVal) {
                    this.initData(val);
                },
                deep: true
            },
        },
        mounted() {
            this.initData();
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
                    this.option.series.barWidth = val.barWidth
                    this.option.series.type = val.type
                } else {
                    this.setData()
                    this.option.series.barWidth = "20%"
                    this.option.series.type = "bar"
                }
                this.myChart.setOption(this.option, true);
            },
             // chart赋值
            setData() {
                this.option.xAxis = this.xAxisData
                this.option.yAxis = this.yAxisData
                this.option.series.data = this.seriesData.data
            },
        }
    }
</script>

<style scoped>

</style>