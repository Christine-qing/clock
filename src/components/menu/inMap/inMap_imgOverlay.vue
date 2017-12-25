<template>
    <div ref='map' id='map'>
    </div>
</template>

<script>
    import {
        marker,
        
        point
    } from "../../../assets/data/inmap_data";
    import img from "../../../assets/logo.png";
    export default {
        name: "",
        data() {
            return {
                inmap: null
            }
        },
        components: {},
        mounted() {
            this.initMap();
        },
        methods: {
            initMap() {
                let dom = this.$refs.map;

              this.inmap = new inMap.Map({
                    id: dom,
                    skin: "Blueness", //Blueness WhiteLover
                    center:[105.403119, 38.028658],
                    zoom: {
                        value: 5,
                        show: true,
                        max: 18,
                        min: 5
                    },
                });
                this.inmap.getMap().enableScrollWheelZoom()
                var overlay = new inMap.ImgOverlay({
                    tooltip: {
                        show: true,
                        position: "top",
                        formatter: "{count}",
                        offsets:{
                            // top:10,
                            left:12
                        },
                        customClass:"tooltipWidth",
                        
                    },
                    style: {
                        normal: {
                            icon: img,
                            width: 10,
                            height: 10,
                            offsets: {
                                top: "-100%",
                                left: "-50%"
                            }
                        },
                        splitList: [{
                                //设置区间颜色
                                start: 0,
                                end: 2,
                               icon:  img,
                            },
                            {
                                start: 2,
                                end: 5,
                                 icon: img,
                            },
                            {
                                start: 5,
                                end: 7,
                                  icon:  img,
                            },
                            {
                                start: 7,
                                 icon:  img,
                            }
                        ]
                    },
                    data: marker,
                });
                this.inmap.add(overlay);
            }
        }
    }
</script>

<style >
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
    .tooltipWidth{
       border:1px solid black;
       color:"#ccc";
       background:white;

    }
</style>