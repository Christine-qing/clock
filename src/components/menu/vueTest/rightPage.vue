<template>
  <div>
    <div class="rightPage" ref="foo"></div>
      <Button @click="change()">弹出层</Button>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {}
    },
    components: {},
    mounted() {},
    methods: {
      change(){
      // alert(11)
       this.$refs.foo.background="yellow";
      this.$refs.foo.animation="1s test linear"
      }
    }
  }
</script>

<style scoped>

@keyframes test {
  from {
    position:absolute;
    right:-500px;
  }
  to{
     position:absolute;
    right:0;
  }
}





.rightPage{
  width:500px;
  height:500px;
  background:#ccc;
  position:absolute;
  right:-500px;
  top:60px;
  animation:10s test linear;

}


</style>