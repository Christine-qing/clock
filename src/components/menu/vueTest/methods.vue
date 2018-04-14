<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <p>nextTick</p>
        <div id="app" v-pre>
            {{message}} 直接跳过不需要编译的标签，加快编译效率
        </div>
        <div v-cloak> {{message}}直接结束编译，避免出现闪烁花括号，配合css样式书写</div>
        <Button @click="foo()">{{msg}}<input type="text" v-focus></Button>
        <p id="page">{{content|reverseStr}}</p>
        <!-- <child message="hello!">第一种props赋值方式</child> -->
        <!-- <child :message="hello2">第二种props赋值方式</child> -->
        <!-- <keep-alive> -->
        <child v-for="item in test" :key="item" :message="item">第三种props方式循环展开</child>
        <!-- </keep-alive> -->
        <Button @click="init()">vuex数据传输：11{{this.$store.state.data}}</Button>
        <Button @click="change">watch监控数据变化{{value}}</Button>
        <Button @click.once="foo()">只触发一次的onces{{val}}</Button>
        <Button v-text="111"></Button>
        <span :style="{ color: activeColor, fontSize: fontSize + 'px' }">style内联样式绑定</span>
        <span :style="classObject">class绑定</span>
        <input type="text" v-model="value">{{value}}
        <button :class="[$style.button, $style.buttonClose]" v-if="message">此处不能为空</button>
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
                val: 99,
                activeColor: "red",
                fontSize: 30,
                classObject: {
                    fontSize: "20px",
                    color: "blue"
                }
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
                // console.log(this.msg)
                this.$delete(this.msg, "age")
                console.log(reverseStr, "222233")
                console.log(this.$store.state, "4568")
                console.log(this.$parent, "parent")
                console.log(this.$children, "children")
                this.val++
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

<style module>
    [v-cloak] {
        display: none;
    }
    ;
    .button {
        width: 100px;
        height: 40px;
        color: black;
        border: none;
        border-radius: 2px;
        box-shadow: 2px 2px 1px #ccc
    }
    .button:hover {
        border: 1px solid black
    }
    .buttonClose {
        background-color: red;
    }
</style>