<template>
  <div>
    <div id="map" class="map_contaner"></div>
    <div id="pannel" class="contro_panel contro_panel_position_bc">
      <div class="content" style="width:200px;">
        <input type="button" value="绘制多边形" name="draw" @click="toggleDrawPolygon()">
        <input type="button" value="开始计算中心点" name="draw" @click="calculation()">
        <!--<input type="radio" id="close" name="draw" onclick="toggleDrawClose()" checked="checked">关闭绘制-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      map: null,
      overlays: [],
      fence: [],
      tool: null,
      fenceModal: [],
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
      this.map.plugin(['IMAP.Tool']); //下载鼠标工具插件 
      // this.toCenter();
    },
    //绘制多边形
    toggleDrawPolygon() {
      this.tool = new IMAP.AreaTool();
      this.map.addTool(this.tool);
      this.tool.title = "双击结束测面";
      this.tool.autoClose = true;
      this.tool.intersect = false;
      this.tool.open();
      this.addoverlayEvt = this.tool.addEventListener(IMAP.Constants.ADD_OVERLAY, function(evt) {
        console.log(this.map.getOverlayLayer().getOverlayById(evt.polygonId).getPath()) //获取坐标
        this.fenceModal = this.map.getOverlayLayer().getOverlayById(evt.polygonId).getPath()
         this.calculation()
      }, this);
      debugger
//   
    },
    //计算多边形的中心点
    calculation() {
    	debugger
      console.log(this.fenceModal)
      var temppolygon = this.fenceModal.map(item => {
        return item.lng + ',' + item.lat + ';'
      });
      //作为接口参数：多边形最后一对坐标与第一个对坐标必须一致,所以需要将第一组坐标再次存入数组末尾一次,做到首尾坐标一致
      temppolygon.push(temppolygon[0]);
      var polygon = temppolygon.join('');
      polygon=polygon.substring(0,polygon.length-1);//删除最后一个封号;
      //临时注释polygon变量
      // var polygon = '116.44238,39.94987;116.57284,39.81819;116.30642,39.80976;116.31741,39.92356;116.44238,39.94987;116.44238,39.94987';
      var polygonLnglats = this.getLnglats(polygon.split(";"));
      polygon += ";" + polygonLnglats[polygonLnglats.length - 1].toString(); //作为接口参数：面最后一对坐标与第一个对坐一致

      this.drawPolygon(polygonLnglats, true);
      debugger
      var url = 'http://api.ishowchina.com/v3/gts' + "/centroid?ak=ec85d3648154874552835438ac6a02b2&coor=" + polygon;
      this.toRequest(url, (result) => {
        if (result.status == "0") {
          var lnglat = result.result.centroid;
          lnglat = new IMAP.LngLat(lnglat.lng, lnglat.lat);
          this.drawMarker(lnglat);
          this.showInfo("此处为中心点", lnglat);
        } else {
          this.showInfo(result.message, polygonLnglats[0]);
        }
      });
    },
    //绘制点
    drawMarker(lnglat) {
      var marker = new IMAP.Marker(lnglat);
      this.map.getOverlayLayer().addOverlays(marker);
      this.overlays.push(marker);
    },
    //绘制面
    drawPolygon(lnglats, bool) {
      var opts = {
        strokeStyle: IMAP.Constants.OVERLAY_LINE_DASHED
      };
      this.overlays.push(new IMAP.Polygon(lnglats, opts));
      this.map.getOverlayLayer().addOverlays(this.overlays, bool);
    },
    //发送请求
    toRequest(url, func) {
      var http = new L.Http.JSONP(url);
      http.on("complete", function(result) {
        func(result);
      });
    },
    showInfo(content, position) {
      var infowindow = new IMAP.InfoWindow(content, {
        offset: new IMAP.Pixel(0, -30),
        size: new IMAP.Size(160, 50),
        position: position,
        type: IMAP.Constants.OVERLAY_INFOWINDOW_DEFAULT
      });
      this.map.getOverlayLayer().addOverlays(infowindow);
      this.overlays.push(infowindow);
    },
    getLnglats(coor) {
      var lnglats = [],
        lnglat;
      for (var i = 0, len = coor.length; i < len; i++) {
        lnglat = coor[i].split(",");
        lnglats.push(new IMAP.LngLat(lnglat[0], lnglat[1]));
      }
      return lnglats;
    }
  }
}

</script>
<style scoped>


</style>
