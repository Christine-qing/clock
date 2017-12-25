<template>
  <div class="lide">
   <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
    <div id="map" class="map_contaner"></div>
    <div id="pannel" class="contro_panel_button contro_panel_button_bc">
      <input type="button" class="button" value="添加点标注" @click="toggleAddMarker()">&nbsp;
      <input type="button" class="button" value="九宫格标注" @click="toggleUpdateMarker()">
      <input type="button" class="button" value="删除点标注" @click="toggleRemoveMarker()" style="margin-right:80px">
    </div>
    <div class="contro_panel contro_panel_position_bc">
    </div>
  </div>
</template>
<script>
  export default {
    name: "lide",
    data() {
      return {
        map: null,
        marker: null,
        marke: null,
        count: 0,
        markers: [],
        overlays: [],
      }
    },
    mounted() {
      this.initMap()
    },
    methods: {
      initMap() {
        this.map = new IMAP.Map("map", {
          minZoom: 4, //最小地图级别
          maxZoom: 18, //最大地图级别
          zoom: 12, //初始化级别
          center: new IMAP.LngLat(116.40976, 39.90131) //中心点坐标
        })
      },
      // 随机打点
      clickEvent(event) {
        let marker;
        if (this.map) {
          // toggleRemoveMarker(); //删除点标注
          let opts = new IMAP.MarkerOptions();
          opts.anchor = IMAP.Constants.BOTTOM_CENTER;
          opts.icon = new IMAP.Icon(IMAP.MapConfig.API_REALM_NAME + "images/point_1.png", {
            "size": new IMAP.Size(35, 30),
            "offset": new IMAP.Pixel(5, 0)
          });
          let lnglat = new IMAP.LngLat(event.lnglat.lng, event.lnglat.lat);
          if (lnglat) {
            marker = new IMAP.Marker(lnglat, opts);
            this.map.getOverlayLayer().addOverlay(marker, true);
            this.overlays.push(marker);
          }
        }
        this.marker = marker
      },
      //添加点标注
      toggleAddMarker() {
        if (this.map) {
          this.toggleRemoveMarker()
          this.map.addEventListener("click", this.clickEvent, false);
        }
      },
      //九宫格标注
      toggleUpdateMarker() {
        // this.map.removeEventListener("click",this.clickEvent,false);  
        if (!this.marker) return;
        let lat = this.marker.a.position.lat;
        let lng = this.marker.a.position.lng;
        var markers = [];
        var positions = [
            [lng, lat + 0.01],
            [lng, lat - 0.01],
            [lng + 0.01, lat],
            [lng + 0.01, lat + 0.01],
            [lng + 0.01, lat - 0.01],
            [lng - 0.01, lat],
            [lng - 0.01, lat + 0.01],
            [lng - 0.01, lat - 0.01]
          ],
          lnglat;
        for (var i = 0, len = positions.length; i < len; i++) {
          var opts = new IMAP.MarkerOptions();
          opts.anchor = IMAP["Constants"]["BOTTOM_CENTER"];
          opts.icon = new IMAP.Icon(IMAP.MapConfig.API_REALM_NAME + "images/point_1.png", {
            "size": {
              "width": 34,
              "height": 30
            },
            "offset": {
              "x": 1,
              "y": 0
            }
          });
          lnglat = positions[i]
          var marker = new IMAP.Marker(new IMAP.LngLat(lnglat[0], lnglat[1]), opts);
          markers.push(marker);
        }
        this.map.getOverlayLayer().addOverlays(markers, true);
        this.markers.push(markers)
      },
      // 删除标注
      toggleRemoveMarker() {
        if (this.overlays.length) {
          for (var i = 0; i < this.overlays.length; i++) {
            this.map.getOverlayLayer().removeOverlay(this.overlays[i]);
          }
          if (this.markers.length) {
            for (var i = 0; i < this.markers.length; i++) {
              for (var y = 0; y < this.markers[i].length; y++) {
                this.map.getOverlayLayer().removeOverlay(this.markers[i][y]);
              }
            }
          }
          this.markers.length = 0;
          this.overlays.length = 0
        }
      }
    }
  }
</script>

<style scoped>

</style>