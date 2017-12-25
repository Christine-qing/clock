<template>
	<div class="fence">
	 <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
		<div id="map" class="map_contaner"></div>
		<div id="pannel" class="contro_panel contro_panel_position_bc">
			<div class="content">
				<input type="button" name="draw" value="开始建立围栏" @click="toggleAddFence(this)">&nbsp;
				<button @click="removeFence()">删除围栏</button>
				<!--   <input type="button" name="draw" id="change" @click='toggleChange(this)' value="重新编辑围栏">  -->
			</div>
		</div>
		<!--弹出层-->
		<Modal v-model="fenceModal" @on-ok="ok" @cancel="cancel" title="消费商圈（多边形区域）">
			<!--内容-->
			<span class="ml30 mr20">消费商圈名称：</span>
			<Input placeholder="请输入商圈名称" style="width:300px"></Input>
			</br>
			</br>
			<span class="ml30"> 请选择计算方式：</span>
			<Button type="primary" class="peopleCounting" style="margin:30px 0 0 40px;">人流统计</Button>
			<Button type="primary" class="trafficAnalysis" style="margin:30px 0 0 60px;">交通分析</Button>
		</Modal>
	</div>
</template>
<script>
	export default {
		name: "fence",
		data() {
			return {
				map: null,
				tool: null,
				addoverlayEvt: null,
				fenceModal: false,
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
				this.map.plugin(['IMAP.Tool']); //下载鼠标工具插件 
			},
			toggleAddFence() {
				this.tool = new IMAP.AreaTool();
				this.map.addTool(this.tool);
				this.tool.title = "双击结束测面";
				this.tool.autoClose = true;
				this.tool.intersect = false;
				this.tool.open();
				this.addoverlayEvt = this.tool.addEventListener(IMAP.Constants.ADD_OVERLAY, function(evt) {
					console.log(this.map.getOverlayLayer().getOverlayById(evt.polygonId).getPath()) //获取坐标
					this.fenceModal = true;
					console.log(this.map.getOverlayLayer().getOverlayById(evt.polygonId).getArea())
				}, this);
			},
			// 删除
			removeFence() {
				if(this.tool) {
					this.tool.clear()
				}
			},
			// 编辑多边形
			toggleChange(a) {
				if(this.tool && this.tool.editable) {
					this.tool.editable(true)
				}
			},
			ok() {
				this.$Message.info('已保存商圈');

				var latlng = [{
						lng: 116.42791271,
						lat: 39.94600279
					},

					{
						lng: 116.42907143,
						lat: 39.94440707
					},

					{
						lng: 116.43029451,
						lat: 39.94578893
					},

					{
						lng: 116.42992973,
						lat: 39.9464305
					},

					{
						lng: 116.42990828,
						lat: 39.9464305
					}
				]
				var arr = [];
				latlng.forEach((item, index) => {
					arr.push([item.lng, item.lat])

				})
				console.log(arr)
			},
			cancel() {
				this.$Message.info('点击了取消');
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
</style>