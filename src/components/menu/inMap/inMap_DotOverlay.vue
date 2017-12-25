<template>
    <div ref='map' id='map'>
    </div>
</template>

<script>
    import {
        marker,
        point
    } from '../../../assets/data/inmap_data'
    export default {
        name: "",
        data() {
            return {
                map: null,
            }
        },
        components: {},
        mounted() {
            this.initMap();
        },
        methods: {
            initMap() {
                let dom = this.$refs.map;
                var inmap = new inMap.Map({
                    id: dom,
                    skin: "Blueness", //Blueness WhiteLover
                    center: [105.403119, 38.028658],
                    zoom: {
                        value: 5,
                        show: true,
                        max: 18,
                        min: 5
                    },
                });
                inmap.getMap().enableScrollWheelZoom()
                var overlay = new inMap.DotOverlay({
                    tooltip: {
                        show: true,
                        position: "top",
                        formatter: "{count}",
                        offsets:{
                            top:20
                        }
                    },
                    style: {
                        normal: {
                            backgroundColor: "rgba(200, 200, 50, 1)", // 填充颜色
                            borderColor: "rgba(255,255,255,1)",
                            borderWidth:0.7,
                            size: 5 // 半径
                        },
                        colors: [
                            "rgba(156,200,249,0.7)",
                            "rgba(93,158,247,0.7)",
                            "rgba(134,207,55,0.7)",
                            "rgba(252,198,10,0.7)",
                            "rgba(255,144,0,0.7)",
                            "rgba(255,72,0,0.7)",
                            "rgba(255,0,0,0.7)"
                        ],
                        mouseOver: {
                            backgroundColor: "rgba(200, 200, 200, 1)",
                            borderColor: "rgba(255,255,255,1)",
                            top:"10px",
                            borderWidth: 1
                        },
                        selected: {
                            borderWidth: 1,
                            backgroundColor: "#CC00CC",
                            borderColor: "rgba(255,255,255,1)"
                        }
                    },
                    legend: {
                        show: true,
                        title: "标题"
                    },
                    data: marker,
                });
                inmap.add(overlay);
            }
        }
    }
</script>

<style scoped>
    body,
    html {
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: "微软雅黑";
    }
    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>