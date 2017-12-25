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
                var map = L.map('mapid', {
                    minZoom: 0,
                    maxZoom: 18,
                    zoomSnap: 0,
                    zoomDelta: 0.25,
                    zoomControl:true
                });
                var cartodbAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
                var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    attribution: cartodbAttribution
                }).addTo(map);
                var ZoomViewer = L.Control.extend({
                    onAdd: function() {
                        var container = L.DomUtil.create('div');
                        var gauge = L.DomUtil.create('div');
                        container.style.width = '200px';
                        container.style.background = 'rgba(255,255,255,0.5)';
                        container.style.textAlign = 'left';
                        map.on('zoomstart zoom zoomend', function(ev) {
                            gauge.innerHTML = 'Zoom level: ' + map.getZoom();
                        })
                        container.appendChild(gauge);
                        return container;
                    }
                });
                (new ZoomViewer).addTo(map);
                map.setView([0, 0], 0);
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











