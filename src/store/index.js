import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import * as mutations from './mutations'
import sample_mo from './modules/sample_mo'  
import sample_yin from './modules/sample_yin' 


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        sample_yin,
        sample_mo,
    }
});


// Vue.Store({state,mutations})

