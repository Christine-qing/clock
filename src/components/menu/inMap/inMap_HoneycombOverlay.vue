<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div ref='map' id='map'>
        </div>
    </div>
</template>

<script>
    import {
        marker
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
            // this.addDotOverlay();
        },
        methods: {
            initMap() {
                let dom = this.$refs.map;
                this.inmap = new inMap.Map({
                    id: dom,
                    skin: "Blueness", //Blueness WhiteLover  Blueness
                    center: [105.403119, 38.028658],
                    zoom: {
                        value: 5,
                        show: true,
                        max: 18,
                        min: 3
                    },
                });
                this.inmap.getMap().enableScrollWheelZoom();
                var overlay = new inMap.HoneycombOverlay({
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
                            size:20,
                            padding: 1
                        },
                    // colors: ["#7EF3D4", "#49EEC3", "#10E9B0", "#0ECA9C", "#0CAA88"]
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
                    data: marker
                });
                this.inmap.add(overlay);
                // overlay.setPoints(marker);
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