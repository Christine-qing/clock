// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import iView from 'iview';
import inMap from 'inmap'
import 'iview/dist/styles/iview.css';
import router from './router';
import axios from 'axios';
import echarts from 'echarts/dist/echarts.min.js';
import store from './store/index'

Vue.use(Vuex);
Vue.use(iView);
Vue.use(inMap);

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

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
