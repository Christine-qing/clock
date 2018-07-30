<template>
    <div>
        <Row style="margin:20px;">
            <p class="add-people">新建人群画像</p>
            <div class="app-people-name">
                <span class="color-red">*</span><span>画像名称</span>
                <Input v-model="value" placeholder="请输入画像名称" style="width: 300px;margin-left:30px"></Input>
            </div>
            <div class="clearfix data-sources">
                <p class="fl"><span class="color-red">*</span><span>画像数据来源</span></p>
                <div class="data-base">
                    <Icon type="soup-can-outline"></Icon>
                    <p>自有</p>
                </div>
            </div>
            <Card>
                <p slot="title">新增画像</p>
                <div class="clearfix">
                    <ul class="fl left-name">
                        <li>所属画像组:</li>
                        <li><span class="color-red">*</span><span>默认视图:</span></li>
                        <li>是否过滤无效值:</li>
                        <li><span class="color-red">*</span><span>最多展示维度数量:</span></li>
                        <li><span class="color-red">*</span><span>来源:</span></li>
                    </ul>
                    <ul class="fl right-data">
                        <li> <span><strong>{{ascription}}</strong></span></li>
                        <li>
                            <Select v-model="model8" clearable style="width:300px;float:left;margin-top:-4px;">
                                                <Option v-for="item in optionVal" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                        </li>
                        <li>
                            <Switch v-model="switch1" @on-change="switchChange"></Switch>
                        </li>
                        <li>
                            <Input v-model="value" placeholder="请输入维度数量" style="width: 300px"></Input>
                        </li>
                        <li>
                            <RadioGroup v-model="dataSources">
                                <Radio label="元数据"></Radio>
                                <Radio label="标签体系"></Radio>
                            </RadioGroup>
                        </li>
                    </ul>
                </div>
            </Card>
            <br>
            <Card>
                <p slot="title">账户与账户关联属性</p>
                <Tabs type="card">
                    <TabPane v-for="(item,index) in tabPaneList" :key="index" :label="item.label">
                        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                            <Checkbox :value="checkAll" @on-change="checkAllchange(item)" v-model="item.checked">全选</Checkbox>
                        </div>
                        <Checkbox v-for="(val,i) in item.child" :key="i" v-model="val.check" @on-change="(value) => checkChange(value,item)">{{val.value}}</Checkbox>
                    </TabPane>
                </Tabs>
            </Card>
        </Row>
        <br><br><br><br><br><br>
        <Row style="margin:20px;">
            <p style="font-size: 16px;">下载人群包</p>
            <div class="clearfix">
                <ul class="fl download-left">
                    <li>
                        <span class="color-red">*</span><span>下载人群名称:</span>
                    </li>
                    <li><span>人群类型:</span></li>
                    <li> <span class="color-red">*</span><span>下载字段:</span></li>
                </ul>
                <ul class="fl download-right">
                    <li>
                        <Input v-model="value" placeholder="双11推广人群" style="width: 300px"></Input>
                        <!-- <span>9000</span> -->
                    </li>
                    <li>
                        <Input v-model="value2" placeholder="组合构建" style="width: 300px;"></Input>
                    </li>
                    <li></li>
                </ul>
            </div>
            <Card>
                <div v-for="(item,index) in checkboxList" :key="index">
                    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                        <Checkbox @on-change="allchange(item)" v-model="item.checked">全选</Checkbox>
                    </div>
                    <Checkbox v-for="(val,i) in item.child" :key="i" @on-change="(value) => checkedChange(value,item)" v-model="val.check">{{val.value}}</Checkbox>
                </div>
            </Card>
        </Row>
        ----------------------------------
        <br>
        <br>
        <br>
        <br>
        <br>
        <Row style="padding-top:50px;padding-bottom:200px">
            <Col span="4">
            <Cascader :data="dataValue"  @on-change="cascaderChange"></Cascader>
            </Col>
            <Col span="4" v-if="value1=='SDK版本'" >
            <Select v-model="model12" filterable multiple>
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col span="4" v-if="value1=='北京'">
            <Input v-model="inputVal" placeholder="请输入" ></Input>
            </Col>
              
            <Col span="4" v-if="value1=='安徽'">
              <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
              </Col>
        </Row>

           ----------------------------------
           
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: "",
                value2: "",
                model: '',
                dataSources: '元数据',
                ascription: "一方数据画像",
                tabPaneList: [{
                        label: "Web浏览器属性",
                        checked: false,
                        child: [{
                                check: true,
                                value: "1-1"
                            },
                            {
                                check: false,
                                value: "1-2"
                            },
                            {
                                check: false,
                                value: "1-3"
                            },
                        ],
                    },
                    {
                        label: "用户人群",
                        checked: false,
                        child: [{
                                check: true,
                                value: "2-1"
                            },
                            {
                                check: true,
                                value: "2-2"
                            },
                            {
                                check: false,
                                value: "2-3"
                            },
                        ],
                    },
                    {
                        label: "用户人群",
                        child: [{
                                check: true,
                                value: "3-1"
                            },
                            {
                                check: true,
                                value: "3-2"
                            },
                            {
                                check: true,
                                value: "3-3"
                            },
                        ],
                    },
                ],
                optionVal: [{
                        value: "v_bar",
                        label: "纵向柱状图"
                    },
                    {
                        value: "h_bar",
                        label: "横向柱状图"
                    },
                    {
                        value: "line",
                        label: "线形图"
                    },
                    {
                        value: "pie",
                        label: "饼状图"
                    }
                ],
                switch1: false,
                model8: "",
                checkboxList: [{
                    checked: false,
                    child: [{
                            check: true,
                            value: "1-1"
                        },
                        {
                            check: false,
                            value: "1-2"
                        },
                        {
                            check: false,
                            value: "1-3"
                        }
                    ]
                }],
                checkall: false,
                checkAll: false,
                checkAllGroup: [],
                dataValue: [{
                    value: 'SDK版本',
                    label: 'SDK版本',
                    children: [{
                            value: '是',
                            label: '是'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                            value: 'nanjing',
                            label: '南京',
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                        }
                    ],
                },
                {
                    value: 'anhui',
                    label: '安徽',
                    children: [{
                            value: 'hefei',
                            label: '合肥',
                        },
                        {
                            value: 'bangbo',
                            label: '蚌卜',
                        }
                    ],
                }],
                value1: "SDK版本",
                cityList: [{
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model12: [],
                inputVal: ""
            }
        },
        components: {},
        mounted() {},
        methods: {
            switchChange() {},
            // 新建画像 全选事件
            checkAllchange(item) {
                let data = item.child;
                if (item.checked === true) {
                    data.forEach((val, i) => {
                        val.check = true
                    })
                } else {
                    data.forEach((val, i) => {
                        val.check = false
                    })
                }
            },
            // 画像的多选
            checkChange(value, item) {
                let data = item.child;
                let arr = [];
                data.forEach((val, index) => {
                    if (val.check === true) {
                        arr.push(val)
                    }
                })
                if (arr.length === data.length) {
                    item.checked = true
                } else {
                    item.checked = false
                }
            },
            // 下载-全选
            allchange(item) {
                let data = item.child;
                if (item.checked === true) {
                    data.forEach((val, i) => {
                        val.check = true
                    })
                } else {
                    data.forEach((val, i) => {
                        val.check = false
                    })
                }
            },
            // 下载的多选
            checkedChange(value, item) {
                let data = item.child;
                let arr = [];
                data.forEach((val, index) => {
                    if (val.check === true) {
                        arr.push(val)
                    }
                })
                if (arr.length === data.length) {
                    item.checked = true
                } else {
                    item.checked = false
                }
            },
            cascaderChange(value,selectedData){
             debugger
             this.value1=selectedData[0].label
            }
        },
        watch: {}
    }
</script>

<style scoped lang="less">
    .clearfix:after {
        clear: both;
        content: "";
        display: block;
    }
    .fl {
        float: left
    }
    p,
    span {
        font-size: 14px
    }
    .color-red {
        color: red
    }
    .add-people {
        font-size: 16px;
    }
    .app-people-name {
        margin-top: 20px;
        margin-left: 50px
    }
    .data-sources {
        margin: 20px 0 20px 50px;
        .data-base {
            float: left;
            width: 74px;
            height: 66px;
            border: 1px solid #ccc;
            text-align: center;
            color: #0099FF;
            background: #EEEEEE;
            border-radius: 4px;
            margin-left: 20px;
            margin-top: -10px;
            i {
                font-size: 40px;
                margin-top: 6px
            }
        }
    }
    #box {
        width: 100px;
        height: 100px;
        border: 1px solid white;
        background: red;
    }
    .left-name {
        li {
            width: 200px;
            height: 30px;
            text-align: right;
            margin-top: 20px;
        }
    }
    .right-data {
        li {
            margin-top: 20px;
            margin-left: 30px;
            width: 200px;
            height: 30px;
            text-align: left
        }
    } // -----------
    .download-left {
        margin-top: 20px;
        li {
            width: 150px;
            height: 30px;
            margin-top: 20px;
            text-align: right;
        }
    }
    .download-right {
        margin-top: 20px;
        margin-left: 30px;
        li {
            width: 150px;
            height: 30px;
            margin-top: 20px;
            text-align: left;
        }
    }
</style>