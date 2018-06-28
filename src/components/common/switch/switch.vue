<template>
  <div>
    <i-switch v-model="value">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      name: {
        // type: Boolean,
        default: true
      }
    },
    data() {
      return {
        value: true
      }
    },
    methods: {},
    created() {
    },
    watch: {
      value: function(val) {
        this.$emit('on-change', val)
      },
    }
  }
</script>

<style scoped>

</style>
