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
                this.map.centerAndZoom("北京",15);  
            }
        }
    }
</script>

<style scoped>

#allmap{
  width:100%;
  height:500px;
}
</style>