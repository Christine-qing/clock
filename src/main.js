// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store/index'


import iView from 'iview';
import inMap from 'inmap'
import echarts from 'echarts/dist/echarts.min.js';
import 'iview/dist/styles/iview.css';


Vue.use(Vuex);
Vue.use(iView);
Vue.use(inMap);

// Vue.prototype.$http=axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
/*
*/
let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
      return config
}, error => {
    return Promise.reject(error)
})


//拦截器
axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            console.log('错误请求')
            break;
          case 401:
            console.log('未授权，请重新登录')
            break;
          case 403:
            console.log('拒绝访问') 
            break;
          case 404:
           console.log('请求错误,未找到该资源')
            break;
          case 405:
            console.log('请求方法未允许')
            break;
          case 408:
            console.log('请求超时')
            break;
          case 500:
           console.log('服务器端出错')
            break;
          case 501:
           console.log('网络未实现')
            break;
          case 502:
            console.log('网络错误') 
            break;
          case 503:
            console.log('服务不可用')
            break;
          case 504:
            conosle.log('网络超时')
            break;
          case 505:
            console.log('http版本不支持该请求')
            break;
          default:
            console.log(`连接错误${error.response.status}`) 
        }
      } else {
        console.log("连接到服务器失败") 
      }
      console.log(error)
  	return Promise.resolve(error.response)

  });


//设置默认url地址
  // axios.defaults.baseURL = '/api'
  axios.defaults.baseURL = 'http://localhost:3001/'
//设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// }

axios.defaults.timeout = 10000

//封装请求，默认传入两个值（url,param）,如只url,没有参数，可不传
export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
    },
  //post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          url,
          data: param,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res)
        })
      })
     }
  }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
//检测当前vue的版本，根据不同版本做不同的操作
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  console.log(version,"版本")
} else if (version === 1) {
  console.log(version,"版本")
} else {
  console.log(version,"版本")
}
