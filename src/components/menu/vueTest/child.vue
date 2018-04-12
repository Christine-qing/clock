<template>
    <div>
        子组件页面收到的父组件的值： {{this.message}}
        wouldzujian{{data}}
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                newLegend: [],
                selectedLegend: ''
            }
        },
        props: {
            message: ""
        },
        components: {},
        mounted() {
            console.log(this.message, "props")
        },
        methods: {},
        computed: {
            data() {
                return this.$store.state.data;
            }
        },
    }
</script>

<style scoped>

</style>