<template>
    <div class="size">
        <div ref="chart" class="size"></div>
    </div>
</template>

<style scoped>
.size {
    width: 100%;
    height: 100%;
}
</style>

<script>
import echarts from "echarts";

export default {
    props: {
        xAxisData: {
            type: Array,
            default: function() {
                return [];
            }
        },
        seriesData: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            myChart: null,
            option: {
                color: ['#43a3fb'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    //formatter: '{b0}<br />{c0}<br /> {c1}%',
                    // formatter: data => {
                    //     let num = this.formatNumber(data[0].data);
                    //     return `<p>${data[0].axisValue}</p><p><span style="color:#277EAB;">●<span><span style="color:#fff">${num}</span><p><p style="color:#fff;"><span style="color:#277EAB;">●<span><span style="color:#fff">${data[1].data}%</span><p>`;
                    // }

                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '26%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],
                        axisTick: {
                            alignWithLabel: true,
                            lineStyle: {
                                color: '#dddee1'
                            }

                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                opacity: 0,

                            }
                        },
                        axisLabel: {
                            interval: '0'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: false,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                opacity: 0,

                            }
                        }
                    },

                ],
                series: [
                    // {
                    //     name: '',
                    //     type: 'bar',
                    //     data: []
                    // },
                    {
                        name: '',
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '{c}%'
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0
                            }
                        },
                        symbol: 'none',
                        data: []
                    }
                ]
            }
        };
    },
    computed: {

    },
    mounted() {
        console.log(this.seriesData,'------');
        console.log(this.xAxisData,'=====');
        this.initData();
    },
    watch: {
        'option': {
            handler: function(val, oldVal) {
                this.initData();
            },
            deep: true
        }
    },
    methods: {
        initData() {
            if (!this.option.hasOwnProperty('series')) {
                return;
            }
            if (this.myChart) {
                window.removeEventListener('resize', this.myChart.resize, false);
                this.myChart.dispose();
                this.myChart = null;
            }
            //console.log(this.seriesData,'------');
            this.option.series[0].data = this.seriesData;
            //this.option.series[1].data = this.seriesData;
            this.option.xAxis[0].data = this.xAxisData;
            //console.log(JSON.stringify(this.option));
            this.myChart = echarts.init(this.$refs.chart);
            window.addEventListener('resize', this.myChart.resize);
            this.myChart.setOption(this.option, true);
            this.myChart.resize();
        },
        beforeDestroy() {
            if (this.myChart) {
                window.removeEventListener('resize', this.myChart.resize, false);
                this.myChart.dispose();
                this.myChart = null;
            }
        },
        // formatNumber(value = '0', currencyType = '') {
        //     let res;
        //     if (value.toString().indexOf('.') === -1) {
        //         res = (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        //     } else {
        //         let prev = value.toString().split('.')[0];
        //         let next = value.toString().split('.')[1] < 10 ? value.toString().split('.')[1] + '0' : value.toString().split('.')[1];
        //         res = (prev || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + next;
        //     }
        //     return currencyType + res;
        // }
    }
}
</script>



