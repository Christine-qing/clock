<template>
    <div class="content">
        每次绑定都需要在data里面注册
        <p class="fs20">1.正常class样式： 2018年8月27日</p>
 
        <p :class="className">2.动态切换class的值</p>
       
        <p :class="{colorRed:isOk}">3.添加判断：当isOk为true是添加class，为false时不添加</p>
        <Checkbox v-model="isOk">Checkbox</Checkbox>
       
        <p :class="[classC,classD]">4.以数组的方式，一次添加多个class</p>
 
        <p :class="isOk?classA:classB">5.使用三元运算符判断切换class样式</p>
       
        <p :style="{color:color,fontSize:font}">6.绑定style的样式</p>
        
        <p :style="styleObject">7.给style 绑定对象</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                className: "classA",
                isOk: true,
                classA: "classA",
                classB: "classB",
                classC: "classC",
                classD: "classD",
                color: "red",
                font: "18px",
                styleObject:{
                    color:"pink",
                    fontWeight:"600"
                }
            }
        },
        components: {},
        mounted() {},
        methods: {},
        watch: {}
    }
</script>

<style scoped lang="less">
    .content {
        font-size: 16px;
        padding-left: 20px;
        padding-top: 20px;
        p {
            padding-top: 10px
        }
    }
    .fs20 {
        font-size: 20px
    }
    .colorRed {
        color: red
    }
    .classA {
        color: yellowgreen
    }
    .classB {
        color: green
    }
    .classC {
        font-size: 16px;
        font-weight: 600;
    }
    .classD {
        color: blue
    }
</style>