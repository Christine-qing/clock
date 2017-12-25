<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
        <pre type='text' id='info'>  </pre>
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
            this.getCoordinate()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
                    center: this.monument,
                    zoom: 10,
                    minZoom: 0,
                    maxZoom: 22,
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                });
            },
            getCoordinate() {
                this.map.on('click', function(e) {
                    document.getElementById('info').innerHTML =
                        // JSON.stringify(e.point) + '<br />' +
                        // e.lngLat is the longitude, latitude geographical position of the event
                        JSON.stringify(e.lngLat);
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
    #info {
        display: block;
        position: relative;
        margin: 0px auto;
        width: 40%;
        padding: 12px;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        text-align: center;
        border:2px solid red;
        color:blue;
        background:white
    }
</style>