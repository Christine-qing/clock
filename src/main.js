
//应用程序入口文件（根目录）
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
import VCharts from 'v-charts'
import echarts from 'echarts/dist/echarts.min.js';
import util from './util.js'

// import 'echarts/map/js/china.js';
import 'iview/dist/styles/iview.css';
import './components/axios/index';
import './components/style/base.css';
import 'v-charts/lib/style.css';


Vue.use(Vuex);
Vue.use(iView);
Vue.use(inMap);
Vue.use(VCharts);

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$utils = util;

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
