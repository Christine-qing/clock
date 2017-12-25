<template>
    <div>
        <div id='map' @load='addData()'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图</div>
    </div>
</template>
<script>
    import mapboxgl from 'mapbox-gl';
    export default {
        name: "",
        data() {
            return {
                map: null,
                monument: [116.4, 39.9]
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init()
            this.addData()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
                    center: this.monument,
                    zoom: 2,
                    minZoom: 0,
                    maxZoom: 22,
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                    //  interactive: false  //false 关闭交互行为，显示静态图片
                });
            },
            addData() {
                debugger
                var _this = this.map
                this.map.on('load', function() {
                    _this.addSource('earthquakes', {
                        "type": "geojson",
                        "data": "../../../assets/data/earthquakes.geojson"
                    });
                    debugger
                    console.log(_this.addSource)
                    
                    _this.addLayer({
                        "id": "earthquakes-heat",
                        "type": "heatmap",
                        "source": "earthquakes",
                        "maxzoom": 9,
                        "paint": {
                            //增加体重的热图基于频率和性能级
                            "heatmap-weight": {
                                "property": "mag",
                                "type": "exponential",
                                "stops": [
                                    [0, 0],
                                    [6, 1]
                                ]
                            },
                            //通过缩放级别增加热图颜色重量
                            //热图强度上的热图重量倍增
                            "heatmap-intensity": {
                                "stops": [
                                    [0, 1],
                                    [9, 3]
                                ]
                            },
                            //热图颜色渐变。域是0（低）到1（高）.
                            //在一个0-Transparancy 0-stop开始颜色渐变颜色
                            //创建模糊效果。
                            "heatmap-color": [
                                "interpolate", ["linear"],
                                ["heatmap-density"],
                                0, "rgba(33,102,172,0)",
                                0.2, "rgb(103,169,207)",
                                0.4, "rgb(209,229,240)",
                                0.6, "rgb(253,219,199)",
                                0.8, "rgb(239,138,98)",
                                1, "rgb(178,24,43)"
                            ],
                            //通过缩放级别调整热图半径
                            "heatmap-radius": {
                                "stops": [
                                    [0, 2],
                                    [9, 20]
                                ]
                            },
                            //从热图圈层的缩放级别过渡
                            "heatmap-opacity": {
                                "default": 1,
                                "stops": [
                                    [7, 1],
                                    [9, 0]
                                ]
                            },
                        }
                    }, 'waterway-label');
                    _this.addLayer({
                        "id": "earthquakes-point",
                        "type": "circle",
                        "source": "earthquakes",
                        "minzoom": 7,
                        "paint": {
                            //大小的圆RAIDUS地震的震级和缩放级别
                            "circle-radius": {
                                "property": "mag",
                                "type": "exponential",
                                "stops": [
                                    [{
                                        zoom: 7,
                                        value: 1
                                    }, 1],
                                    [{
                                        zoom: 7,
                                        value: 6
                                    }, 4],
                                    [{
                                        zoom: 16,
                                        value: 1
                                    }, 5],
                                    [{
                                        zoom: 16,
                                        value: 6
                                    }, 50],
                                ]
                            },
                            //震级彩色圆
                            "circle-color": {
                                "property": "mag",
                                "type": "exponential",
                                "stops": [
                                    [1, "rgba(33,102,172,0)"],
                                    [2, "rgb(103,169,207)"],
                                    [3, "rgb(209,229,240)"],
                                    [4, "rgb(253,219,199)"],
                                    [5, "rgb(239,138,98)"],
                                    [6, "rgb(178,24,43)"]
                                ]
                            },
                            "circle-stroke-color": "white",
                            "circle-stroke-width": 1,
                            //从热图圈层的缩放级别过渡
                            "circle-opacity": {
                                "stops": [
                                    [7, 0],
                                    [8, 1]
                                ]
                            }
                        }
                    }, 'waterway-label');
                });
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }
    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>