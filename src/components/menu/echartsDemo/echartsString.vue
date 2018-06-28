<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <br> <br>
        <portrait-charts v-for="item in 5" :key="item"></portrait-charts>
        
    </div>
    
</template>

<script>
import portraitCharts from '../../common/echart/portraitCharts'
    export default {
        name: "",
        data() {
            return {
                obj:{
                  
                }
            }
        },
        components: {
            portraitCharts
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>