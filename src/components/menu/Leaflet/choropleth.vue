<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="mapid"></div>
    </div>
</template>

<script>
    import leaflet from "leaflet";
    import {
        statesData
    } from '../../../statesData';
    export default {
        name: "",
        data() {
            return {
                mymap: null,
                geojson: null,
            };
        },
        components: {},
        mounted() {
            this.init();
            this.addInfo()
        },
        methods: {
            init() {
                this.mymap = L.map("mapid", {
                    center: [37.8, -96],
                    zoom: 5,
                });
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    id: 'mapbox.light'
                }).addTo(this.mymap);
                this.geojson = L.geoJson(statesData, {
                    style: this.style,
                    onEachFeature: this.onEachFeature
                }).addTo(this.mymap);
            },
            getColor(d) {
                return d > 1000 ? '#800026' :
                    d > 500 ? '#BD0026' :
                    d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                    d > 50 ? '#FD8D3C' :
                    d > 20 ? '#FEB24C' :
                    d > 10 ? '#FED976' :
                    '#FFEDA0';
            },
            style(feature) {
                return {
                    fillColor: this.getColor(feature.properties.density),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            },
            highlightFeature(e) {
                var layer = e.target;
                layer.setStyle({
                    weight: 5,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.7
                });
                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront();
                }
            },
            resetHighlight(e) {
                this.geojson.resetStyle(e.target);
            },
            zoomToFeature(e) {
                this.mymap.fitBounds(e.target.getBounds());
            },
            onEachFeature(feature, layer) {
                layer.on({
                    mouseover: this.highlightFeature,
                    mouseout: this.resetHighlight,
                    click: this.zoomToFeature
                });
            },
            addInfo() {
                this.mymap.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');
                var legend = L.control({
                    position: 'bottomright'
                });
                var _this=this.getColor;
                legend.onAdd = function(mymap) {
                    var div = L.DomUtil.create('div', 'info legend'),
                        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                        labels = [],
                        from, to;
                    for (var i = 0; i < grades.length; i++) {
                        from = grades[i];
                        to = grades[i + 1];
                        labels.push(
                            '<i style="background:' + _this(from + 1) + '"></i> ' +
                            from + (to ? '&ndash;' + to : '+'));
                    }
                    div.innerHTML = labels.join('<br>');
                    return div;
                };
                legend.addTo(this.mymap);
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
    .info {
        padding: 6px 8px;
        font: 14px/16px Arial, Helvetica, sans-serif;
        background: white;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }
    .info h4 {
        margin: 0 0 5px;
        color: #777;
    }
    .legend {
        text-align: left;
        line-height: 18px;
        color: #555;
    }
    .legend i {
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 8px;
        opacity: 0.7;
    }
</style>











