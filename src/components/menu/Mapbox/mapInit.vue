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
                monument:[116.4, 39.9]
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init()
            // this.addIcon()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
                    center: this.monument,
                    zoom: 10,
                    minZoom: 0,
                    maxZoom: 24,//0-24
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true,
                    //  interactive: false  //false 关闭交互行为，显示静态图片
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