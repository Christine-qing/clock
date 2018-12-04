<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <br> <br>
        <div :style="{width: '600px', height: '350px',border:'1px solid #ccc'}" v-for="(item,index) in getData" :key="index">
            <Select v-model="item.model" style="width:200px;margin-left:100px" @on-change="(value) => changeType(value,item)">
                      <Option v-for="el in item.type" :value="el.value" :key="el.value">{{ el.label }}</Option>
                 </Select>
            <div style="width: 800px;height: 350px;">
                <portrait-charts :xAxisData="item.data.xAxisData" :yAxisData="item.data.yAxisData" :seriesData="item.data.seriesData" :pieSeriesData="item.data.pieSeriesData" :chartType="item.model"></portrait-charts>
            </div>
        </div>
    </div>
</template>

<script>
    import portraitCharts from '../../common/echart/portraitCharts'

    export default {
        name: "",
        data() {
            return {
                getData: [],
                setData: [],
            }
        },
        components: {
            portraitCharts
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let getData = [{
                        id: 0,
                        model: "line",
                        type: [{
                                value: "v_bar",
                                label: "纵向柱状图"
                            },
                            {
                                value: "h_bar",
                                label: "横向柱状图"
                            },
                            {
                                value: "line",
                                label: "线形图"
                            },
                            {
                                value: "pie",
                                label: "饼状图"
                            }
                        ],
                        data: {
                            xAxisData: {
                                type: 'category',
                                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                            },
                            yAxisData: {
                                type: 'value',
                                name: '人口数'
                            },
                            seriesData: {
                                type: "bar",
                                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                            },
                            pieSeriesData: {
                                type: "pie",
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
                            }
                        }
                    },
                    {
                        id: 1,
                        model: "h_bar",
                        type: [{
                                value: "v_bar",
                                label: "纵向柱状图"
                            },
                            {
                                value: "h_bar",
                                label: "横向柱状图"
                            },
                            {
                                value: "line",
                                label: "线形图"
                            },
                            {
                                value: "pie",
                                label: "饼状图"
                            }
                        ],
                        data: {
                            xAxisData: {
                                type: 'category',
                                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                            },
                            yAxisData: {
                                type: 'value',
                                name: '人口数'
                            },
                            seriesData: {
                                type:"bar",
                                data: [3.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                            },
                            pieSeriesData: {
                                type: "pie",
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
                            }
                        }
                    },
                ]
                this.getData=getData
               this.setData = JSON.parse(JSON.stringify(getData))
            
            },
            changeType(val, item) {
                let id = item.id
                switch (val) {
                    case "v_bar":
                        item.data.xAxisData = this.setData[item.id].data.xAxisData
                        item.data.yAxisData = this.setData[item.id].data.yAxisData
                        item.data.seriesData.data = this.setData[item.id].data.seriesData.data
                        item.data.seriesData.barWidth='20%'
                        item.data.seriesData.type = "bar"
                        break;
                    case "h_bar":
                        item.data.xAxisData = this.setData[item.id].data.yAxisData
                        item.data.yAxisData = this.setData[item.id].data.xAxisData
                        item.data.seriesData.data = this.setData[item.id].data.seriesData.data
                        item.data.seriesData.barWidth='20%'
                        item.data.seriesData.type = "bar"
       
                        break;
                    case "line":
 
                        item.data.xAxisData = this.setData[item.id].data.xAxisData
                        item.data.yAxisData = this.setData[item.id].data.yAxisData
                        item.data.seriesData.data = this.setData[item.id].data.seriesData.data
                        item.data.seriesData.type = "line"
                         item.data.seriesData.barWidth='20%'
                        break;
                    case "pie":
                        item.data.seriesData = this.setData[item.id].data.pieSeriesData
                        item.data.seriesData.type ="pie"
                };
            }
        }
    }
</script>

<style scoped>

</style>