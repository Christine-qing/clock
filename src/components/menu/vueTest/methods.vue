<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <p>nextTick</p>
        <div id="app">
            {{message}}
        </div>
        <Button @click="foo()">{{msg}}<input type="text" v-focus></Button>
        <p id="page">{{content|reverseStr}}</p>
        <!-- <child message="hello!">第一种赋值方式</child> -->
        <!-- <child :message="hello2">第二种赋值方式</child> -->
        <!-- <keep-alive> -->
        <child v-for="item in test" :key="item" :message="item">第三种方式循环展开</child>
        <!-- </keep-alive> -->
        <Button @click="init()">vuex数据传输：11{{this.$store.state.data}}</Button>
        <Button @click="change">watch监控数据变化{{value}}</Button>
    </div>
</template>

<script>
    import {
        focus
    } from "../../directives/index"
    import {
        reverseStr
    } from "../../filter/index"
    import child from './child'
    import bus from '../../../bus.js'
    export default {
        name: "",
        data() {
            return {
                message: "没有更新",
                msg: {
                    age: 18
                },
                content: "我是中国人",
                test: [
                    1, 2, 3, 5
                ],
                value: 5,
            }
        },
        directives: {
            focus
        },
        filters: {
            reverseStr
        },
        components: {
            child
        },
        mounted() {
            this.updateMessage();
            this.foo();
        },
        watch: {
            value: function(val, oldval) {
                console.log(val, oldval)
            }
        },
        methods: {
            updateMessage() {
                this.message = '更新完成'
                console.log(this.$el.textContent) // => '没有更新'
                this.$nextTick(function() {
                    console.log(this.$el.textContent) // => '更新完成'
                })
            },
            foo() {
                this.$set(this.msg, "name", "zhangsan")
                console.log(this.msg)
                this.$delete(this.msg, "age")
                console.log(reverseStr, "222233")
                console.log(this.$store.state, "4568")
                console.log(this.$parent, "parent")
                console.log(this.$children, "children")
            },
            init() {
                this.$store.dispatch('setData', 8);
            },
            change() {
                this.value = 500
            },
            download() {
                //用$emit发射出去；$emit(name,val)；name:按需定义，val：需要发射出去的值
                bus.$emit("tabDisplay", 0)
            },
        },
    }
</script>

<style scoped>

</style>