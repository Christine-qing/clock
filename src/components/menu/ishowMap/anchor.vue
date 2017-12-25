<template>
	<div>
	 <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
		<div id="map" class="map_contaner"></div>
		<div class="contro_panel_button contro_panel_button_bc">
			<input type="button" class="button" value="添加锚点" @click="toggleAddMarker()">
			<input type="button" class="button" value="删除锚点" @click="toggleRemoveMarker()">
		</div>
		<Modal v-model="anchorModal" @on-ok="ok" @cancel="cancel" title="消费商圈（锚点工具）">
			<span class="ml30 mr20">消费商圈名称：</span>
			<Input placeholder="请输入商圈名称" style="width:300px"></Input>
			</br>
			</br>
			<span class="ml30">中心点： </span>
			<span>经度：&nbsp;&nbsp;{{pointLat}}&nbsp;&nbsp; &nbsp; &nbsp;  纬度：{{pointLng}}</span>
			<Button type="primary" class="peopleCounting" style="margin:30px 0 0 100px;">人流统计</Button>
			<Button type="primary" class="trafficAnalysis" style="margin:30px 0 0 100px;">交通分析</Button>
		</Modal>
	</div>
</template>
<script>
	export default {
		name: "",
		data() {
			return {
				map: null,
				overlays: [],
				anchorModal: false,
				addMarker: null,
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
					center: new IMAP.LngLat(116.40976, 39.90131) //中心点坐标
				})
			},
			toggleAddMarker() {
				this.addEvent = this.map.addEventListener(IMAP.Constants.CLICK, this.clickEvent, this.map);
				this.cursorStyle = true;
			},
			// 删除标注
			toggleRemoveMarker() {
				if(this.overlays.length) {
					for(var i = 0; i < this.overlays.length; i++) {
						this.map.getOverlayLayer().removeOverlay(this.overlays[i]);
					}
				}
			},
			// 删除点击事件
			removeEvent() {
				if(this.map && this.clickEvent) {
					this.map.removeEventListener(this.addEvent);
					this.cursorStyle = false
				}
			},
			clickEvent(event) {
				let marker;
				this.removeEvent()
				if(this.map) {
					let opts = new IMAP.MarkerOptions();
					opts.anchor = IMAP.Constants.BOTTOM_CENTER;
					opts.icon = new IMAP.Icon(IMAP.MapConfig.API_REALM_NAME + "images/point_1.png", {
						"size": new IMAP.Size(40, 30),
						"offset": new IMAP.Pixel(5, 0)
					});
					let lnglat = new IMAP.LngLat(event.lnglat.lng, event.lnglat.lat);
					if(lnglat) {
						marker = new IMAP.Marker(lnglat, opts);
						// 添加单击事件
						marker.addEventListener(IMAP.Constants.CLICK, (evt) => {
							var marker = evt.target;
							//            
							marker.setIcon(new IMAP.Icon(IMAP.MapConfig.API_REALM_NAME + "images/point_1.png", {
								"size": {
									"width": 34,
									"height": 30
								},
								"offset": {
									"x": 0,
									"y": -32
								}
							}));
						alert(123)
							this.anchorModal = true;
						}, marker);
						this.map.getOverlayLayer().addOverlay(marker, true);
					}
					this.overlays.push(marker)

				}
				this.marker = marker;

				this.pointLat = event.lnglat.lat
				this.pointLng = event.lnglat.lng
			},
			ok() {
				this.$Message.info('已保存商圈');
			},
			cancel() {
				this.$Message.info('点击了取消');
			},
		}
	}
</script>

<style scoped lang="scss">
	.ml30 {
		margin-left: 30px;
	}
	
	.contro_panel_button_bc {
		height: 30px;
		top: 50px;
		right: 50px;
	}
	
	.button:active {
		position: relative;
		top: 2px;
	}
</style>