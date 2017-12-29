<template>
  <div id="app">
      <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>

    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <Button @click="increment">+</Button>
    <Button @click="decrement">-</Button>
    <Button @click="incrementIfOdd">Increment if odd</Button>
    <Button @click="incrementAsync">异步添加</Button>
    vuex2
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>