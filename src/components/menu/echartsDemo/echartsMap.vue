<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="mapChart" :style="{width: '600px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import china from 'echarts/map/js/china.js';
    // import test from '../../../javascripts/'
    import world from 'echarts/map/json/world.json'

echarts.registerMap('world', world)
    export default {
        name: "",
        data() {
            return {
                mapChart: null,
            }
        },
        props: {
            msg: ""
        },
        mounted() {
            this.initMapchart()
        },
        methods: {
            initMapchart() {
                let chart = this.$echarts.init(document.getElementById('mapChart'))
                // console.log(chart, "2:", china, "3:", test)
                chart.setOption({
                    title: {
                        text: 'iphone销量',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['iphone3', 'iphone4', 'iphone5']
                    },
                    // series: [{
                    //     type: 'map',
                    //     mapType: 'china',
            
                    // }]
                    // series: [{
                    //     type: 'map',
                    //     map: 'china'
                    // }],
                });
            },
        }
    }
</script>

<style scoped>

</style>