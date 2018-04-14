/**
 * Created by webdeveloper on 2018/3/27.
 */
import axios from 'axios'
import bus from './bus'
// import menu from '../assets/menu'

export const getAccessToken = () => {
  //return localStorage.getItem('access_token')
  return '22333'
}


const sortData = (arr = []) => {
  arr = arr.map((obj) => {
    return isNaN(obj) ? 0 : obj
  })
  return arr.sort((a, b) => {
    return a - b
  })
}
/**
 * 深度拷贝
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns Object
 */
export const mergeRecursive = (obj1, obj2) => {
  for (let p in obj2) {
    try {
      if (obj2[p].constructor === Object) {
        if (!obj1[p]) {
          obj1[p] = {}
        }
        obj1[p] = mergeRecursive(obj1[p], obj2[p])
      } else {
        obj1[p] = obj2[p]
      }
    } catch (e) {

    }
  }
  return obj1
}

/**
 * 深度拷贝数组
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns Array
 */
export const mergeRecursiveArray = (arr1, arr2) => {
  for (var i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  return arr1
}

export const configUpload = (currentMenu) => {
  var url = '', uploadDisable = false;
  switch (currentMenu) {
    case '1':
      url = process.env.basicPath + process.env.uploadPath[0] + '';
      uploadDisable = false;
      break;
    case '2':
      url = process.env.basicPath + process.env.uploadPath[1] + '';
      uploadDisable = false;
      break;
    case '3':
      url = process.env.basicPath + process.env.uploadPath[2] + '';
      uploadDisable = false;
      break;
    case '4':
      url = '';
      uploadDisable = true;
      break;
    default:
      url = ''
      uploadDisable = true;
      break;
  }
  return [url,uploadDisable]
}
/**
 * 保留2位小数
 * @param {Number} val
 * @returns {Number}
 */
export const getRound = (val = 0) => {
  const rex = /\d+[.]\d{2}/g
  return rex.test(val) ? parseFloat(val.toFixed(2)) : val
  // return Math.round(val * Math.pow(10, len)) / Math.pow(10, len)
}
/**
 * 格式化并返回箱型图tooltip数据
 * @param {“”}
 */
export const formatBoxplotTooltipData = (param) => {
  return [
    '上限: ' + param.data[4],
    'Q3: ' + param.data[3],
    '中位线: ' + param.data[2],
    'Q1: ' + param.data[1],
    '下限: ' + param.data[0]
  ].join('<br/>')
}
/**
 * 去掉字符串两边的‘中括号’，并将内容转为数组
 * @param {“”}
 */
export const strToArray = (str) => {
  //var str = '[72,63,53,93,88,70,59,55,67,97,57,62,72,78,79,81,67,89,59,62,54,59,55,87]';
  str = str.substring(1, str.length - 1);
  var targetStr = str.split(",");
  return targetStr;
}
/**
 * 根据geojson文件返回后续操作所需数据(重新映射geojson文件中的km2字段内容)
 * @param {“源数据”}
 * @return {[]} [param1,param2,param3]
 */
export const formatGeojsonData = (sourceData, key) => {
  var targetKeyData = [];
  var targetGeoData = [];
  var count = 0;
  var innerVal;
  var proper;
  var legend = []
  var pieData = {}
  for (var val of sourceData.features) {
    //替换key内容
    proper = val.properties[key]
    if (proper === 3)
      val.properties[key] = '城区'
    else if (proper === 2)
      val.properties[key] = '扩展区'
    else if (proper === 1)
      val.properties[key] = '郊区'

    //获取key内容
    var ob = new Object();
    ob[key] = val.properties[key]
    targetKeyData.push(ob);

    //找不同的key并计数
    if (Array.indexOf) {
      if (legend.indexOf(ob[key]) === -1) {
        legend.push(ob[key])
        pieData[ob[key]] = 1
      } else
        pieData[ob[key]]++
    }

    //生成geojson对象
    innerVal = val.geometry.coordinates[0];
    var arr = [];
    for (var i = 0; i < innerVal.length; ++i) {
      arr.push(innerVal[i])
    }
    var obj = new Object();
    obj['geo'] = arr;
    obj[key] = val.properties[key];
    targetGeoData.push(obj);
    count++;
  }
  return [sourceData, targetKeyData, targetGeoData, legend.reverse(), pieData];
}
/**
 * 提取geojson中的数据成tdmap可用的结构
 * @param {“源数据”}
 * @return {[]} []
 */
export const getUsefulGeojson = (sourceData) => {
  var targetGeoData = [];
  var innerVal;
  var count = 0;
  for (var val of sourceData.features) {
    innerVal = val.geometry.coordinates[0];
    var arr = [];
    for (var i = 0; i < innerVal.length; ++i) {
      arr.push(innerVal[i])
    }
    var ob = new Object();
    ob['geo'] = arr;
    ob['km2'] = val.properties.km2;
    targetGeoData.push(ob);
    count++;
  }
  return sourceData;
}
/**
 * 提取geojson中的数据的km2
 * @param {“源数据”}
 * @return {[]} []
 */
export const getKmFromGeojso = (sourceData) => {
  var targetGeoData = [];
  var innerVal;
  var count = 0;
  for (var val of sourceData.features) {
    var ob = new Object();
    ob['km2'] = val.properties.km2;
    targetGeoData.push(ob);
    count++;
  }
  return targetGeoData;
}
/**
 * 获取数组最小最大值
 * @param {[min,max]} options {data: []}
 */
export const getAbsData = (options = {}) => {
  var obj = options.data[0];
  //         var targetArr = [];
  //         for ( var i in obj ){
  //           targetArr.push( obj[i] );
  // 　　    }
  var finalMax = Math.max(...obj);
  const defaults = { data: [], type: 'bar' }
  mergeRecursive(defaults, options)
  let newData = JSON.parse(JSON.stringify(defaults.data))
  // 二维数组
  if (newData.length && Object.prototype.toString.call(newData[0]) === '[object Array]') {
    let _newData = []
    newData.forEach((obj) => {
      _newData = _newData.concat(sortData(obj))
    })
    newData = sortData(_newData)
  } else {
    newData = sortData(newData)
  }
  let min = newData[0] < 0 && newData[0] > -1 ? -1 : parseInt(newData[0] || 0);
  let _min = newData[0]
  let max = parseInt(newData[newData.length - 1] || 0),
    minOffset = 0,
    maxOffset = 0,
    minDivisor = '',
    maxDivisor = ''
  for (let i = 0, len = ('' + min).length; i < len; i++) {
    minDivisor += !i ? '1' : '0'
  }
  if (min < 0) {
    minDivisor = minDivisor.substring(0, minDivisor.length - 1)
    minOffset = min + (-parseInt(minDivisor))
  } else {
    minOffset = min - parseInt(minDivisor)
  }
  let minOffsetStr = '' + minOffset,
    tempMinOffsetStr = ''
  for (let i = 0, len = minOffsetStr.length; i < len; i++) {
    if (!i) {
      if (minOffset < 0) {
        tempMinOffsetStr += minOffsetStr.substring(0, 2)
        i = 1
      } else {
        tempMinOffsetStr += minOffsetStr.substring(0, 1)
      }
    } else {
      tempMinOffsetStr += '0'
    }
  }
  minOffset = parseInt(tempMinOffsetStr)
  for (let i = 0, len = ('' + max).length; i < len; i++) {
    maxDivisor += !i ? '1' : '0'
  }
  if (max < 0) {
    maxDivisor = maxDivisor.substring(0, maxDivisor.length - 1)
    maxOffset = '' + (max + (parseInt(maxDivisor)))
  } else {
    maxOffset = '' + (max + parseInt(maxDivisor))
  }
  let maxOffsetStr = '' + maxOffset,
    tempMaxOffsetStr = ''
  for (let i = 0, len = maxOffsetStr.length; i < len; i++) {
    if (!i) {
      if (maxOffset < 0) {
        tempMaxOffsetStr += maxOffsetStr.substring(0, 2)
        i = 2
      } else {
        tempMaxOffsetStr += maxOffsetStr.substring(0, 1)
      }
    } else {
      tempMaxOffsetStr += '0'
    }
  }
  maxOffset = parseInt(tempMaxOffsetStr)
  // if (min / 2 > minOffset) {
  //     minOffset = parseInt(min / 2)
  // }
  if (min === 0) {
    minOffset = 0;
  }
  return {
    min: _min,
    max: finalMax,
    minOffset,
    maxOffset: defaults.type === 'bar' ? getRound((maxOffset * 1.5)) : getRound(maxOffset * 1.2)
  }
}
/**
 * 初始化盒子配置项 如果 echarts含有baseOption配置项除type id属性之外,其它属性均需配置在baseOption内
 * @param {Object} options { title: '', echarts: { type: '', id: 'domId'}, table: {} }
 * @returns { title: '', echarts: { type: '', id: 'domId', xAxis: [],yAxis: [],series: [] }, table: {columns: [],data: []} }
 */
export const getBoxOptions = (options = {}) => {
  const defaults = { title: options.title || '' }
  if (options.echarts) {
    const obj = {
      legend: { show: true, data: [] },
      xAxis: [],
      yAxis: [],
      series: []
    }
    if (options.echarts.baseOption) {
      defaults.echarts = mergeRecursive({
        baseOption: { baseOption: mergeRecursive(obj, { options: [] }) }
      }, options.echarts)
    } else {
      defaults.echarts = mergeRecursive(obj, options.echarts)
    }
  }
  if (options.table) {
    defaults.table = mergeRecursive({
      columns: [],
      data: []
    }, options.table)
  }
  if (options.map) {
    defaults.map = mergeRecursive({
      legend: [],
      data: []
    }, options.map)
  }
  if (options.toolbar) {
    defaults.toolbar = mergeRecursive({}, options.table)
  }
  mergeRecursive(defaults, options)
  return defaults
}
/**
 * 获取盒子数据
 * @param {Object} options { type: 'line'||'scatter'||'bar', data: { data: [] } })
 * @returns {Object}
 */
export const getBoxData = (options = { type: '', data: { data: [] } }) => {
  const data = []
  if (options.type && options.data && options.data.data) {
    const keys = Object.keys(options.data.data[0])
    for (let i = 0; i < keys.length; i++) { data.push([]) }
    options.data.data.forEach((obj, index) => {
      keys.forEach((key, keyIndex) => {
        let val = obj[key]
        if (typeof val === 'number') { val = getRound(val) }
        data[keyIndex].push(val)
      })
    })
  }
  return data
}
/**
 * 生成年份范围
 * @param {number} min
 * @param {number} max
 * @returns{array} []
 */
export const generateYearRange = (min = 2015, max = 2020) => {
  let yearArr = []
  for (let i = min; i <= max; i++) {
    yearArr.push('' + i)
  }
  return yearArr
}
/**
 * 生成columns属性
 * @param {Object} options { title: ['年份', '第二产业', '第三产业'], key: ['name', 'second', 'third'] }
 * @returns {array} []
 */
const generateColumns = (options = {}) => {
  const columns = []
  for (let i in options) {
    options[i].forEach((val, index) => {
      const col = columns[index] || {}
      col[i] = val
      columns[index] = col
    })
  }
  return columns
}
/**
 * 生成data属性
 * @param {Object} options {name:[2007,2008],data:[{a:'a'},{a:'aa'}]}
 * @returns{array} [{name:2007,a:'a'},{name:2008,a:'aa'}]
 */

/**
 * 格式化请求之后的数据
 * @param {Object} obj {name:'',columnsConfig:{title: ['年份', '第二产业', '第三产业'], key: ['name', 'second', 'third']},dataConfig:[{},{}]}
 * @returns {Object} obj {name:'',columns:[],data:[]}
 */
export const formatData = (obj = {}) => {
  return {
    name: obj.name || '',
    columns: generateColumns(obj.columnsConfig),
    data: obj.dataConfig || []
    // data: generateData(obj.dataConfig)
  }
}
export const formate = (datas) => {
  var data = {}
  Object.keys(datas[0]).map(function(schema) {
    data[schema] = datas.map(function(row) {
      return row[schema]
    })
  })
  return data
}
Array.prototype.max = function() {
  return this.reduce((a, b) => Math.max(a, b))
}
export const metric2Dimension = (datas, baseDimensions, configs) => {
  return datas.map(row => {
    var objs = []
    var dimensions = baseDimensions.map(baseDimension => [baseDimension, row[baseDimension]])
    var columns = configs.map(cg => cg.metrics(Object.keys(row)).map(metric => {

      var obj = {}
      obj[cg['newDimension']] = metric.substring(metric.indexOf('：') + 1, metric.length)
      obj[cg['dimensionColumn']] = row[metric]
      return obj
    }))
    var max = columns.map(cs => cs.length).max()
    for (var i = 0; i < max; i++) {
      var obj = {}
      dimensions.forEach(dimension => { obj[dimension[0]] = dimension[1] })
      columns.forEach(column => Object.keys(column[i]).forEach(key => { obj[key] = column[i][key] }))
      objs.push(obj)
    }
    return objs
  }).reduce((a, b) => a.concat(b))
}
export const formateQuadrant = (datas, schemas) => {
  let schema = { 'xKey': schemas[0], 'yKey': schemas[1], 'sizeKey': schemas[2], 'classKey': schemas[3], 'timeKey': schemas[4] }
  let classes = Array.from(new Set(datas.map(row => row[schema.classKey])))
  let timelines = Array.from(new Set(datas.map(row => row[schema.timeKey]))).sort((a, b) => a - b)
  let series = timelines.map(time => classes.map(clazz => datas.filter((value, index, array) => value[schema.classKey] === clazz && value[schema.timeKey] === time)
    .map((row) => schemas.map(_schema => row[_schema]))[0]))
  let xyNums = [schema.xKey, schema.yKey].map(key => [Math.max, Math.min].map(match => datas.map(row => row[key]).map(num => typeof num === 'number' ? num : 0).reduce((a, b) => match(a, b))))
    .reduce((a, b) => ({ xMax: a[0], xMin: a[1], yMax: b[0], yMin: b[1] }))
  return { schemas: schemas, classes: classes, timelines: timelines, series: series, xMax: xyNums.xMax, xMin: xyNums.xMin, yMax: xyNums.yMax, yMin: xyNums.yMin }
}

export const makeRequest = (config) => {
  var url =  process.env.basicPath + process.env.apiPath[0]
  const defaults = {
    method: 'post',
    url: url,
    headers: {
      'authorization': /*'Bearer ' + */ (getAccessToken())
    },

  }
  mergeRecursive(defaults, config)
  const ax = bus.$axios(defaults);
  // ax.catch(function(ex) {
  //     if (ex.response && ex.response.status === 401) {
  //         console.log('redirection in makeRequest')
  //         bus.router.push('/login')
  //     }
  // })
  return ax;
}



/**
 * 城市对比
 * @param {Object} obj { data1: [], data2: [], metric: [], cityList: [] }
 * @returns {Object} obj {total:[],metric:[]}
 */
export const contrastCity = (options) => {
  let total = []
  // 如果是对比数据则需要每个图例上添加城市
  let addCityName = options.data1 && options.data2 ? 1 : 0,
    split = options.split ? options.split : '：'
  options.data1.forEach((data, index) => {
    const obj = {}
    for (let i in data) {
      let key = i

      key = key.substring(key.indexOf(split) + 1, key.length)
      // 添加城市名称
      if (addCityName) {
        // metric[0]=年份
        if (options.isFirstMetric) {
          key = options.cityList[0] + '-' + key
        } else {
          if (i !== options.metric[0]) {
            key = options.cityList[0] + '-' + key
          }
        }
      }
      obj[key] = data[i]
    }
    total.push(obj)
  })
  if (options.data2) {
    options.data2.forEach((data, index) => {
      for (let i in data) {
        let key = i
        key = key.substring(key.indexOf(split) + 1, key.length)
        // 添加城市名称
        if (addCityName) {
          // metric[0]=年份
          if (options.isFirstMetric) {
            key = options.cityList[1] + '-' + key
          } else {
            if (i !== options.metric[0]) {
              key = options.cityList[1] + '-' + key
            }
          }
        }
        total[index][key] = data[i]
      }
    })
  }

  // 重新调整图例
  options.metric = []
  for (let i in total[0]) {
    options.metric.push(i)
  }
  return {
    data: total,
    metric: options.metric || []
  }
}
/**
 * 对柱状折线混合图进行数据分类,方便获取最大值
 * @param {}
 * @returns []
 */
export const getDataCategory = (data) => {
  let dataArr = []
  let len = (data.length - 1) / 2
  len = len ? 2 : len
  for (let i = 0; i < len; i++) {
    dataArr.push([])
  }
  data.forEach((obj, index) => {
    // 第0个数组过滤掉
    if (index) {
      index % 2 ? dataArr[0] = dataArr[0].concat(obj) : dataArr[1] = dataArr[1].concat(obj)
    }
  })
  return dataArr
}
/**
 * getStyle
 *
 * */

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
export function getStyle (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
    return element.style[styleName];
  }
}
/**
* scatter初始化配置*/
export const scatterConfig = (data, config) => {

  const baseOption = {
    tooltip: {
      trigger: 'item',
      formatter: function(obj) {
        const value = obj.data
        let tooltipStr = ''
        data.schemas.reduce((newSchemas, val, i) => {
          if (newSchemas.indexOf(val) === -1) {
            newSchemas.push(val)
            tooltipStr += `${val} ：${value[i]}  <br>`
          }
          return newSchemas
        }, [])
        return tooltipStr
      }
    },
    grid: {
      right: 80,
      left: 80
    },
    visualMap: [{
      show: true,
      dimension: 3,
      orient: 'vertical',
      top: 30,
      // left: 0,
      itemWidth: 16,
      itemHeight: 4,
      textGap: 0,
      categories: data.classes,
      calculable: true,
      precision: 0.1,
      inRange: {
        color: (() => {
          return COLORS
        })()
      }
    }],
    timeline: {
      data: []
    },
    xAxis: [{
      type: 'value',
      max: data.xMax,
      min: data.xMin
    }],
    yAxis: [{
      type: 'value',
      max: data.yMax,
      min: data.yMin
    }],
    series: [{
      type: 'scatter',
      data: [],
      symbolSize: (val) => {
        return 10
      }
    }],
    animationDurationUpdate: 2000,
    animationEasingUpdate: 'quinticInOut'
  }
  const options = []
  // 循环时间
  for (let n = 0; n < data.timelines.length; n++) {
    baseOption.timeline.data.push(data.timelines[n])
    options.push({
      series: {
        type: 'scatter',
        data: data.series[n],
        symbolSize: function(val) {
          if (val) {
            return Math.log(val[2]) * 2
          } else {
            return 10
          }
        }
      }
    })
  }
  if (config) {
    mergeRecursive(baseOption, config)
  }
  return {
    baseOption,
    options
  }
}

export const sortAttribute = (list, attribute) => {
  list.sort((a, b) => {
    return b[attribute] - a[attribute]
  })
}
export const getColor = (colors, key) => {
  for (let color in colors) {
    if (parseFloat(key) <= parseFloat(color)) {
      return colors[color];
    }
  }
  return "gray";
};


export const setAlertDiv = (id, name, x, y) => {
  x += 10;
  y += 10;
  const dom = document.getElementById(id);
  dom.innerHTML = name;
  dom.style.top = y + 'px';
  dom.style.left = x + 'px';
  dom.style.display = 'inline-block';
};
export const removeDiv = (id) => {
  const dom = document.getElementById(id);
  dom.innerHTML = '';
  dom.style.display = 'none';

};



export const setPath = ((path)=>{
  const data = menu.child;
  const _menu = {
    firstCurrent: '',
    leftCurrent: '',
    childCurrent: '',
    firstChild: []
  }
  for (let i = 0; i < data.length; i++) {
    const _data = data[i];
    const child = _data.child;
    for (let j = 0; j < child.length; j++) {
      var _jdata = [];
      _jdata = child[j];
      if (path === _jdata.href) {
        _menu.firstCurrent = _data.id;
        _menu.leftCurrent = _jdata.id;
        _menu.firstChild = child;
        return _menu;
      }
      for (let s = 0; s < _jdata.child.length; s++) {
        const _sdata = _jdata.child[s];
        if (path === _sdata.href) {
          _menu.firstChild = child;
          _menu.firstCurrent = _data.id;
          _menu.leftCurrent = _jdata.id;
          _menu.childCurrent = _sdata.id;
          return _menu;
        }
        if(_sdata.child){
          for (let k = 0; k < _sdata.child.length; k++) {
            const _kdata = _sdata.child[k];
            if (path === _kdata.href) {
              _menu.firstChild = child;
              _menu.firstCurrent = _data.id;
              _menu.leftCurrent = _sdata.id;
              _menu.childCurrent = _kdata.id;
              return _menu;
            }
          }
        }
      }
    }
  }

})






