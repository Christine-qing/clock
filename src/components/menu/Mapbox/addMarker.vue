<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
            
        </div>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    export default {
        name: "",
        data() {
            return {
                map: null,
                monument: [116.412, 39.9]
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init()
            this.addIcon()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/light-v9', // stylesheet location
                    center: this.monument,
                    zoom: 11,
                    minZoom: 0,
                    maxZoom: 24, //0-24
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                });
            },
            addIcon() {
                var _this = this.map;
                var data = [
                    [116.412, 39.9],
                    [116.413, 39.9],
                    [116.414, 39.9],
                    [116.415, 39.9],
                    [116.415, 39.91],
                    [116.416, 39.92],
                    [116.4165, 39.93],
                    [116.416, 39.90],
                    [116.416, 39.95],
                    [116.416, 39.96],
                    [116.416, 39.97],
                    [116.416, 39.98],
                    [116.416, 39.99],
                    [116.416, 39.88],
                    [116.416, 39.934],
                    [116.416, 39.964],
                    [116.416, 39.935],
                    [116.416, 39.9343],
                    [116.416, 39.9345],
                ];
             
                var features=[]
                this.map.on('load', function() {
                    for (var i = 0; i < data.length; i++) {
                        features.push( {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "Point",
                                "coordinates": data[i]
                            }
                        })
                    }
                    _this.addLayer({
                        "id": "symbols",
                        "type": "symbol",
                        "source": {
                            "type": "geojson",
                            "data": {
                                "type": "FeatureCollection",
                                "features": features
                               
                            }
                        },
                        "layout": {
                            "icon-image": "rocket-15",
                            "icon-size": 1.2,
                            // "icon-color":"red",
                        }
                    });
                })
            },
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
    #marker {
        /* background-image: url('/mapbox-gl-js/assets/washington-monument.jpg'); */
        width: 50px;
        height: 50px;
        background: yellow;
        background-size: cover;
        border-radius: 50%;
        cursor: pointer;
    }
</style>