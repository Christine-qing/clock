<template>
    <div id="allmap">
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                inmap: null,
            }
        },
        components: {},
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let dom = this.$refs.map;
                this.map = new BMap.Map("allmap"); // 创建Map实例
                this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
                //添加地图类型控件
                this.map.addControl(new BMap.MapTypeControl({
                    mapTypes: [
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]
                }));
                this.map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
                this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            }
        }
    }
</script>

<style scoped>

</style>