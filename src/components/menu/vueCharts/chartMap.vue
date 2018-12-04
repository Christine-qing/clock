<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <span>当前选中了: {{ cityName || '-' }}</span>
        <ve-map :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-map>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                chartData: null,
                chartSettings: null,
                chartEvents: null,
                cityName:null
            }
        },
        components: {},
        mounted() {
            this.data()
        },
        methods: {
            data() {
                this.chartData = {
                    columns: ['位置', 'GDP'],
                    // rows: [{
                    //         '位置': '吉林',
                    //         'GDP': 123
                    //     },
                    //     {
                    //         '位置': '北京',
                    //         'GDP': 1223
                    //     },
                    //     {
                    //         '位置': '上海',
                    //         'GDP': 2123
                    //     },
                    //     {
                    //         '位置': '浙江',
                    //         'GDP': 4123
                    //     }
                    // ]
                }
                this.chartSettings = {
                    position: 'china',
                    // selectData: true,
                    selectedMode: 'single'
                }
                this.chartEvents = {
                    click: (v) => {
                        this.cityName = v.name
                    }
                }
                return {
                    cityName: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>