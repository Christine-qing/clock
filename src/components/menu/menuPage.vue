<template>
  <div id='menuPage'>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
      <Icon type="ios-paper"></Icon>
      <router-link to="/" class="homePage">回首页</router-link>
      </MenuItem>
      <Submenu name="2">
        <template slot="title"><Icon type="stats-bars"></Icon>GAME</template>
                <MenuItem name="2-1"><router-link to="SokobanGame">推箱子</router-link></MenuItem>
                <MenuItem name="2-2"> <router-link to="myGame">Mybox</router-link></MenuItem>
      </Submenu>

      <Submenu name="3">
        <template slot="title"><Icon type="stats-bars"></Icon>vue</template>
           <!-- <MenuGroup title="使用">-->
                <MenuItem name="3-1"><router-link to="axios" >axiosi与动画</router-link></MenuItem>
                <MenuItem name="3-2"><router-link to="vuetest" tag="p">vue组件</router-link></MenuItem>
                <MenuItem name="3-3"><router-link to="testVuex_mo" >vuex测试</router-link></MenuItem>
                <MenuItem name="3-4"><router-link to="testVuex_yin" >vuex2</router-link></MenuItem>
        
          <!-- </MenuGroup>-->
        </Submenu>
         <!-- <Submenu name="4">
        <template slot="title"><Icon type="stats-bars"></Icon>立德</template>
                <MenuItem name="4-1"><router-link to="lideTest">九宫格</router-link></MenuItem>
                <MenuItem name="4-2"><router-link to="busTrip">地铁公交查询</router-link></MenuItem>
                <MenuItem name="4-3"><router-link to="mapRadius">原点+半径</router-link></MenuItem>  
                <MenuItem name="4-4"><router-link to="mapFence">打点围栏</router-link></MenuItem>
                <MenuItem name="4-5"><router-link to="anchor">锚点工具</router-link></MenuItem> 
                <MenuItem name="4-6"><router-link to="point">打点工具</router-link></MenuItem> 
                <MenuItem name="4-6"><router-link to="fenceCenter">中心点</router-link></MenuItem>      
      </Submenu> -->
        <!-- <Submenu name="5">
        <template slot="title"><Icon type="stats-bars"></Icon>智数</template>
                <MenuItem name="5-1"><router-link to="listPage">列表页面</router-link></MenuItem>
                <MenuItem name="5-2"><router-link to="projectReport">项目报告</router-link></MenuItem>
                <MenuItem name="5-3"><router-link to="newProject">新建项目</router-link></MenuItem>  
                <MenuItem name="5-4"><router-link to="reportForm">右侧报表</router-link></MenuItem>
                <MenuItem name="5-5"></MenuItem>     
      </Submenu> -->
       <Submenu name="6">
        <template slot="title"><Icon type="stats-bars"></Icon>Echarts</template>
                <MenuItem name="6-1"><router-link to="echartsBar">柱状图</router-link></MenuItem>
                <MenuItem name="6-2"><router-link to="echartsLine">折线图</router-link></MenuItem>
                <MenuItem name="6-3"><router-link to="echartsBarLine">折柱图</router-link></MenuItem>  
                <MenuItem name="6-4"><router-link to="echartsPie">饼图</router-link></MenuItem>
                <MenuItem name="6-5"></MenuItem>     
      </Submenu>
      <Submenu name="7">   
        <template slot="title"><Icon type="stats-bars"></Icon>iview</template>
                <MenuItem name="7-1"><router-link to="menu">3级菜单</router-link></MenuItem>
                <MenuItem name="7-2"><router-link to="table">table加颜色</router-link></MenuItem>  
                <MenuItem name="7-2"><router-link to="upload">上传示例</router-link></MenuItem>                                    
      </Submenu>
      <Submenu name="8">   
        <template slot="title"><Icon type="stats-bars"></Icon>Mapbox</template>
                <MenuItem name="8-1"><router-link to="mapInit">mapInit</router-link></MenuItem>
                <MenuItem name="8-2"><router-link to="mapStyle">mapStyle</router-link></MenuItem>
                <MenuItem name="8-3"><router-link to="map3d">map3d</router-link></MenuItem>  
                <MenuItem name="8-4"><router-link to="animate">animate</router-link></MenuItem>  
                <MenuItem name="8-5"><router-link to="mapButton">mapButton</router-link></MenuItem>   
                <MenuItem name="8-6"><router-link to="getCoordinate">getLatlng</router-link></MenuItem> 
                <MenuItem name="8-7"><router-link to="addPolygon">addPolygon</router-link></MenuItem> 
                <!-- <MenuItem name="8-8"><router-link to="addLine">addLine</router-link></MenuItem>     -->
                <!-- <MenuItem name="8-8"><router-link to="drawnPolygon">drawnPolygon</router-link></MenuItem>                                     -->
                <MenuItem name="8-9"><router-link to="addEnclosure">add_lnglat</router-link></MenuItem> 
                <MenuItem name="8-10"><router-link to="customized">customized</router-link></MenuItem> 
                <MenuItem name="8-11"><router-link to="addMarker">addMarker</router-link></MenuItem> 

      </Submenu>
       <Submenu name="9">   
        <template slot="title"><Icon type="stats-bars"></Icon>Leaflet</template>
                <MenuItem name="9-1"><router-link to="leafletInit">leafletInit</router-link></MenuItem>
                <MenuItem name="9-2"><router-link to="leafletPoint">addPoint</router-link></MenuItem>  
                <!-- <MenuItem name="9-3"><router-link to="geojson">geojson</router-link></MenuItem>                                     -->
                <MenuItem name="9-4"><router-link to="leafletCircle">leafletCircle</router-link></MenuItem>  
                <MenuItem name="9-5"><router-link to="choropleth">choropleth</router-link></MenuItem>    
                <MenuItem name="9-6"><router-link to="leafletStyle">leafletStyle</router-link></MenuItem>   
                <MenuItem name="9-7"><router-link to="mapZoom">mapZoom</router-link></MenuItem>    
                 <MenuItem name="9-8"><router-link to="leafletmap">leafletmap</router-link></MenuItem>              
     
      </Submenu>
       <Submenu name="10">   
        <template slot="title"><Icon type="stats-bars"></Icon>regexp</template>
                <MenuItem name="10-1"><router-link to="createRegexp">create</router-link></MenuItem>        
      </Submenu>
       <Submenu name="11">   
        <template slot="title"><Icon type="stats-bars"></Icon>inMap</template>
                <MenuItem name="11-1"><router-link to="inMap_test">inMap_test</router-link></MenuItem>        
                <MenuItem name="11-2"><router-link to="inMap_DotOverlay">多色marker</router-link></MenuItem>        
                <MenuItem name="11-3"><router-link to="inMap_imgOverlay">图片marker</router-link></MenuItem>        
                <MenuItem name="11-4"><router-link to="inMap_BoundaryOverlay">普通围栏</router-link></MenuItem>        
                <MenuItem name="11-5"><router-link to="inMap_ColorBoundaryOverlay">多色围栏</router-link></MenuItem>        
                <MenuItem name="11-6"><router-link to="inMap_CircuitOverlay">线路</router-link></MenuItem>        
                <MenuItem name="11-7"><router-link to="inMap_GriddingOverlay">网格聚合</router-link></MenuItem>        
                <MenuItem name="11-8"><router-link to="inMap_HoneycombOverlay">蜂窝聚合</router-link></MenuItem>        
                <MenuItem name="11-9"><router-link to="inMap_HeatOverlay">热力展示</router-link></MenuItem>        
     
     
      </Submenu>
       <!-- <Submenu name="12">   
        <template slot="title"><Icon type="stats-bars"></Icon>ts</template>
                <MenuItem name="12-1"><router-link to="ts_init">ts_init</router-link></MenuItem>        
      </Submenu> -->
      <Submenu name="13">   
        <template slot="title"><Icon type="stats-bars"></Icon>Bmap</template>
                <MenuItem name="13-1"><router-link to="bmap_init">bmap_init</router-link></MenuItem>    
                <MenuItem name="13-2"><router-link to="bmap_Control">bmap_Control</router-link></MenuItem>      
                 <MenuItem name="13-3"><router-link to="bmap_overlay">bmap_overlay</router-link></MenuItem>                  
      </Submenu>
      
    </Menu>
 
<div class='demoStyle'>
    <p>换肤</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
</div>
 <!-- 我是菜单页面
  <Button type="success" long> <router-link to="SokobanGame">游戏</router-link></Button>

-->

   <router-view></router-view>

  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        theme1: 'primary'
      }
    },
    components: {},
    mounted() {},
    methods: {}
  }
</script>

<style scoped>
#menuPage{
  width:100%;
}
  #menuPage .homePage {
    color: white
  }
  .demoStyle{
    position:absolute;
    right:8%;
  }
</style>