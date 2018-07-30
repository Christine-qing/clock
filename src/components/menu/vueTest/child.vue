<template>
    <div>
        子组件页面收到的父组件的值： {{this.message}}11
        wouldzujian{{data}}
        <div v-if="index===0">当index等于0时显示</div>
        <div v-if="index===1">当index等于1时显示</div>
    </div>
</template>

<script>
import bus from "../../../bus"
    export default {
        name: "",
        data() {
            return {
                newLegend: [],
                selectedLegend: '',
                index:0,
            }
        },
        props: {
          message:{
                type: Number,
                defalut:""
           }
        },
        components: {},
        mounted() {
            console.log(this.message, "props")
            // bus.$on(name,method)；name:接收的发射过来的名字；method:改变值的方法
           bus.$on("tabDisplay",this.tabDisplay)
        },
        methods: {
              tableDisplay(value) {
                this.index = value;
            }   
        },
        computed: {
            data() {
                return this.$store.state.data;
            }
        },
    }
</script>

<style scoped>

</style>