<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <p>nextTick</p>
        <div id="app">
            {{message}}
        </div>
        <Button @click="foo()">
                 {{msg}}
                 <input type="text"  focus>
           </Button>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                message: "没有更新",
                msg: {
                    age: 18
                }
            }
        },
        components: {},
        mounted() {
            this.updateMessage();
            this.foo();
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
                this.$directive('focus', {
                    // 当被绑定的元素插入到 DOM 中时……
                    inserted: function(el) {
                        // 聚焦元素
                        el.focus()
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>