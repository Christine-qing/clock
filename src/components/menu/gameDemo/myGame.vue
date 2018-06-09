<template>
  <div class="game">
    <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
    <div class="gameContent">
      <div v-for="(item,index) in list" :key="item" class="everyBox" @click='moveBox(item,index)'>{{item}}</div>
    </div>
    <button v-on:click="reset()" class="resetGame">重新排序</button>
    <button v-on:click="stop()" class="resetGame">停止</button>
    <div class="luckDraw" :style="{display:isDisplay}">
      <div class="luckDrawContent">
        &nbsp; &nbsp; &nbsp; &nbsp; 恭喜这位聪明伶俐，人见人爱，花见花开的玩家，您已闯关成功！
      </div>
      <div class="smile"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'game',
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, , ],
        // list: [],
        //  puzzles: [],
        isDisplay: "none",
      }
    },
    mounted() {
      this.random(this.list)
    },
    methods: {
      init() {},
      /**
       * @random随机数方法
       * */
      random(min, max) {
        if (max == null) {
          max = min;
          min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
      },
      /**
       * @reset点击重新排序
       * */
      reset() {
        clearTimeout(this.t);
        switch (this.random(1, 9)) {
          case 1:
            this.list = [2, 7, 3, 6, 5, 4, 1, 8, , ];
            break;
          case 2:
            this.list = [2, 8, 3, 6, 1, 4, 7, 5, , ];
            break;
          case 3:
            this.list = [5, 6, 3, 8, 1, 4, 2, 7, , ];
            break;
          case 4:
            this.list = [4, 1, 3, 8, 2, 5, 7, 6, , ];
            break;
          case 5:
            this.list = [3, 1, 6, 8, 2, 5, 7, 4, , ];
            break;
          case 6:
            this.list = [8, 2, 6, 4, 5, 3, 7, 1, , ];
            break;
          case 6:
            this.list = [4, 1, 8, 7, 2, 5, 6, 3, , ];
            break;
          case 7:
            this.list = [5, 2, 6, 8, 1, 3, 4, 7, , ];
            break;
          case 8:
            this.list = [7, 6, 3, 1, 4, 5, 8, 2, , ];
            break;
        }
        var t = setTimeout(this.reset, 100)
        this.t = t;
      },
      /*
       * 将数组的每个数字和随机数*10做比较，
       * */
      // randomList(list) {
      //   list.sort((a, b) => {
      //     return a > Math.random() * 10;
      //   })
      // },
      /**
       * @stop停止按钮
       * */
      stop() {
        clearTimeout(this.t)
      },
      /**
       * @moveBox 移动箱子 （添加判断）
       **/
      moveBox(item, index) {
        // debugger
        //  console.log(item,index)
        if (this.list[(this.list.indexOf(item)) + 1] === void 0 && item !== this.list[this.list.length - 1] && item !== this.list[this.list.length - 4] && item !== this.list[2]) {
          this.$set(this.list, index + 1, item)
          this.$set(this.list, index, void 0);
        } else if (this.list[(this.list.indexOf(item)) - 1] === void 0 && item !== this.list[0] && item !== this.list[this.list.length - 3] && item !== this.list[3]) {
          this.$set(this.list, index - 1, item)
          this.$set(this.list, index, void 0);
        } else if (this.list[(this.list.indexOf(item)) - 3] === void 0 && item !== this.list[0] && item !== this.list[1] && item !== this.list[2]) {
          this.$set(this.list, index - 3, item)
          this.$set(this.list, index, void 0);
        } else if (this.list[(this.list.indexOf(item)) + 3] === void 0 && item !== this.list[this.list.length - 1] && item !== this.list[this.list.length - 2] && item !== this.list[this.list.length - 3]) {
          this.$set(this.list, index + 3, item)
          this.$set(this.list, index, void 0);
        }
        //判断上下左右  every
        let newPuzzles = [1, 2, 3, 4, 5, 6, 7, 8, void 0]
        const isPass = newPuzzles.every((e, i) => {
          debugger
          console.log(e,i)
          e === i + 1
        })
        console.log(isPass)
        if (isPass) {
          setTimeout(() => {
            this.isDisplay = "block"
          }, 500)
        } else {
          //  setTimeout(()=>{
          //  alert("加油哦！还差一点点就完成了！")
          // },300000)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,
  .game {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .gameContent {
    width: 312px;
    height: 312px;
    background: yellowgreen;
    border: 6px solid green;
    margin: 100px auto 0 auto;
    box-sizing: boder-box;
    border-radius: 10px;
    overflow: hidden;
  }
  .gameContent .everyBox {
    width: 100px;
    height: 100px;
    border: 2px solid white;
    float: left;
    text-align: center;
    line-height: 100px;
    list-style: none;
    cursor: pointer;
  }
  .resetGame {
    width: 100px;
    height: 40px;
    border: 1px solid white;
    background: yellowgreen;
    margin-left: 28%;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    box-shadow: 2px 2px 5px black;
  }
  .resetGame:hover {
    background: #AAE03B
  }
  .resetGame:active {
    position: relative;
    top: 2px;
    box-shadow: 2px 2px 5px black;
  }
  .luckDraw {
    width: 650px;
    height: 476px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -325px;
    margin-top: -250px;
    z-index: 5;
    border: 1px solid red;
    background: url("../../../assets/img/diploma.jpg");
    display: none
  }
  .luckDrawContent {
    position: absolute;
    left: 20%;
    top: 42%;
    width: 370px;
    height: 120px;
    font-size: 28px;
    font-family: "微软雅黑"
  }
  .smile {
    width: 130px;
    height: 84px;
    position: absolute;
    right: 15%;
    bottom: 20%;
    background: url("../../../assets/img/ye.jpg");
    background-size: 100% 100%;
  }
</style>
