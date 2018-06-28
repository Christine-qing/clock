<template>
    <div>
        <div :style="{width: '600px', height: '350px',border:'1px solid #ccc'}">
            <Select v-model="model" clearable style="width:200px;margin-left:100px" @on-change="changeOption">
                 <Option v-for="item in chartList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <br>
            <div ref="chartDOM" :style="{width: '500px', height: '300px'}"></div>
        </div>
    </div>
</template> 

<script>
    import echartsConfig from '../../common/echart/echartsCommon.js'
    export default {
        props: {
            options: Object,
            default: {}
        },
        name: "",
        data() {
            return {
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
                defaults: {
                    id: 'chart-' + (Math.random() * 1000).toFixed(2)
                },
                chartDOM: null,
                chartDOMxAxis: null,
                chartDOMyAxis: null,
                chartDOMseries: null,
                chartDOMlineSeries: null,
                chartDOMpieSeries: null
            }
        },
        components: {},
        mounted() {
            this.barInit();
        },
        methods: {
            changeOption(val) {
                switch (val) {
                    case "横向柱状图":
                        echartsConfig.barPortraitOption.xAxis = this.chartDOMyAxis;
                        echartsConfig.barPortraitOption.yAxis = this.chartDOMxAxis;
                        echartsConfig.barPortraitOption.series = this.chartDOMseries;
                        this.chartDOM.setOption(echartsConfig.barPortraitOption)
                        break;
                    case "纵向柱状图":
                        echartsConfig.barPortraitOption.xAxis = this.chartDOMxAxis;
                        echartsConfig.barPortraitOption.yAxis = this.chartDOMyAxis;
                        echartsConfig.barPortraitOption.series = this.chartDOMseries;
                        this.chartDOM.setOption(echartsConfig.barPortraitOption)
                        break;
                    case "折线图":
                        echartsConfig.barPortraitOption.xAxis = this.chartDOMxAxis;
                        echartsConfig.barPortraitOption.yAxis = this.chartDOMyAxis;
                        echartsConfig.barPortraitOption.series = this.chartDOMlineSeries;
                        this.chartDOM.setOption(echartsConfig.barPortraitOption)
                        break;
                    case "圆饼图":
                        this.chartDOM.clear();
                        echartsConfig.pieOption.series = this.chartDOMpieSeries
                        this.chartDOM.setOption(echartsConfig.pieOption)
                        break;
                };
            },
            //初始化 请求数据 配置echarts
            barInit() {
                this.chartDOM = this.$echarts.init(this.$refs.chartDOM);
                this.chartDOMxAxis = [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                }];
                this.chartDOMyAxis = [{
                    type: 'value',
                    name: '人口数'
                }];
                this.chartDOMseries = [{
                    type: 'bar',
                    barWidth: '20%',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }]
                this.chartDOMlineSeries = [{
                    type: 'line',
                    barWidth: '20%',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }]
                this.chartDOMpieSeries = [{
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
                echartsConfig.barPortraitOption.xAxis = this.chartDOMxAxis;
                echartsConfig.barPortraitOption.yAxis = this.chartDOMyAxis;
                echartsConfig.barPortraitOption.series = this.chartDOMseries;
                this.chartDOM.setOption(echartsConfig.barPortraitOption)
            },
        }
    }
</script>

<style scoped>

</style>