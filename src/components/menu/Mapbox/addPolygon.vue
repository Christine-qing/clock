<template>
    <div>
        <div id='map'>
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
                monument:[-67.13734351262877, 45.137451890638886],
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init();
            this.addPolygon();
            // this.addIcon()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
                    center: this.monument,
                    zoom: 5,
                    minZoom: 0,
                    maxZoom: 24, //0-24
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                    //  interactive: false  //false 关闭交互行为，显示静态图片
                });
            },
            addPolygon() {
                 var _this = this.map
                this.map.on('load', function() {
                    //添加面
                   _this.addLayer({
                        'id': 'maine',
                        'type': 'fill',
                        'source': {
                            'type': 'geojson',
                            'data': {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': [
                                        [
                                            [-67.13734351262877, 45.137451890638886],
                                            [-66.96466, 44.8097],
                                            [-68.03252, 44.3252],
                                            [-69.06, 43.98],
                                            [-70.11617, 43.68405],
                                            [-70.64573401557249, 43.090083319667144],
                                            [-70.75102474636725, 43.08003225358635],
                                            [-70.79761105007827, 43.21973948828747],
                                            [-70.98176001655037, 43.36789581966826],
                                            [-70.94416541205806, 43.46633942318431],
                                            [-71.08482, 45.3052400000002],
                                            [-70.6600225491012, 45.46022288673396],
                                            [-70.30495378282376, 45.914794623389355],
                                            [-70.00014034695016, 46.69317088478567],
                                            [-69.23708614772835, 47.44777598732787],
                                            [-68.90478084987546, 47.184794623394396],
                                            [-68.23430497910454, 47.35462921812177],
                                            [-67.79035274928509, 47.066248887716995],
                                            [-67.79141211614706, 45.702585354182816],
                                            [-67.13734351262877, 45.137451890638886]
                                        ]
                                    ]
                                }
                            }
                        },
                        'layout': {},
                        'paint': {
                            'fill-color': 'red',
                            'fill-opacity': 0.3,
                            
                        }
                    }),
                    //添加线
                            _this.addLayer({
                        'id': 'maines',
                        'type': 'line',
                        'source': {
                            'type': 'geojson',
                            'data': {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Polygon',
                                    'coordinates': [
                                        [
                                            [-67.13734351262877, 45.137451890638886],
                                            [-66.96466, 44.8097],
                                            [-68.03252, 44.3252],
                                            [-69.06, 43.98],
                                            [-70.11617, 43.68405],
                                            [-70.64573401557249, 43.090083319667144],
                                            [-70.75102474636725, 43.08003225358635],
                                            [-70.79761105007827, 43.21973948828747],
                                            [-70.98176001655037, 43.36789581966826],
                                            [-70.94416541205806, 43.46633942318431],
                                            [-71.08482, 45.3052400000002],
                                            [-70.6600225491012, 45.46022288673396],
                                            [-70.30495378282376, 45.914794623389355],
                                            [-70.00014034695016, 46.69317088478567],
                                            [-69.23708614772835, 47.44777598732787],
                                            [-68.90478084987546, 47.184794623394396],
                                            [-68.23430497910454, 47.35462921812177],
                                            [-67.79035274928509, 47.066248887716995],
                                            [-67.79141211614706, 45.702585354182816],
                                            [-67.13734351262877, 45.137451890638886]
                                        ]
                                    ]
                                }
                            }
                        },
                        'layout': {},
                        'paint': {
                            'line-color': 'yellow',
                            'line-width': 3,
                            
                        }
                    });
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