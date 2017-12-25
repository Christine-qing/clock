<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
            <Button @click="addIcon"> 添加marker</Button>
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
                monument: [116.4,39.9]
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
                    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
                    center: this.monument,
                    zoom: 10,
                    minZoom: 0,
                    maxZoom: 24, //0-24
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                    //  interactive: false  //false 关闭交互行为，显示静态图片
                });
            },
            addIcon() {
                // debugger
                //  var el = document.createElement('div');
                // el.id = 'marker';
                // var marker = new mapboxgl.Marker()
                //     .setLngLat(this.monument)
                //     .addTo(this.map);
                // -------------------------------------
                // // create the popup
                // var popup = new mapboxgl.Popup()
                //     .setText('Construction on the Washington Monument began in 1848.');
                // // create DOM element for the marker
                // var el = document.createElement('div');
                // el.id = 'marker';
                // // create the marker
                // new mapboxgl.Marker(el)
                //     .setLngLat(this.monument)
                //     .setPopup(popup) // sets a popup on this marker
                //     .addTo(this.map);
                // -------------------------
                var _this=this.map;
                this.map.on('load', function() {
                    _this.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
                        if (error) throw error;
                        _this.addImage('cat', image);
                        _this.addLayer({
                            "id": "points",
                            "type": "symbol",
                            "source": {
                                "type": "geojson",
                                "data": {
                                    "type": "FeatureCollection",
                                    "features": [{
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": [116.4,39.9]
                                        }
                                    }]
                                }
                            },
                            "layout": {
                                "icon-image": "cat",
                                "icon-size": 0.1
                            }
                        });
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