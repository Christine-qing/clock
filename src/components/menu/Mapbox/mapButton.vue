<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
        <nav id='listing-group' class='listing-group' @change='add'>
            <input type='checkbox' id='scrollZoom' checked='checked'>
            <label for='scrollZoom'>Scroll zoom滚轮</label>

            <input type='checkbox' id='boxZoom' checked='checked'>
            <label for='boxZoom'>Box-zoom矩形放大</label>

            <input type='checkbox' id='dragRotate' checked='checked'>
            <label for='dragRotate'>Drag rotate右键</label>

            <input type='checkbox' id='dragPan' checked='checked'>
            <label for='dragPan'>Drag pan左键</label>

            <input type='checkbox' id='keyboard' checked='checked'>
            <label for='keyboard'>Keyboard键盘控制</label>

            <input type='checkbox' id='doubleClickZoom' checked='checked'>
            <label for='doubleClickZoom'>Double-click双击放大</label>
            
            <!-- <input type='checkbox' id='touchZoomRotate' checked='checked'>
            <label for='touchZoomRotate'>捏合旋转和缩放</label> -->
        </nav>
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
            add(e) {
                var handler = e.target.id;
                if (e.target.checked) {
                    this.map[handler].enable();
                } else {
                    this.map[handler].disable();
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
    .listing-group {
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        border-radius: 3px;
        max-width: 20%;
        color: #fff;
    }
    .listing-group input[type=checkbox]:first-child+label {
        border-radius: 3px 3px 0 0;
    }
    .listing-group label:last-child {
        border-radius: 0 0 3px 3px;
        border: none;
    }
    .listing-group input[type=checkbox] {
        display: none;
    }
    .listing-group input[type=checkbox]+label {
        background-color: #3386c0;
        display: block;
        cursor: pointer;
        padding: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
    .listing-group input[type=checkbox]+label {
        background-color: #3386c0;
        text-transform: capitalize;
    }
    .listing-group input[type=checkbox]+label:hover,
    .listing-group input[type=checkbox]:checked+label {
        background-color: #4ea0da;
    }
    .listing-group input[type=checkbox]:checked+label:before {
        content: '✔';
        margin-right: 5px;
    }
</style>