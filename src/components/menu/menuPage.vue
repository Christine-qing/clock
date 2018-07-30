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
 
                <MenuItem name="3-1"><router-link to="axios" >axiosi与动画</router-link></MenuItem>
                <MenuItem name="3-2"><router-link to="vuetest" tag="p">vue组件</router-link></MenuItem>
                <MenuItem name="3-5"><router-link :to="{name:'methods',params:{list:[1,2,3]}}" >methods</router-link></MenuItem>
 
        </Submenu>

       <Submenu name="6">
        <template slot="title"><Icon type="stats-bars"></Icon>Echarts</template>
                <MenuItem name="6-1"><router-link to="echartsBar">柱状图</router-link></MenuItem>
                <MenuItem name="6-2"><router-link to="echartsLine">折线图</router-link></MenuItem>
                <MenuItem name="6-3"><router-link to="echartsBarLine">折柱图</router-link></MenuItem>  
                <MenuItem name="6-4"><router-link to="echartsPie">饼图</router-link></MenuItem>
                <MenuItem name="6-5"><router-link to="echartsMap">地图</router-link></MenuItem>     
                <MenuItem name="6-6"><router-link to="echartsString">配置echarts</router-link></MenuItem>     
      
      </Submenu>
      <Submenu name="7">   
        <template slot="title"><Icon type="stats-bars"></Icon>iview</template>
                <MenuItem name="7-1"><router-link to="menu">3级菜单</router-link></MenuItem>
                <MenuItem name="7-2"><router-link to="colorTable">table加颜色</router-link></MenuItem>  
                <MenuItem name="7-3"><router-link to="upload">上传示例</router-link></MenuItem>  
                <MenuItem name="7-4"><router-link to="userTable">用户list</router-link></MenuItem>                                    
                <MenuItem name="7-5"><router-link to="treeTest">tree树型控件</router-link></MenuItem>                                    

      </Submenu>
 

       <Submenu name="8">   
        <template slot="title"><Icon type="stats-bars"></Icon>CDP</template>
                <MenuItem name="8-1"><router-link to="chartInit">v-chart</router-link></MenuItem>  
                <MenuItem name="8-2"><router-link to="chartMap">v-chart-map</router-link></MenuItem>  
                <MenuItem name="8-3"><router-link to="boxDrag">拖拽效果</router-link></MenuItem>  
      </Submenu>
      <Submenu name="9">   
        <template slot="title"><Icon type="stats-bars"></Icon>v-charts</template>
                <MenuItem name="9-1"><router-link to="chartInit">初始化charts图</router-link></MenuItem>  
                <MenuItem name="9-1"><router-link to="chartMap">charts地图</router-link></MenuItem>              
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
   
      <Submenu name="13">   
        <template slot="title"><Icon type="stats-bars"></Icon>Bmap</template>
                <MenuItem name="13-1"><router-link to="bmap_init">bmap_init</router-link></MenuItem>    
                <MenuItem name="13-2"><router-link to="bmap_Control">bmap_Control</router-link></MenuItem>      
                <MenuItem name="13-3"><router-link to="bmap_overlay">bmap_overlay</router-link></MenuItem>                  
      </Submenu>
       <Submenu name="14">   
        <template slot="title"><Icon type="stats-bars"></Icon>storeProject</template>
                <MenuItem name="14-1"><router-link to="StoreIndex">StoreIndex</router-link></MenuItem>    
              
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


   <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      theme1: "primary",
      id:1212,
      name:"张一",
      age:18
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
#menuPage {
  width: 100%;
}
#menuPage .homePage {
  color: white;
}
.demoStyle {
  position: absolute;
  right: 8%;
}
</style>