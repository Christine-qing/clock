<template>
  <div>
    <div id="map" class="map_contaner"> </div>
    <div class="contro_panel_button contro_panel_button_bc">
      <input type="button" name="draw" @click="toggleDrawMarker()" class="button" value="点标注">&nbsp;
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        map: null,
        tool: null,
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
        });
        this.map.plugin(['IMAP.Tool']); //下载鼠标工具插件
      },
      toggleDrawMarker(event) {
        this.tool = new IMAP.MarkerTool(new IMAP.Icon(("http://demo.ishowchina.com/apidemos/sourceLinks/marker.png"), {
          "size": {
            "width": 20,
            "height": 29
          }
        }));
        this.tool.follow = true;
        this.tool.title = "";
        this.tool.autoClose = true;
        this.map.addTool(this.tool);
        this.tool.open();
      }
    }
  }
</script>

<style scoped>
  .contro_panel_button_bc {
    top: 50px;
    right: 50px;
  }
  .contro_panel_button {
    height: 34px;
  }
</style>