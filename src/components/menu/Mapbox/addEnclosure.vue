<template>
    <div>
        <div id='map'>
            <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图
        </div>
    </div>
</template>

<script>
    import mapboxgl from "mapbox-gl";
    export default {
        name: "",
        data() {
            return {
                map: null,
                monument: [116.4833858013153, 39.929607404976734]
            };
        },
        components: {},
        mounted() {
            mapboxgl.accessToken =
                "pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw";
            this.init();
            this.addLine();
        },
        methods: {
            init() {
                this.map = new mapboxgl.Map({
                    container: "map", // container id
                    style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
                    center: this.monument,
                    zoom: 10,
                    minZoom: 0,
                    maxZoom: 22,
                    bearingSnap: 7,
                    pitchWithRotate: true,
                    attributionControl: true
                    //  interactive: false  //false 关闭交互行为，显示静态图片
                });
            },
            addLine() {
                var red = "#F7455D";
                var blue = "#33C9EB";
                var _this = this.map;
                this.map.on("load", function() {
                    _this.addLayer({
                        id: "lines",
                        type: "line",
                        source: {
                            type: "geojson",
                            data: {
                                type: "FeatureCollection",
                                features: [{
                                        type: "Feature",
                                        properties: {
                                            color: red
                                        },
                                        geometry: {
                                            type: "Polygon",
                                            coordinates: [
                                                [
                                                    [
                                                        476.2181854248047,
                                                        39.99342964441351
                                                    ],
                                                    [
                                                        476.21406555175776,
                                                        39.98027708862265
                                                    ],
                                                    [
                                                        476.2120056152344,
                                                        39.96080665909226
                                                    ],
                                                    [
                                                        476.2010192871093,
                                                        39.92395554100352
                                                    ],
                                                    [
                                                        476.19277954101557,
                                                        39.8928799002948
                                                    ],
                                                    [
                                                        476.1955261230468,
                                                        39.87338459498892
                                                    ],
                                                    [
                                                        476.20513916015625,
                                                        39.85072092501597
                                                    ],
                                                    [
                                                        476.22093200683594,
                                                        39.842286020743394
                                                    ],
                                                    [
                                                        476.2360382080078,
                                                        39.83543189797994
                                                    ],
                                                    [
                                                        476.24908447265625,
                                                        39.82119422647453
                                                    ],
                                                    [
                                                        476.25732421875,
                                                        39.79534795320513
                                                    ],
                                                    [
                                                        476.26007080078125,
                                                        39.787961519016065
                                                    ],
                                                    [
                                                        476.260757446289,
                                                        39.776880380637024
                                                    ],
                                                    [
                                                        476.27449035644526,
                                                        39.77371401334739
                                                    ],
                                                    [
                                                        476.2820434570312,
                                                        39.774769485295465
                                                    ],
                                                    [
                                                        476.2861633300781,
                                                        39.7752972152002
                                                    ],
                                                    [
                                                        476.29508972167963,
                                                        39.7784635096575
                                                    ],
                                                    [
                                                        476.3033294677734,
                                                        39.7774080943568
                                                    ],
                                                    [
                                                        476.3184356689453,
                                                        39.774769485295465
                                                    ],
                                                    [
                                                        476.32598876953125,
                                                        39.7752972152002
                                                    ],
                                                    [
                                                        476.35414123535156,
                                                        39.772130775078956
                                                    ],
                                                    [
                                                        476.3671875,
                                                        39.768436410838426
                                                    ],
                                                    [
                                                        476.37062072753906,
                                                        39.7631584037253
                                                    ],
                                                    [
                                                        476.37542724609375,
                                                        39.76051924844647
                                                    ],
                                                    [
                                                        476.3960266113281,
                                                        39.76051924844647
                                                    ],
                                                    [
                                                        476.4070129394531,
                                                        39.76526965512217
                                                    ],
                                                    [
                                                        476.42005920410156,
                                                        39.77424175134454
                                                    ],
                                                    [
                                                        476.4282989501953,
                                                        39.78690624938622
                                                    ],
                                                    [
                                                        476.4385986328125,
                                                        39.79007200971702
                                                    ],
                                                    [
                                                        476.45164489746094,
                                                        39.7921824356723
                                                    ],
                                                    [
                                                        476.4791107177734,
                                                        39.81117335556963
                                                    ],
                                                    [
                                                        476.5010833740235,
                                                        39.821721600259394
                                                    ],
                                                    [
                                                        476.52305603027344,
                                                        39.836486422931394
                                                    ],
                                                    [
                                                        476.53198242187494,
                                                        39.85072092501597
                                                    ],
                                                    [
                                                        476.5367889404297,
                                                        39.87127666240552
                                                    ],
                                                    [
                                                        476.5367889404297,
                                                        39.90288884886166
                                                    ],
                                                    [
                                                        476.53266906738287,
                                                        39.93185387996173
                                                    ],
                                                    [
                                                        476.5223693847656,
                                                        39.95343802330847
                                                    ],
                                                    [
                                                        476.5086364746093,
                                                        39.97185812402583
                                                    ],
                                                    [
                                                        476.4852905273438,
                                                        39.991851471423466
                                                    ],
                                                    [
                                                        476.46125793457026,
                                                        40.01762373035351
                                                    ],
                                                    [
                                                        476.4173126220703,
                                                        40.019201307686785
                                                    ],
                                                    [
                                                        476.3658142089844,
                                                        40.019201307686785
                                                    ],
                                                    [
                                                        476.32736206054693,
                                                        40.019201307686785
                                                    ],
                                                    [
                                                        476.28959655761713,
                                                        40.01289077952615
                                                    ],
                                                    [
                                                        476.2696838378907,
                                                        40.005001798743315
                                                    ],
                                                    [
                                                        476.24908447265625,
                                                        40.00447583427404
                                                    ],
                                                    [
                                                        476.2181854248047,
                                                        39.99342964441351
                                                    ]
                                                ]
                                            ]
                                        }
                                    },
                                ]
                            }
                        },
                        paint: {
                            "line-width": 3,
                            "line-color": {
                                type: "identity",
                                property: "color"
                            }
                        }
                    });
                });
            }
        }
    };
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