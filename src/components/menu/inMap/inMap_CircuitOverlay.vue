<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div ref='map' id='map'>
        </div>
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
                circuitData: [{
                    "geo": [
                        [120.37396060329789, 30.530439105863827],
                        [120.35319588889949, 30.52905382282265],
                        [120.35365520879516, 30.534386412732545],
                        [120.34591991031361, 30.532902214536644],
                        [120.3389366111271, 30.54064291558752],
                        [120.3321960113287, 30.538392715876007],
                        [120.33217401132688, 30.5342472158444],
                        [120.31483030928297, 30.527601213664568],
                        [120.31241580875674, 30.521139013036485],
                        [120.2993002053804, 30.51965540909619],
                        [120.29841970514182, 30.530675608865312],
                        [120.30200920611829, 30.53651121008445],
                        [120.29785840499076, 30.546882608765877],
                    ],
                    "name": "洲泉镇",
                    "id": 50597,
                    "板块": 50597,
                    "count": "3"
                }],
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
                    skin: "Blueness WhiteLover", //Blueness WhiteLover  Blueness
                    center: [120.37396060329789, 30.530439105863827],
                    zoom: {
                        value: 11,
                        show: true,
                        max: 18,
                        min: 5
                    },
                });
                inmap.getMap().enableScrollWheelZoom()
                var overlay = new inMap.CircuitOverlay({
                    style: {
                        normal: {
                            borderColor: "red",
                            borderWidth: 1
                        }
                    },
                    // data:this.circuitData

                });
                inmap.add(overlay);
                overlay.setPoints(this.circuitData);
                // overlay.setZIndex(1000)
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