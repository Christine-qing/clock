import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import * as mutations from './mutations'
import sample_mo from './modules/sample_mo'  
import sample from './modules/sample' 


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        sample,
        sample_mo,
    }
});


// Vue.Store({state,mutations})

