/*
 * echarts全局配置项
 */

/**
 * 饼状图(数据字典覆盖度,标签覆盖度,完整性,数据轮廓-完整性分析)
 */
import echarts from 'echarts/dist/echarts.min'

const pieColor1 = '#ff925d';
const pieColor2 = '#ffb85d';
const pieColor3 = '#359cfb';
const pieOtherColor = '#D6DADD';

let pieOption = {
    title: {
        text: '',
        subtext: '',
        textStyle: {
            fontSize: 14
        },
        x: 'center'
    },
    color: ['#43A3FB', '#1FCD6D', '#95CF2F', '#F9D149', '#F9A349', '#975FDD', '#6962FC', '#3563EB', '#817BFB', '#63B1FB', '#A7D74F', '#FBB165', '#45D583', '#B7B3FE', '#A3D1FE', '#CBE799', '#FED3A5', '#91E7B7', '#FF4045'],

    tooltip: {
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10]
    },
    series: {
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        label: {
            normal: {
                position: 'center',
                formatter: function (params) { },
                textStyle: {
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: []
    }
}



/**
 * 环形图(数据轮廓-类型检查统计)
 */

const ringColor1 = '#0889fe';
const ringColor2 = '#3ca1fe';
const ringColor3 = '#71baff';
const ringColor4 = '#6bd1fb';
const ringColor5 = '#71f3ff';
const ringColor = [ringColor1, ringColor2, ringColor3, ringColor4, ringColor5];

let ringOption = {
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10]
    },
    grid: {
        left: '0',
        right: '0',
        containLabel: true
    },
    legend: {
        orient: 'vertical',
        top: '0px',
        right: '0px',
        itemHeight: 14,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        },
        selectedMode: false
    },
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.percent + '%';
                },
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
    }]
};




/**
 * 线状图(数据总量，用户活跃度-用户访问度)
 */
const lineColor = "#b3e7fa";
const lineColor2 = "#56a2f5";
const lineColor3 = "#ffb872";

let lineOption = {
    title: {
        text: '',
        textStyle: {
            fontSize: 14
        }
    },
    color: ['#4ed1ff', '#0e8cfe'],
    legend: {
        data: [{
            icon: 'circle'
        }, {
            icon: 'circle'
        }]
    },
    //              calculable : true,
    tooltip: {
        trigger: 'axis',
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10],
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
                color: '#7ac1fe',
                type: 'dashed'
            }
        }
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dee2e7'
            }
        },
        axisLabel: {
            show: true,
            interval: null,
            textStyle: {
                color: '#a5a5a5'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        position: 'left',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dee2e7'
            }
        },
        axisLabel: {
            show: true,
            interval: null,
            textStyle: {
                color: '#a5a5a5'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#dbdcdd', '#eceff3'],
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: []
};




/**
 * 横向柱状图(数据轮廓-top10-bottom10，用户活跃度-用户访问分布情况)
 */
let barLandscapeOption = {
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    color: ['#00399F'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10],
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            } // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            return params[1].name + '  数值:' + params[1].data;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // xAxis: {
    //     type: 'value',
    //     axisLine: {
    //         show: false
    //     },
    //     axisLabel: {
    //         show: false
    //     },
    //     axisTick: {
    //         show: false
    //     },
    //     splitLine: {
    //         show: false
    //     }
    // },
    // yAxis: {
    //     type: 'category',
    //     boundaryGap: true,
    //     axisLine: {
    //         show: true,
    //         lineStyle: {
    //             color: '#a6e2fd',
    //             width: 2
    //         }
    //     },
    //     axisLabel: {
    //         show: true,
    //         interval: null,
    //         textStyle: {
    //             color: '#707070'
    //         }
    //     },
    //     axisTick: {
    //         show: false
    //     },
    //     splitLine: {
    //         show: false
    //     }
    // },
    // series: [{ // For shadow
    //     type: 'bar',
    //     itemStyle: {
    //         normal: { color: '#d6e3f7' }
    //     },
    //     barGap: '-100%',
    //     barCategoryGap: '50%',
    //     animation: false
    // }, {
    //     type: 'bar',
    //     itemStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(
    //                 1, 1, 0, 1, [
    //                     { offset: 0, color: '#0889fe' },
    //                     { offset: 1, color: '#2ebdf9' }
    //                 ]
    //             )
    //         },
    //         emphasis: {
    //             color: '#1e78ef',
    //             shadowColor: 'rgba(30, 120, 239, 0.5)',
    //             shadowBlur: 2
    //         }
    //     },
    //     label: {
    //         normal: {
    //             show: false,
    //             position: 'right',

    //         }
    //     }
    // }]
};




/**
 * 纵向柱状图(数据轮廓-值分布-正态分布)
 */
let barPortraitOption = {
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    color: ['#43A3FB', '#1FCD6D', '#95CF2F', '#F9D149', '#F9A349', '#975FDD', '#6962FC', '#3563EB', '#817BFB', '#63B1FB', '#A7D74F', '#FBB165', '#45D583', '#B7B3FE', '#A3D1FE', '#CBE799', '#FED3A5', '#91E7B7', '#FF4045'],

    tooltip: {
        trigger: 'axis',
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10],
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: "cross",
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        show: true,
        right: '2%',
        // top: 'top',
        itemWidth: 16,
        itemHeight: 4,
        itemGap: 10,
        padding: 5,
        orient: 'horizontal',
        formatter: (name) => {
            return name.substring(0, 1)
        }
        // left: 'left'
    },
    legendData: {
        icon: 'rect'
    },
    grid: {
        show: false,
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '5%',
        containLabel: true // 防止标签溢出
    },
    axis: {
        boundaryGap: true, // x坐标轴两边留白
        // scale: false, // 是否显示0刻度(true不显示)
        nameLocation: 'end',
        nameGap: 10,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                width: 1,
                color: '#dae2e2'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                type: 'dotted',
                color: '#dae2e2'
            },
            onZero: true
        },
        axisLabel: {
            textStyle: {
                color: '#7F8B9C',
                fontFamily: 'Microsoft Yahei'
            }
        },
        nameTextStyle: {
            color: '#7F8B9C',
            fontFamily: 'Microsoft Yahei'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dee2e7',
            }
        },
        axisLabel: {
            show: true,
            interval: null,
            textStyle: {
                color: '#707070'
            }
        },
        axisPointer: {
            type: 'shadow'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        name: '',
        // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    },
    yAxis: {
        type: 'value',
        name: '数量',
        min: 0,
        // max: 200,
        interval: 50,
        nameGrap: 50,
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dee2e7',
            }
        },
        axisLabel: {
            show: true,
            interval: null,
            textStyle: {
                color: '#707070'
            },
            formatter: '{value} '
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#dbdcdd', '#eceff3'],
                type: 'dashed'
            }
        },


    },
    // animationDurationUpdate: 1200,
    series: {
        type: 'bar', //如为折线图，type改为line
        barWidth: '20%',
        itemStyle: {
            normal: {
                color: '#42aaf3'
            },
            emphasis: {
                color: '#1e78ef',
                shadowColor: 'rgba(30, 120, 239, 0.5)',
                shadowBlur: 2
            }
        }

    }
};

/**
 * 雷达图(数据地图)
 */
let barRadarOption = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: "rgba(246,249,251,0.9)",
        borderColor: '#d4e6f3',
        textStyle: {
            color: '#707070'
        },
        extraCssText: 'box-shadow: 0px 1px 4px rgba(57, 132, 170, 0.9);',
        padding: [13, 10]
    },
    legend: {
        orient: 'vertical',
        align: 'left',
        right: 0,
        bottom: 10,
        itemGap: 18,
        data: [{
            icon: 'circle',
            textStyle: {
                color: '#707070'
            }
        }, {
            icon: 'circle',
            textStyle: {
                color: '#707070'
            }
        }]
    },
    radar: {
        nameGap: 8,
        radius: '100%',
        startAngle: 0,
        name: {
            textStyle: {
                color: '#707070'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#fff', '#deeafa']
            }
        },
        indicator: []
    },
    series: [{
        name: '',
        type: 'radar',
        symbolSize: 7,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 18
                }
            }
        },
        data: [{
            value: [],
            name: '',
            itemStyle: {
                normal: {
                    color: '#0172d6'
                }
            },
            lineStyle: {
                normal: {
                    color: '#0172d6'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 0, 1, [{
                            offset: 1,
                            color: '#0174d9'
                        }, {
                            offset: 0,
                            color: '#0087fe'
                        }]
                    ),
                    opacity: 0.6
                }
            },
            zlevel: 0,
            z: 0
        }, {
            value: [],
            name: '',
            itemStyle: {
                normal: {
                    color: '#2dcbf3'
                }
            },
            lineStyle: {
                normal: {
                    color: '#7fddfe'
                }
            },
            areaStyle: {
                normal: {
                    color: '#2dcbf3',
                    opacity: 0.6
                },
                emphasis: {
                    color: '#2dcbf3',
                    opacity: 0.6
                }
            },
            zlevel: 10,
            z: 10
        }]
    }]
};

/*
 * 矩形图（数据地图）
 * */
let treemapOption = {
    tooltip: {
        formatter: function (info) {
            return [
                '<div class="tooltip-title">' + info.name + '</div>',
                'size: ' + info.data.id
            ].join('');
        }
    },

    series: [{
        type: 'treemap',
        breadcrumb: { show: false },
        visibleMin: 300,
        roam: false,
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
        label: {
            show: true,
            formatter: '{b}'
        },
        itemStyle: {
            normal: {
                borderColor: '#fff'
            }
        },
        levels: [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    gapWidth: 5
                }
            }
        }],
        data: []
    }]
};



let testBarOption = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    }, color: ['#43A3FB', '#1FCD6D', '#95CF2F', '#F9D149', '#F9A349', '#975FDD', '#6962FC', '#3563EB', '#817BFB', '#63B1FB', '#A7D74F', '#FBB165', '#45D583', '#B7B3FE', '#A3D1FE', '#CBE799', '#FED3A5', '#91E7B7', '#FF4045'],
}


export default {
    pieColor1,
    pieColor2,
    pieColor3,
    pieOtherColor,
    pieOption,
    lineColor,
    lineColor2,
    lineColor3,
    lineOption,
    barLandscapeOption,
    barPortraitOption,
    ringColor,
    ringOption,
    barRadarOption,
    treemapOption,
    testBarOption
}