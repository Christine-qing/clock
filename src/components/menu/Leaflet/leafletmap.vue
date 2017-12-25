<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="mapid"></div>
    </div>
</template>

<script>
    import leaflet from "leaflet";
    export default {
        name: "",
        data() {
            return {
                mymap: null,
                popup: L.popup(),
            };
        },
        components: {},
        mounted() {
            this.init();
        },
        methods: {
            init() {
                // this.mymap = L.map("mapid", {
                //   center: [39.9, 116.4],
                //   zoom: 12,
                // });
                // L.tileLayer(
                //   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
                //     minZoom:0,
                //     maxZoom: 18,
                //     id: "mapbox.streets"
                //   }
                // ).addTo(this.mymap);
                this.mymap= L.map('mapid').setView([39.9,116.4], 10);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.mymap);
                L.marker([39.9 ,116.4]).addTo(this.mymap)
                    .bindPopup('中国 北京')
                    .openPopup();
            },
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











