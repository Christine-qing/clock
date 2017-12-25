<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
        <div id='menu'>
            <input id='basic-v9' type='radio' name='rtoggle' value='basic' checked='checked'>
            <label for='basic'>基础</label>

            <input id='streets-v9' type='radio' name='rtoggle' value='streets'>
            <label for='streets'>街道</label>

            <input id='bright-v9' type='radio' name='rtoggle' value='bright'>
            <label for='bright'>高亮</label>

            <input id='light-v9' type='radio' name='rtoggle' value='light'>
            <label for='light'>浅色</label>

            <input id='dark-v9' type='radio' name='rtoggle' value='dark'>
            <label for='dark'>暗色</label>

            <input id='satellite-v9' type='radio' name='rtoggle' value='satellite'>
            <label for='satellite'>卫星</label>

            <input id='satellite-streets-v10' type='radio' name='rtoggle' value='satellite-streets'>
            <label for='satellite-streets'>卫星+街道</label>

            <input id='navigation-preview-night-v2' type='radio' name='rtoggle' value='navigation-preview'>
            <label for='navigation-preview'>导航预览(夜晚)</label>

            <input id='navigation-preview-day-v2' type='radio' name='rtoggle' value='navigation-preview'>
            <label for='navigation-preview'>导航预览(正常)</label>

            <input id='navigation-guidance-day-v2' type='radio' name='rtoggle' value='navigation-preview'>
            <label for='navigation-preview'>导航指导(正常)</label>

            <input id='navigation-guidance-night-v2' type='radio' name='rtoggle' value='navigation-preview'>
            <label for='navigation-preview'>导航指导(夜晚)</label>

      

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
                monument: [116.4, 39.9],
                inputs: null,
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init()
            this.styleChange()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map', 
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
            switchLayer(layer) {
                var layerId = layer.target.id;
                this.map.setStyle('mapbox://styles/mapbox/' + layerId );
            },
            styleChange() {
                var layerList = document.getElementById('menu');
                var inputs = layerList.getElementsByTagName('input');
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].onclick = this.switchLayer;
                }
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
    #menu {
        position: absolute;
        top: 10px;
        right: 8%;
        background: #fff;
        padding: 2px;
        font-family: 'Open Sans', sans-serif;
    }
</style>