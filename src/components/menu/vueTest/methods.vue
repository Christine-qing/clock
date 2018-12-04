<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button><br/>
        <p>nextTick</p>
  
    
        <p id="page">{{content|reverseStr}}</p>
        <input type="text" v-model="aaa ">
        <div> {{aaa|validatePhone}} </div>
        <!-- <child message="hello!">第一种props赋值方式</child> -->
        <!-- <child :message="hello2">第二种props赋值方式</child> -->
        <br>
        <br>
        <keep-alive>
            <child v-for="item in test" :key="item" :message="item">第三种props方式循环展开</child>
        </keep-alive>
        <Button @click="init()">vuex数据传输：11{{this.$store.state.data}}</Button>
        <Button @click="change">watch监控数据变化{{value}}</Button>
        <Button @click.once="foo()">只触发一次的onces{{val}}</Button>
        <span>watch 观察者模式{{val}}</span>
        <Button v-text="111"></Button>
        <span :style="{ color: activeColor, fontSize: fontSize + 'px' }">style内联样式绑定</span>
        <span :style="classObject">class绑定</span>
        <Button @click="init">我是观察者按钮</Button>
        <input type="text" v-model="value">{{value}}
        <button :class="[$style.button, $style.buttonClose]" v-if="message">此处不能为空</button>
        <!-- <echartsLine style="width:500px;height:200px" :msg="this.setData"></echartsLine> -->
        <div style="width:300px;margin-top:100px;border:1px solid black">
            <p>登陆之完善信息</p>
            <Form :model="formLeft" label-position="left" :label-width="100">
                <FormItem label="Title">
                    <Input v-model="formLeft.input1" placeholder="您的姓名"></Input>
                </FormItem>
                <FormItem label="Title name">
                    <Input v-model="formLeft.input2" placeholder="您的公司"></Input>
                </FormItem>
                <FormItem label="Aligned title">
                    <Input v-model="formLeft.input3" placeholder="您的邮箱"></Input>
                </FormItem>
                <FormItem>
                    <Button type="ghost" style="margin-left: 8px" @click="cancel()">Cancel</Button>
                    <Button type="primary" @click="submit()">Submit</Button>
                </FormItem>
            </Form>
            <p v-changeRed="color">55555</p>
        </div>
        <span v-bind:title="messages">鼠标提示</span>
        <br><br><br><br><br><br> sfsad
        <div :style="{width:width+'px',height:'200px',border:'1px solid red',margin:'20px'}" @click="download"></div>
        <hr>
        <br>

        input:<input type="text"  v-model.trim="newValue">
       <p> 文本内容：{{newValue}}</p>
       <p clsss="red">我是</p>

        <div style="margin-bottom:200px;"></div>
    </div>
</template>

<script>
    import {
        focus,
        changeRed
    } from "../../directives/index"
    import {
        reverseStr,
        validatePhone
    } from "../../filter/index"
    import child from './child'
    // import chart from '../../../chart/chart'
    import bus from '../../../bus.js'
    import echartsLine from "../echartsDemo/echartsLine.vue"
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
                value: {
                    a: 1,
                    b: 2
                },
                val: 99,
                activeColor: "red",
                fontSize: 30,
                classObject: {
                    fontSize: "20px",
                    color: "blue"
                },
                setData: [100, 20, 50, 60, 10, 20, 56, 60, 80, 10],
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                color: "blue",
                messages: '页面加载于 ' + new Date().toLocaleString(),
                aaa: "",
                width: 100,
                newValue:"1112"
            }
        },
        directives: {
            focus,
            changeRed
        }, //自定义指令
        filters: {
            reverseStr,
            validatePhone
        },
        components: {
            child,
            // chart,
            echartsLine
        },
        mounted() {
            this.updateMessage();
            this.foo();
            this.estTest()
        },
        watch: {
            value: {
                handler(val, oldVal) {
                    console.log("lalala", val, oldVal)
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            updateMessage() {
                const id = this.$route.params.list
                console.log(this.$el.textContent, this.message) // => '没有更新'
                this.message = '更新完成'
                this.$nextTick(function() {
                    console.log(this.$el.textContent, this.message) // => '更新完成'
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
                this.val++;
                console.log(window.location.href)
                console.log(this.$route.path)
                console.log(this.$route.params)
            },
            init() {
                this.$store.dispatch('setData', 8);
            },
            change() {
                this.value.a = 4
            },
            download() {
                debugger
                //用$emit发射出去；$emit(name,val)；name:按需定义，val：需要发射出去的值
                bus.$emit("tabDisplay", 1)
            },
            submit() {
                console.log(this.formLeft)
            },
            cancel() {
                this.formLeft = {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            },
            estTest() {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.toString = function() {
                    debugger
                    return '(' + this.x + ', ' + this.y + ')';
                };
                var p = new Point(1, 2);
            },
            step() {
                debugger
                alert(121)
            }
        },
    }
</script>

<style module >
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
    .textBox {
        width: 100px;
        height: 300px;
        border: 1px solid red;
    }
    .red{
       color:red
    }
</style>