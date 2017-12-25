<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
        <div class='calculation-box'>
            <p>拖动绘制一个多边形</p>
            <div id='calculated-area'></div>
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
                radius: 20,
                monument: [116.4, 39.9]
            }
        },
        components: {},
        mounted() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
            this.init();
            this.drawnPolygonArea()
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v9',
                    center: this.monument,
                    zoom: 10,
                    draw: null,
                });
                this.map.addControl(new mapboxgl.NavigationControl()); //添加右侧放大缩小按钮
                this.map.addControl(new mapboxgl.FullscreenControl());
            },
            // 拖拽画多边形
            drawnPolygonArea() {
                this.draw = new MapboxDraw({
                    displayControlsDefault: false,
                    controls: {
                        polygon: true,
                        trash: true
                    }
                });
                this.map.addControl(this.draw);
                this.map.on('draw.create', this.updateArea);
                this.map.on('draw.delete', this.updateArea);
                this.map.on('draw.update', this.updateArea);
            },
            updateArea(e) {
                var data = this.draw.getAll();
                var answer = document.getElementById('calculated-area');
                if (data.features.length > 0) {
                    var area = turf.area(data);
                    var rounded_area = Math.round(area * 100) / 100;
                    answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>平方米</p>';
                } else {
                    answer.innerHTML = '';
                    if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
                }
            },
            // 将坐标定位，飞到某地，也可以随机左右平移
        },
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
        background-image: url('http://doc.talkingdata.com/resource/img/favicon.ico');
        background-size: cover;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
    }
    .mapboxgl-popup {
        max-width: 200px;
    }
    #geocoder-container>div {
        min-width: 50%;
        margin-left: 25%;
    }
    /*下面是多边形的样式*/
    .calculation-box {
        height: 100px;
        width: 150px;
        position: absolute;
        bottom: 40px;
        left: 10px;
        background-color: rgba(255, 255, 255, .9);
        padding: 15px;
        text-align: center;
    }
    p {
        font-family: 'Open Sans';
        margin: 0;
        font-size: 13px;
    }
    #fly {
        display: block;
        position: relative;
        margin: 0px auto;
        width: 50%;
        height: 40px;
        padding: 10px;
        border: none;
        border-radius: 3px;
        font-size: 12px;
        text-align: center;
        color: #fff;
        background: #ee8a65;
    }
</style>