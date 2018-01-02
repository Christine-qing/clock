//粗暴的引入
import * as types from '../mutation-types'


const state = {
  current: 0,
  number: 3,
  center:"116.39,39.99"
}

//获取
const getters = {
  current: state => state.current,
  number: state => state.number,
  center:state=>state.center,
}
//如何改变
const mutations = {
  [types.ADD_NUMBER]: (state, payload) => {
    // console.log('payload is ',payload,'state:',state)
    state.current += payload.amount;
  },
  [types.SET_CENTER]: (state, payload) => {
    // console.log('payload is ',payload,'state:',state)
    state.center = center
  },
}

//调用mutations来实现改变
const actions = {
  addNumber({commit}, payload) {
    commit(types.ADD_NUMBER, payload)
  },
  setCenter({commit}, payload) {
    commit(types.SET_CENTER, payload)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
