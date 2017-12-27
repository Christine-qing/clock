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
                var overlay = new inMap.HeatOverlay({
                    style: {
                        normal: {
                            radius: 10, // 半径
                            minOpacity: 0, // 最小透明度
                            maxOpacity: 1, // 最大透明度
                            minValue: 0, // 最   小权重
                            maxValue: 20, // 最大权重
                            minScope: 0, // 最小区间,小于此区间的不显示
                            maxScope: 1 // 最大区间,大于此区间的不显示
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