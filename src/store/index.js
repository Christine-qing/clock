import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import * as mutations from './mutations'
import sample from './modules/sample'  //第一个示例


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        sample
    }
});


// Vue.Store({state,mutations})

