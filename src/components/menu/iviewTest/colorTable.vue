<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <p>自定义任意单元格样式：</p>
        <Table :columns="columns" :data="getData"></Table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colors: null,
                columns: [],
                getData: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.colors = {
                        color1: "demo-table-info-cell-1",
                        color2: "demo-table-info-cell-2",
                        color3: "demo-table-info-cell-3",
                        color4: "demo-table-info-cell-4",
                        color5: "demo-table-info-cell-5",
                    },
                    this.columns = [{
                            title: '姓名',
                            key: 'name'
                        },
                        {
                            title: '年龄',
                            key: 'age'
                        },
                        {
                            title: '地址',
                            key: 'address'
                        }
                    ],
                    this.getData = [{
                            name: '王小明',
                            age: 5,
                            address: '北京市朝阳区芍药居'
                        },
                        {
                            name: '张小刚',
                            age: 15,
                            address: '北京市海淀区西二旗',
                            // cellClassName: {
                            //     age: this.colors.color1,
                            //     address: this.colors.color3
                            // }
                        },
                        {
                            name: '李小红',
                            age: 25,
                            address: '上海市浦东新区世纪大道'
                        },
                        {
                            name: '周小伟',
                            age: 35,
                            address: '深圳市南山区深南大道',
                        }
                    ];
                let data = this.getData
                for (var i = 0; i < data.length; i++)
                    if (data[i].age < 10) {
                        data[i].cellClassName = {
                            age: this.colors.color1
                        }
                    } else if (data[i].age < 20) {
                    data[i].cellClassName = {
                        age: this.colors.color2
                    }
                } else if (data[i].age < 30) {
                    data[i].cellClassName = {
                        age: this.colors.color3
                    }
                } else if (data[i].age < 40) {
                    data[i].cellClassName = {
                        age: this.colors.color4
                    }
                }
            }
        }
    }
</script>

<style>
    .ivu-table .demo-table-info-cell-1 {
        background-color: #33CCFF;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-2 {
        background-color: #3399FF;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-3 {
        background-color: #3366FF;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-4 {
        background-color: #3333FF;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-5 {
        background-color: #3300FF;
        color: #fff;
    }
</style>
