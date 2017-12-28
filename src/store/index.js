import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import getters from './getters';
import * as mutations from './mutations'
import index from './modules/indexPage'


Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        index
        // dashboard,
        // map,
        // report
        // map,
        // report,
        // login
    }
});


// Vue.Store({state,mutations})

//这里的mutation是固定的写法，意思是改变的，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了