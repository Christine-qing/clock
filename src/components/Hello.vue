<template>
    <div class="hello">
     <Button ><router-link to="menuPage">菜单</router-link></Button> 
        <!--<h1>{{ msg }}</h1>-->
        <div class="clock">
            <!--钟表-->
            <div class="twelve">12</div>
            <div class="three">3</div>
            <div class="six">6</div>
            <div class="nine">9</div>

            <!--时 分 秒 各指针-->
            <div class="second" v-bind:style="{transform:'rotate('+inif.seconds+'deg)'}"></div>
            <div class="minute" v-bind:style="{transform:'rotate('+inif.minute+'deg)'}"></div>
            <div class="hour" v-bind:style="{transform:'rotate('+inif.hour+'deg)'}"></div>
            <div class="core"></div>
            
        </div>
        <!--电子表-->
        <div class="now">
            <div class="dhour">{{inif.oHour}}</div>
            <div class="colon">
                <div class="colon1"></div>
                <div class="colon1"></div>
            </div>
            <div class="dminute">{{inif.oMinute}}</div>
            <div class="colon">
                <div class="colon1"></div>
                <div class="colon1"></div>
            </div>
            <div class="dsecond">{{inif.oSecond}}</div>
        </div>
        <div class="bottomCover" :style="{display:isDisplay}">
        </div>
        <!--问好框-->
        <div class="topPage" :style="{display:isDisplay}">
            <div class="pageText">{{inif.text}}</div>
            <div class="close" v-on:click="close">×</div>
        </div>
        
        <div @click="foo()">{{count}}</div>
        
    
        
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
            	count:0,
                //   msg: 'clock',
                inif: {
                    oHour: 0,
                    oMinute: 0,
                    oSecond: 0,
                    text: "亲爱的，欢迎回家！",
                    seconds: 0,
                    rotate: 0,
                    minute: 0,
                    hour: 0,
                    
                },
                oTopPage: null,
                isDisplay: "block",
                //   show:false,
                //   text:"打开",
                //   open:true,
            }
        },
        mounted() {
            //   this.oTopPage=document.querySelector(".topPage");
            //   this.oBottomCover=document.querySelector(".bottomCover");
            this.init();
            this.time();
            this.game();
        },
        methods: {
            init() {
                //    this.clock=clock;
            },
            
            time() {
                let myDate = new Date();
                let hours = myDate.getHours();
                let minutes = myDate.getMinutes();
                let seconds = myDate.getSeconds();
                if (hours < 10) {
                    hours = "0" + hours
                }
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (seconds < 10) {
                    seconds = "0" + seconds
                }
                if (hours < 9 && hours >= 6) {
                    this.inif.text = "早安，欢迎回家!"
                }
                if (hours < 12 && hours >= 9) {
                    this.inif.text = "上午好，欢迎回家!"
                }
                if (hours >= 12 && hours < 14) {
                    this.inif.text = "中午好，欢迎回家!"
                }
                if (hours >= 14 && hours < 19) {
                    this.inif.text = "下午好，欢迎回家!"
                }
                if (hours >= 19 && hours < 23) {
                    this.inif.text = "欢迎回家，晚安!"
                }
                // 电子表时间
                this.inif.oHour = hours;
                this.inif.oMinute = minutes;
                this.inif.oSecond = seconds;
                this.inif.seconds = seconds * 6;
                this.inif.minute = minutes * 6 + seconds * (6 / 60);
                this.inif.hour = (hours - 12) * 30 + minutes * (360 / 12 / 60);
                // debugger
                if (this.inif.oHour === 14 && this.inif.oMinute === 0) {
                    alert("该吃饭了")
                }
                let t = setTimeout(this.time, 1000)
            },
            close() {
                this.isDisplay = "none"
            },
            game() {
                // this.inif.text="休息一下吧!"
                this.isDisplay = "block"
                let g = setTimeout(this.game, 500000);
            },
            task() {
                //    this.text==="打开"?"关闭":"打开"
                //  console.log(this.text)
                if (this.text === "打开") {
                    this.text = "关闭"
                } else {
                    this.text = "打开"
                }
            },
            foo(){
            	this.count++
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body,
    .hello {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .clock {
        width: 300px;
        height: 300px;
        margin: 50px auto 0 auto;
        border-radius: 50%;
        background: url(../assets/img/back.jpg) -290px -300px;
        opacity: 0.8;
        position: relative;
    }
    .core {
        width: 20px;
        height: 20px;
        background: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px;
        border-radius: 50%;
    }
    .second {
        width: 4px;
        height: 80px;
        background: red;
        border-radius: 1px;
        position: absolute;
        left: 150px;
        top: 70px;
        margin-left: -2px;
        transform-origin: center bottom;
    }
    .minute {
        width: 6px;
        height: 70px;
        background: yellow;
        border-radius: 2px;
        position: absolute;
        left: 150px;
        top: 80px;
        margin-left: -3px;
        transform-origin: center bottom;
    }
    .hour {
        width: 10px;
        height: 50px;
        background: black;
        border-radius: 3px;
        position: absolute;
        left: 150px;
        top: 100px;
        margin-left: -5px;
        transform-origin: center bottom;
    }
    .now {
        width: 400px;
        height: 100px;
        overflow: hidden;
        margin: 20px auto;
    }
    .now .dhour,
    .now .dminute,
    .now .dsecond {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        background: deepskyblue;
        margin-left: 10px;
        float: left;
        color: white;
        font-size: 50px;
        font-family: "微软雅黑";
        font-weight: 600;
        text-align: center;
        line-height: 100px;
    }
    .colon {
        float: left;
        margin-left: 10px;
        margin-top: 30px;
    }
    .colon .colon1 {
        width: 8px;
        height: 8px;
        background: deepskyblue;
        margin-top: 8px;
    }
    .twelve {
        font-size: 30px;
        font-weight: 600;
        position: absolute;
        left: 50%;
        margin-left: -15px;
    }
    .three {
        font-size: 30px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -15px;
        margin-left: -15px;
    }
    .six {
        font-size: 30px;
        font-weight: 600;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -7px;
        margin-top: -32px;
    }
    .nine {
        font-size: 30px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        margin-top: -15px;
    }
    .bottomCover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: red;
        opacity: 0.2;
        z-index: 1;
    }
    .topPage {
        width: 300px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 20%;
        margin-left: -150px;
        /*margin-top:-100px;*/
        background: white;
        border: 10px solid #ccc;
        border-radius: 10px;
        z-index: 2;
    }
    .close {
        width: 26px;
        height: 26px;
        margin-top: -2px;
        text-align: center;
        font-size: 16px;
        /*background:black;*/
        border-radius: 50%;
        border: 1px solid #ccc;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        cursor: pointer;
    }
    .pageText {
        font-size: 30px;
        color: deepskyblue;
        text-align: center;
        line-height: 200px;
    }
</style>
