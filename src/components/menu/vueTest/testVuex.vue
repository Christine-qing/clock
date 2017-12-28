<template>
    <div >
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <br> <br>
        <Button type="ghost" @click="add({
                    type: 'addNumber',
                    amount: 3,
                    isUse :true
                })">点击改变</Button>
                <Button>{{index.current}}</Button>
    </div>
</template>
<script>
import * as types from '../../../store/mutation-types'
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex'

export default {
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        this.init()
    },
    mounted() {

    },
    methods: {
        init() {


        },
        ...mapActions({
            add: 'addNumber' // 将 `this.addNumber()` 映射为 `this.$store.commit('addNumber')`
        }),
    },
    computed: {

        ...mapState(['index'])
    },
}
</script>
<style lang='scss' scoped>
   
</style>
