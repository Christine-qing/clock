import Vue from 'vue';
import Vuex from 'vuex';
import { state as userState, actions as userActions, mutations as userMutations } from './stores';

Vue.use(Vuex);

const state = Object.assign({}, userState);
const mutations = Object.assign({}, userMutations);
const actions = Object.assign({}, userActions);


export default new Vuex.Store({
    state,
    mutations,
    actions
});



