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
        zoom: 16,
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
              features: [
                {
                  type: "Feature",
                  properties: {
                    color: red
                  },
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [116.4833858013153, 39.929607404976734],
                      [116.4830961227417, 39.92932776098012],
                      [116.4830746650696, 39.92932776098012],
                      [116.48218417167662, 39.92889558180985],
                      [116.48218417167662, 39.92890193740421],
                      [116.48221099376678, 39.92868372835086],
                      [116.4822163581848, 39.92868372835086],
                      [116.48205006122589, 39.92801003030873]
                    ]
                  }
                },
                {
                  type: "Feature",
                  properties: {
                    color: blue
                  },
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [116.48393028974533, 39.929471820141016],
                      [116.48395174741744, 39.92940826466351],
                      [116.48395174741744, 39.929412501697064],
                      [116.48423874378203, 39.929357420242125],
                      [116.48422533273697, 39.929361657278575],
                      [116.48459815979002, 39.9293425906126],
                      [116.48458743095398, 39.9293447091313],
                      [116.4847564101219, 39.92932776098012],
                      [116.48474299907684, 39.929331998018276],
                      [116.4849334359169, 39.929298101706186],
                      [116.48492807149889, 39.92930022022615],
                      [116.48509705066681, 39.92920488676767],
                      [116.48509168624878, 39.92920912381288],
                      [116.48520433902739, 39.92905870855876],
                      [116.48519897460936, 39.92905870855876],
                      [116.4854403734207, 39.928594749716714],
                      [116.48543500900269, 39.92860534241688],
                      [116.48571664094925, 39.92808206121068],
                      [116.48570591211319, 39.92809689109353],
                      [116.4858346581459, 39.92797189627337],
                      [116.48582661151886, 39.92797825194729],
                      [116.4859634041786, 39.92788503534145],
                      [116.48595803976059, 39.92788927246246],
                      [116.48605459928514, 39.92786596829394]
                    ]
                  }
                }
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