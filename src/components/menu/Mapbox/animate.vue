<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
        
        <button id='fly' @click='fly()'>Fly</button>
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
            this.search();
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
            // 添加图片
            addImg() {
                // 添加信息窗口 popup
                var popup = new mapboxgl.Popup()
                    .setText('Construction on the Washington Monument began in 1848.');
                var el = document.createElement('div');
                el.id = 'marker';
                // 添加图标
                var marker = new mapboxgl.Marker(el)
                    .setLngLat(this.monument)
                    .setPopup(popup) // sets a popup on this marker
                    .addTo(this.map);
                //当前元素已存在，最后的marker并没有添加到地图
            },
            // poi搜索
            search() {
                var _this = this.map
                var geocoder = new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken
                });
                this.map.addControl(geocoder);
                this.map.on('load', function() {
                    _this.addSource('single-point', {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": []
                        }
                    });
                    _this.addLayer({
                        "id": "point",
                        "source": "single-point",
                        "type": "circle",
                        "paint": {
                            "circle-radius": 10,
                            "circle-color": "#007cbf"
                        }
                    });
                    geocoder.on('result', function(ev) {
                        _this.getSource('single-point').setData(ev.result.geometry);
                    });
                }) //执行时还没监听到style,没有小球
            },
     
       
            // 将坐标定位，飞到某地，也可以随机左右平移
            fly() {
                this.map.flyTo({
                    center: [116.4 + (Math.random() - 0.5) * 10,
                        40
                    ]
                });
            }
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