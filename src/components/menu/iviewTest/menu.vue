<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <Menu :theme="theme2" active-name="1-1" :open-names="['1']">
            <Submenu name='market'>
                <template slot="title">
                                        <i class="iconfont icon-icon-test2"></i>
                                        <span class="layout-text">市场监控</span>
</template>
       <Submenu name='estate'>
<template slot="title">
    <i class="ivu-icon"></i>
    <span class="layout-text">地产数据</span>
</template>
                <Menu-item name="estate/city">城市监控</Menu-item>
                 <Menu-item name="estate/area">区域监控</Menu-item>
                <Menu-item name="estate/plate">板块监控</Menu-item>
        </Submenu>
                      
  </Submenu>
		
</Menu>

 </Submenu>
		
		<p>切换主题</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
    
    
    <a href="http://www.baidu.com">百度1</a>
      <a href="http://www.baidu.com">百度2</a>
        <a href="http://www.baidu.com">百度3</a>
    
	</div>
</template>

<script>
    export default {
        data() {
            return {
                theme2: 'light'
            }
        },
        methods: {
            change(val) {
                console.log(val)
            },
            aaa() {
                console.log(aa)
            }
        }
    }
</script>

<style>
    .ivu-menu-submenu-title {}
</style>