<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <div class="box">
            <ul class="puzzle-wrap">
                <li :class="{'puzzle': true, 'puzzle-empty': !puzzle}" v-for="(puzzle,index) in puzzles" :key="index" v-text="puzzle" @click="moveFn(index)"></li>
            </ul>
            <button class="btn btn-warning btn-block btn-reset" @click="render">重置游戏</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                puzzles: []
            }
        },
        methods: {
            // 重置渲染
            render() {
                let puzzleArr = [],
                    i = 1
                // 生成包含1 ~ 15数字的数组
                for (i; i < 16; i++) {
                    puzzleArr.push(i)
                }
                // 随机打乱数组
                puzzleArr = puzzleArr.sort(() => {
                    return Math.random() - 0.5
                });
                // 页面显示
                this.puzzles = puzzleArr
                this.puzzles.push('')
            },
            // 点击方块
            moveFn(index) {
                // 获取点击位置及其上下左右的值
                let curNum = this.puzzles[index],
                    leftNum = this.puzzles[index - 1],
                    rightNum = this.puzzles[index + 1],
                    topNum = this.puzzles[index - 4],
                    bottomNum = this.puzzles[index + 4]
                // 和为空的位置交换数值
                if (leftNum === '' && index % 4) {
                    this.$set(this.puzzles, index - 1, curNum)
                    this.$set(this.puzzles, index, '')
                } else if (rightNum === '' && 3 !== index % 4) {
                    this.$set(this.puzzles, index + 1, curNum)
                    this.$set(this.puzzles, index, '')
                } else if (topNum === '') {
                    this.$set(this.puzzles, index - 4, curNum)
                    this.$set(this.puzzles, index, '')
                } else if (bottomNum === '') {
                    this.$set(this.puzzles, index + 4, curNum)
                    this.$set(this.puzzles, index, '')
                }
                this.passFn()
            },
            // 校验是否过关
            passFn() {
                if (this.puzzles[15] === '') {
                    const newPuzzles = this.puzzles.slice(0, 15)
                    const isPass = newPuzzles.every((e, i) => e === i + 1)
                    if (isPass) {
                        alert('恭喜，闯关成功！')
                    }
                }
            }
        },
        mounted() {
            this.render()
        }
    }
</script>

<style scoped>
    /*@import url('./assets/css/bootstrap.min.css');*/
    .box {
        width: 410px;
        margin: 50px auto 0;
    }
    .puzzle-wrap {
        width: 410px;
        height: 410px;
        margin-bottom: 40px;
        padding: 0;
        background: #ccc;
        list-style: none;
    }
    .puzzle {
        float: left;
        width: 100px;
        height: 100px;
        font-size: 20px;
        background: #f90;
        text-align: center;
        line-height: 100px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 4px;
        text-shadow: 1px 1px 1px #B9B4B4;
        cursor: pointer;
    }
    .puzzle-empty {
        background: #ccc;
        box-shadow: inset 2px 2px 18px;
    }
    .btn-reset {
        box-shadow: inset 2px 2px 18px;
    }
</style>