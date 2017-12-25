<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
         <Button @click="removeIcon">清空marker</Button>
        <div id="mapid">leaflet 地图

           
        </div>
    </div>
</template>

<script>
    import leaflet from "leaflet";
    export default {
        name: "",
        data() {
            return {
                mymap: null
            };
        },
        components: {},
        mounted() {
            this.init();
            this.addIcon()
        },
        methods: {
            init() {
                this.mymap = L.map("mapid", {
                    center: [39.9, 116.4],
                    zoom: 12,
                    zoomControl: true
                });
                // tileLayer: 实例化给定一个URL template选项对象的一个图层对象。
                L.tileLayer(
                    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
                        maxZoom: 18,
                        minZoom: 1,
                        // attribution:
                        //   '地图数据由 &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> 提供, ' +
                        //   '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        //   'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                        id: "mapbox.streets"
                    }
                ).addTo(this.mymap);
            },
            addIcon() {
                var LeafIcon = L.Icon.extend({
                    options: {
                        shadowUrl: 'leaf-shadow.png',
                        iconSize: [46, 50],
                        shadowSize: [50, 64],
                        iconAnchor: [22, 94],
                        shadowAnchor: [4, 62],
                        popupAnchor: [-3, -76] //弹出框所在位置
                    }
                });
                var greenIcon = new LeafIcon({
                        iconUrl: 'static/timg.jpg'
                    }),
                    redIcon = new LeafIcon({
                        iconUrl: 'static/timg.jpg'
                    }),
                    orangeIcon = new LeafIcon({
                        iconUrl: 'static/timg.jpg'
                    });
                L.marker([39.93, 116.45], {
                    //   draggable:true, //可拖动
                    //   opacity:0.6,    //透明度
                }).bindPopup("I am a draggable marker.").addTo(this.mymap)
                L.marker([39.91, 116.43], {
                    // icon: twoIcon
                }).bindPopup("I am a icon.").addTo(this.mymap);
                L.marker([39.8, 116.4], {
                    // icon: threeSIcon
                }).bindPopup("I a icon.").addTo(this.mymap);
            },
            removeIcon(){
                L.marker([39.93, 116.45]).removeFrom(this.mymap);
             
            }
        }
    };
</script>

<style scoped>
    #mapid {
        position: absolute;
        top: 30px;
        bottom: 0;
        width: 100%;
    }
</style>
