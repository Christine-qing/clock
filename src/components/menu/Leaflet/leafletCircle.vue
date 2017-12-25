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
      //   this.addMarker();
      this.addCircle();
      this.addPolygon();
    },
    methods: {
      init() {
        this.mymap = L.map("mapid", {
          center: [39.92884774583607, 116.43958328428411],
          zoom: 16,
        });
        L.tileLayer(
          "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
            maxZoom: 18,
            id: "mapbox.streets"
          }
        ).addTo(this.mymap);
        // this.mymap.on('click', this.onMapClick);
      },
      addMarker() {
        L.marker([39.92884774583607, 116.43958328428411]).addTo(this.mymap);
      },
      addCircle() {
        L.circle([39.930774583607, 116.43958328428411], {
          color: 'blue',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 100
        }).addTo(this.mymap);
      },
      addPolygon() {
        var value = [
          [39.92884774583607, 116.43958328428411],
          [39.92781673224431, 116.43956350248654],
          [39.927820642767266, 116.43926266087253],
          [39.92800397779957, 116.43925750104633],
          [39.928017933950166, 116.43811644510318],
          [39.928284886148525, 116.43810372451321],
          [39.92829360662916, 116.43782998246394],
          [39.92873351262841, 116.43782525059544],
          [39.92873653189048, 116.43747003278285],
        ]
        L.polygon(value).addTo(this.mymap);
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











