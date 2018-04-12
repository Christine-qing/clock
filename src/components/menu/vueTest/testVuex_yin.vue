<template>
  <div id="app">
      <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
 <br>
    count值为： {{ count }} , 当前是 {{ evenOrOdd }}.
    <Button @click="increment">+</Button>
    <Button @click="decrement">-</Button>
    <Button @click="incrementIfOdd">奇数变偶数</Button>
    <Button @click="incrementAsync">异步添加</Button>
    
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd',
    'count'
  ]),
  methods: {
    ...mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
   
  ])},




}
</script>