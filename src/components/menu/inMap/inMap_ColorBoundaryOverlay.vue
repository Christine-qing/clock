<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div ref='map' id='map'></div>
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
                inmap: null,
            }
        },
        components: {},
        mounted() {
            this.initMap();
            this.addDotOverlay();
        },
        methods: {
            initMap() {
                let dom = this.$refs.map;
                this.inmap = new inMap.Map({
                    id: dom,
                    skin: "Blueness WhiteLover ", //Blueness WhiteLover  Blueness
                    center: [120.88, 30.52],
                    zoom: {
                        value: 11,
                        show: true,
                        max: 18,
                        min: 5
                    },
                });
                this.inmap.getMap().enableScrollWheelZoom()
            },
            addDotOverlay() {
                var overlay = new inMap.DotOverlay({
                    style: {
                        normal: {
                            backgroundColor: "rgba(200, 200, 50, 1)", // 填充颜色
                            shadowColor: "rgba(255, 255, 255, 1)", // 投影颜色
                            shadowBlur: 35, // 投影模糊级数
                            globalCompositeOperation: "lighter", // 颜色叠加方式
                            size: 5 // 半径
                        },
                    },
                    data: marker,
                });
                var overlays = new inMap.BoundaryOverlay({
                    tooltip: {
                        show: true,
                        formatter: function(point) {
                            return (
                                '<div style="white-space: nowrap;z-index: 9999999;transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);background-color: rgb(255, 255, 255);font-style: normal;font-variant: normal;font-weight: normal;font-stretch: normal;font-size: 14px;font-family: &quot;Microsoft YaHei&quot;;line-height: 21px;padding: 5px 15px;left: 350.544px;top: -7px;border-radius: 2px;">' +
                                ' <div class="echart-tool-tips">' +
                                ' <div class="time-line clearfix">' +
                                " </div>" +
                                ' <div class="time-line clearfix">' +
                                ' <span class="time-label">id : </span><span class="time-value">' +
                                point.id + "," +
                                point.count +
                                "</span>" +
                                " </div>" +
                                ' <div class="series-line clearfix">' +
                                ' <span class="circle" style="border-color:#ffd019">板块名称：<span class="series-value" style="color:rgba(204,102,51,1)">' +
                                point.name +
                                "</span></div></div></div>"
                            );
                        },
                        offsets: {
                            top: 15,
                            left: 15
                        },
                        customClass: "customize"
                    },
                    legend: {
                        show: true,
                        title: "幸福指数"
                    },
                    style: {
                        normal: {
                            borderWidth: 1,
                            borderColor: "#e0eefb",
                            backgroundColor: "rgba(255,0,102,1)",
                            label: {
                                show: true, // 是否显示
                                font: "10px bold ",
                                color: "black"
                            }
                        },
                        // 鼠标划过
                        mouseOver: {
                            // backgroundColor: "rgba(0,184,255,0.40)",
                            shadowColor: "rgba(0, 0, 0, 1)",
                            borderColor: "rgba(255,255,255,0.1)",
                            borderWidth: 1
                        },
                        // 是否选中
                        selected: {
                            borderWidth: 1,
                            // backgroundColor: "rgba(51,51,255,0.8)",
                            shadowColor: "rgba(0, 0, 0, 1)",
                            borderColor: "rgba(255,255,255,1)",
                            label: {
                                show: true, // 是否显示
                                font: "12px bold ",
                                color: "#e0eefb"
                            }
                        },
                        splitList: [{
                                //设置区间颜色
                                start: 0,
                                end: 2,
                                backgroundColor: "rgba(255,204,204,1)"
                            },
                            {
                                start: 2,
                                end: 5,
                                backgroundColor: "rgba(255,153,153,1)"
                            },
                            {
                                start: 5,
                                end: 8,
                                backgroundColor: "rgba(255,102,102,1)"
                            },
                            {
                                start: 8,
                                // end: 20,
                                backgroundColor: "rgba(255,51,0,1)"
                            }
                        ]
                    },
                    data: point,
                });
                // inmap.add(overlay);
                this.inmap.add(overlays)
            },
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
        top: 30px;
        bottom: 0;
        width: 100%;
    }
</style>