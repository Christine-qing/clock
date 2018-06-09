<template>
  <div>
       <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
  <ve-line 
  :data="chartData" 
  :settings="chartSettings" 
  width="600px" 
  height="300px" 
  :legend-visible=false
  :loading=true
 ></ve-line>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        chartData:null,
        chartSettings:null,
    };
  },
  components: {},
  mounted() {
    this.created();
  },
  methods: {
    created() {
      this.chartData = {
        columns: ["日期", "成本", "利润", "占比", "其他"],
        rows: [
          { 成本: 1523, 日期: "1月1日", 利润: 1523, 占比: 0.12, 其他: 100 },
          { 成本: 1223, 日期: "1月2日", 利润: 1523, 占比: 0.345, 其他: 100 },
          { 成本: 2123, 日期: "1月3日", 利润: 1523, 占比: 0.7, 其他: 100 },
          { 成本: 4123, 日期: "1月4日", 利润: 1523, 占比: 0.31, 其他: 100 },
          { 成本: 3123, 日期: "1月5日", 利润: 1523, 占比: 0.12, 其他: 100 },
          { 成本: 7123, 日期: "1月6日", 利润: 1523, 占比: 0.65, 其他: 100 }
        ],
       
      };
      
     
      this.chartSettings = {
        metrics: ["成本", "利润"],
        dimension: ["日期"],
          area:true,
        //   areaStyle:{
        //   // color:['# 000000','＃000033']
        // }
      };
     
     
    }
  }
};
</script>

<style scoped>
</style>