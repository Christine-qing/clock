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
            this.addDotOverlay();
        },
        methods: {
            initMap() {
                let dom = this.$refs.map;
                this.inmap = new inMap.Map({
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
                this.inmap.getMap().enableScrollWheelZoom();
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
                        }
                    },
                    data: marker,
                });
                this.inmap.add(overlay);
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
        top: 30px;
        bottom: 0;
        width: 100%;
    }
</style>