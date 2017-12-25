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
      this.addMarker();
      // this.addCircle();
      this.addPolygon();
    },
    methods: {
      init() {
        this.mymap = L.map("mapid", {
          center: [39.9, 116.4],
          zoom: 12,
        });
        L.tileLayer(
          "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
            maxZoom: 18,
            // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            //   '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            //   'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: "mapbox.streets"
          }
        ).addTo(this.mymap);
        this.mymap.on('click', this.onMapClick);
      },
      addMarker() {
        L.marker([39.9, 116.4]).addTo(this.mymap);
      },
      addCircle() {
        L.circle([39.93, 116.45], {
          color: 'blue',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 5000
        }).addTo(this.mymap);
      },
      addPolygon() {
        L.polygon([
          [39.981, 116.43],
          [39.992, 116.45],
          [39.994, 116.41]
        ]).addTo(this.mymap);
      },
      onMapClick(e) {
        this.popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(this.mymap);
        L.marker(e.latlng).addTo(this.mymap);
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











