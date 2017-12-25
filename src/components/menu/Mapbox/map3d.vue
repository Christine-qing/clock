<template>
  <div>
    <div id='map'>
      <Button><router-link to="/menuPage">返回菜单列表</router-link></Button> mapBox 地图</div>
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
      }
    },
    components: {},
    mounted() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lLXFpbmciLCJhIjoiY2o5czMwb2d5MGpzbjMycG9vc3p6bWs5aCJ9.xz9vdmwcAZcyFORrJBYQUw';
      this.init()
      this.getData()
    },
    methods: {
      init() {
        this.map = new mapboxgl.Map({
          style: 'mapbox://styles/mapbox/light-v9',
          center: [116.4, 39.9],
          zoom: 18,
          minZoom: 0,
          maxZoom: 22,
          pitch: 45,
          bearing: -17.6,
          container: 'map',
        });
      },
      getData() {
        var _this = this.map;
        this.map.on('load', function() {
          var layers = _this.getStyle().layers.reverse();
          var labelLayerIdx = layers.findIndex(function(layer) {
            return layer.type !== 'symbol';
          });
          var labelLayerId = labelLayerIdx !== -1 ? layers[labelLayerIdx].id : undefined;
          _this.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
              },
              'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
              },
              'fill-extrusion-opacity': .6
            }
          }, labelLayerId);
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
</style>