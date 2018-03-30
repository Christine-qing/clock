<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div id="allmap"></div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                map: null,
            }
        },
        components: {},
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.map = new BMap.Map("allmap");
                this.map.centerAndZoom("北京", 15);
                this.map.enableScrollWheelZoom(true); 
                var point = new BMap.Point(116.404, 39.915);
                // 创建点
                var marker = new BMap.Marker(new BMap.Point(116.404, 39.916));
                //创建折线
                var polyline = new BMap.Polyline([
                    new BMap.Point(116.399, 39.910),
                    new BMap.Point(116.405, 39.920),
                    new BMap.Point(116.425, 39.900)
                ], {
                    strokeColor: "blue",
                    strokeWeight: 2,
                    strokeOpacity: 0.5
                });
                //创建圆
                var circle = new BMap.Circle(
                    point, 1, {
                        strokeColor: "blue",
                        strokeWeight: 2,
                        strokeOpacity: 0.5
                    }
                );
                //创建多边形
                var polygon = new BMap.Polygon([
                    new BMap.Point(116.387112, 39.920977),
                    new BMap.Point(116.385243, 39.913063),
                    new BMap.Point(116.394226, 39.917988),
                    new BMap.Point(116.401772, 39.921364),
                    new BMap.Point(116.41248, 39.927893)
                ], {
                    strokeColor: "black",
                    strokeWeight: 5,
                    strokeOpacity: 0.5
                });
                //创建矩形
                var pStart = new BMap.Point(116.392214, 39.918985);
                var pEnd = new BMap.Point(116.41478, 39.911901);
                var rectangle = new BMap.Polygon([
                    new BMap.Point(pStart.lng, pStart.lat),
                    new BMap.Point(pEnd.lng, pStart.lat),
                    new BMap.Point(pEnd.lng, pEnd.lat),
                    new BMap.Point(pStart.lng, pEnd.lat)
                ], {
                    strokeColor: "blue",
                    strokeWeight: 2,
                    strokeOpacity: 0.5
                });
                this.map.addOverlay(marker); //增加点
                this.map.addOverlay(polyline); //增加折线
                this.map.addOverlay(circle); //增加圆
                this.map.addOverlay(polygon); //增加多边形
                this.map.addOverlay(rectangle); //增加矩形
            }
        }
    }
</script>

<style scoped>
    #allmap {
        width: 100%;
        height: 500px;
    }
</style>