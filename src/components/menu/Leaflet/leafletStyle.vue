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
                var cities = L.layerGroup();
                L.marker([39.61, 115.02]).bindPopup('This is Littleton, CO.').addTo(cities),
                    L.marker([39.74, 114.99]).bindPopup('This is Denver, CO.').addTo(cities),
                    L.marker([39.73, 114.8]).bindPopup('This is Aurora, CO.').addTo(cities),
                    L.marker([39.77, 115.23]).bindPopup('This is Golden, CO.').addTo(cities);
                var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
                var grayscale = L.tileLayer(mbUrl, {
                        id: 'mapbox.light',
                        attribution: mbAttr
                    }),
                    streets = L.tileLayer(mbUrl, {
                        id: 'mapbox.streets',
                        attribution: mbAttr
                    });
                this.mymap = L.map('mapid', {
                    center: [39.73, 114.99],
                    zoom: 10,
                    layers: [grayscale, cities]
                });
                var baseLayers = {
                   
                    "Streets": streets
                };
                var overlays = {
                    "Cities": cities
                };
                L.control.layers(baseLayers, overlays).addTo(this.mymap);
                
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











