<template>
    <div>
        <Button><router-link to="/menuPage">返回菜单列表</router-link></Button>
        <Card style="width:1100px">
            <Select style="width:150px;margin-bottom:10px" placeholder="请选择人群名称">
               <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
            </Select>
            <Input v-model="sreachData" icon="ios-search" placeholder="请输入人群名称" style="width:180px;margin-bottom:10px" @on-enter="sreachPeople"></Input>
            <Button type="primary" style="position:absolute;top:10px;right:20px" @click="creatPeople()">+ 创建人群</Button>
            <editTable v-model="storeData" :columns-list="storeDataColumns" :total="total" @on-send="peopleSend" @on-portraits="peoplePortraits" @on-edit="peopleEdit" @on-download="peopleDownload" @on-delete="handleDel" @page-change="pageChange" @switch-change="switchChange"
                @sort-change="sortChange"></editTable>
  
            <br>
        </Card>
    </div>
</template>

<script>
    import editTable from "../../common/table/editTable.vue"
    export default {
        name: "",
        data() {
            return {
                storeDataColumns: [{
                        title: '人群名称',
                        key: "name",
                        width: 100,
                        align: 'center',
                    },
                    {
                        title: '用户数量',
                        align: 'center',
                        key: 'cont',
                        sortable: "custom"
                    },
                    {
                        title: '人群来源',
                        align: 'center',
                        key: 'source',
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'status',
                        width: 150,
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                            const text = row.status === 1 ? '待审核' : row.status === 2 ? '审核通过' : '审核拒绝';
                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: '最后更新时间',
                        align: 'center',
                        key: 'date',
                        width: 150,
                        sortable: 'custom'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 300,
                        key: 'handle',
                        handle: ['send', 'portraits', 'edit', 'download', 'delete', 'detailst', 'freeze']
                    },
                    {
                        title: '测试',
                        align: 'center',
                        width: 100,
                        key: 'handle',
                        // icon:true
                        switch: true
                        // handle: ['send', 'portraits', 'edit', 'download', 'delete', ]
                    }
                ],
                storeData: [],
                total: 0,
                sreachData: '',
                cityList: [{
                        value: '人群1',
                        label: '人群1'
                    },
                    {
                        value: '人群2',
                        label: '人群2'
                    },
                ]
            }
        },
        components: {
            editTable
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                var url = "static/storeData.json"
                this.$axios.get(url)
                    .then((response) => {
                        // debugger
                        // this.columns = response.data[0];
                        this.storeData = response.data.list;
                        this.total = response.data.total;
                    })
            },
            // 搜索
            sreachPeople() {
                console.log(this.sreachData)
                this.$Message.success('回车执行搜索');
            },
            // 投放
            peopleSend(index) {
                this.$Message.success('投放了第' + (index + 1) + '行数据');
            },
            // 画像
            peoplePortraits() {
                this.$Message.success('即将进入人群画像页面！');
            },
            // 编辑
            peopleEdit() {
                this.$Message.success('可以开始编辑了！')
            },
            // 删除
            handleDel(index) {
                this.$Message.success('删除了第' + (index + 1) + '行数据');
            },
            // 下载
            peopleDownload() {
                this.$Message.success('已添加到下载列表！')
            },
            pageChange(page) {
                console.log(page);
            },
            // 创建人群按钮
            creatPeople() {
                this.$Message.success('创建人群！')
            },
            // 开关按钮
            switchChange(val) {
                if (val === false) {
                    this.$Message.success("开关已关闭")
                } else {
                    this.$Message.success("开关已开启")
                }
            },
            // 排序
            sortChange(val) {
                if (val.order === "asc") {
                    this.$Message.success("升序")
                } else if (val.order === "desc") {
                    this.$Message.success("降序")
                } else if (val.order === "normal") {
                    this.$Message.success("正常顺序")
                }
            }
        }
    }
</script>

<style scoped>

</style>