<template>
  <div>
   <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
    <div id="map" class="map_contaner"></div>
    <div class="contro_panel_button contro_panel_button_bc">
      <input type="button" class="button" value="添加点标注" @click="toggleAddMarker()">&nbsp;
      <input type="button" class="button" value="删除点标注" @click="toggleRemoveMarker()" style="cursor:move">
      <!--弹出层-->
      <Modal v-model="radiusModal1" @on-ok="ok" @cancel="cancel" title="消费商圈（中心点+半径） 单位（米）">
        <!--内容-->
        <span class="ml30 mr20">消费商圈名称：</span>
        <Input placeholder="请输入商圈名称" style="width:300px"></Input>
        </br>
        </br>
        <span class="ml30">中心点： </span>
        <span>经度：&nbsp;&nbsp;{{pointLat}}&nbsp;&nbsp; &nbsp; &nbsp;  纬度：{{pointLng}}</span>
        <!--滑块-->
        <Slider v-model="range" :step="10" :max="500" @on-input="dataChange" show-input>
        </Slider>
        <Button type="primary" class="peopleCounting" style="margin:30px 0 0 100px;">人流统计</Button>
        <Button type="primary" class="trafficAnalysis" style="margin:30px 0 0 100px;">交通分析</Button>
      </Modal>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        map: null,
        marker: null,
        item: 0,
        poiSearch: null,
        inputVal: "",
        overlays: [],
        circles: [],
        radiusModal1: false,
        range: 500,
        pointLat: 0,
        pointLng: 0,
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
          addEvent: null,
          center: new IMAP.LngLat(116.40976, 39.90131) //中心点坐标
        });
      },
      // 随机打点
      clickEvent(event) {
        let marker;
        this.removeEvent()
        if (this.map) {
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
          }
          this.overlays.push(marker)
        }
        this.marker = marker;
        this.radiusModal1 = true;
        this.doSearch(1)
      },
      //添加点标注
      toggleAddMarker() {
        this.addEvent = this.map.addEventListener(IMAP.Constants.CLICK, this.clickEvent, this.map);
      },
      removeEvent() {
        if (this.map && this.clickEvent) {
          this.map.removeEventListener(this.addEvent);
        }
      },
      // 删除
      toggleRemoveMarker() {
        // 标注
        if (this.overlays.length) {
          for (var i = 0; i < this.overlays.length; i++) {
            this.map.getOverlayLayer().removeOverlay(this.overlays[i]);
          }
          //半径
          for (var y = 0; y < this.circles.length; y++) {
            this.map.getOverlayLayer().removeOverlay(this.circles[y], true);
          }
        };
        this.overlays.length = 0;
        this.circles.length = 0;
      },
      // 画圆
      doSearch(pageNo) {
        if (this.map) {
          //坐标
          let keyword = this.inputVal,
            cx = this.marker.a.position.lng,
            cy = this.marker.a.position.lat;
          //搜索范围，单位:米
          // this.range
          this.addCircle(cx, cy, this.range);
          this.pointLat = cy;
          this.pointLng = cx;
        }
      },
      // 圈范围
      addCircle(lng, lat, range) {
        var opts = new IMAP.CircleOptions();
        opts.fillColor = "#C6FACE";
        opts.fillOpacity = 0.5;
        opts.strokeColor = "#0FD62C";
        opts.strokeOpacity = 1;
        opts.strokeWeight = 3;
        opts.strokeStyle = "solid";
        let circle = new IMAP.Circle(new IMAP.LngLat(lng, lat), range, opts);
        this.circles.push(circle)
        this.map.getOverlayLayer().addOverlay(circle, true);
      },
      ok() {
        this.$Message.info('已保存商圈');
      },
      cancel() {
        this.$Message.info('点击了取消');
      },
      dataChange(item) {
        // this.doSearch(1)
        let circle = this.circles[this.circles.length - 1]
        circle.setRadius(item);
        // this.value1=500
      },
    }
  }
</script>

<style scoped lang="scss">
  .contro_panel_button_bc {
    top: 50px;
    right: 50px;
  }
  .button:active {
    position: relative;
    top: 2px;
  }
  .ivu-select-single .ivu-select-selection {
    top: 5px;
  }
  .contro_panel_button {
    height: 34px;
  }
  .ml30 {
    margin-left: 30px;
  }
  .mr20 {
    margin-right: 20px;
  }
  .peopleCounting .trafficAnalysis {
    margin-left: 100px;
  }
</style>