<template>
    <div>
        <div class="box" v-for="(item,index) in chartData">
            <Select v-model="item.model" style="width:200px" @on-change="(value) => changeType(value,item)">
                    <Option v-for="el in item.type" :value="el.value" :key="el.value">{{ el.label }}</Option>
                </Select>
            <div style="width: 800px;height: 350px;">
                <commonChart :xAxisData="item.data.xAxisData" :seriesData="item.data.seriesData"></commonChart>
            </div>
        </div>
    </div>
</template>

<script>
    import commonChart from "./test1.vue";
    export default {
        components: {
            commonChart
        },
        data() {
            return {
                chartData: []
            };
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.chartData = [{
                        model: "line",
                        type: [{
                                value: "line",
                                label: "线形图"
                            },
                            {
                                value: "bar",
                                label: "柱状图"
                            },
                            {
                                value: "pie",
                                label: "饼状图"
                            }
                        ],
                        data: {
                            xAxisData: [1, 2, 3, 4, 5, 6, 7],
                            seriesData: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    },
                    {
                        model: "bar",
                        type: [{
                                value: "line",
                                label: "线形图"
                            },
                            {
                                value: "bar",
                                label: "柱状图"
                            }
                            // {
                            //   value: "pie",
                            //   label: "饼状图"
                            // }
                        ],
                        data: {
                            xAxisData: [1, 2, 3, 4, 5, 6, 7],
                            seriesData: [800, 932, 901, 934, 1290, 1330, 1320]
                        }
                    }
                ]
            },
            changeType(val, item) {
                console.log(val, item);
            }
        }
    };
</script>

<style>
    .box {
        margin: 10px;
    }
</style>
