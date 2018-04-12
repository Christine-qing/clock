<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <br> <br>
        <Button type="ghost" @click="add({
                        type: 'addNumber',
                        amount: 3,
                        isUse :true
                    })">点击改变</Button>
        <Button>{{sample_mo.current}}</Button> 
        <Button>{{current}}</Button>  
        <br><Button>{{sample_mo.number}}</Button><br>
        <Button>{{number}}</Button>
        <p>{{sample_mo.center}}</p>
    </div>
</template>

<script>
// import * as types from "../../../store/mutation-types";
// import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions({
      add: "addNumber", // 将 `this.addNumber()` 映射为 `this.$store.commit('addNumber')`
      
   })
  },
  computed: {
    ...mapState(["sample_mo"]), // 一次性引入sample_mo的所有state ,调用{{sample_mo.current}}
    ...mapGetters(["current","number"]), //引入所有sample里getter里的所有的内容，调用{{number}}
  }
};
</script>

<style lang='scss' scoped>

</style>
