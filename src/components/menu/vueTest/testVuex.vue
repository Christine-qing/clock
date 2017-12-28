<template>
  <div>
    <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
    <br><br><br><br>
    <Button>{{msg}} </Button>
    <Button @click="$store.commit('add')"> +</Button>
    <Button @click="$store.commit('reduce')">-</Button>
    <Button>{{$store.state.count}}</Button>
  </div>
</template>

<script>
  import store from "@/store/store"
  export default {
    name: "",
    data() {
      return {
        msg: 1
      }
    },
    // store,
    components: {},
    mounted() {},
    methods: {}
  }
</script>

<style scoped>

</style>