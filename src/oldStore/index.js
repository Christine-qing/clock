import Vue from 'vue';
import Vuex from 'vuex';
import sample_mo from './modules/sample_mo'  
import sample_yin from './modules/sample_yin' 


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    modules: {
        sample_yin,
        sample_mo,
    }
});

//如想用此种方式添加vuex，将oldStore文件名改为store,并在main.js文件中配置即可
// Vue.Store({state,mutations})

