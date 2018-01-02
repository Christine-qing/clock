//粗暴的引入
import * as types from '../mutation-types'


const state = {
  current: 0,
  number:3,
}

//获取
const getters = {
  current: state => state.current,
  number:state=> state.number,
}

//这里的mutation是固定的写法，意思是改变的，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了
const mutations = {
  [types.ADD_NUMBER]: (state, payload) => {
    console.log('payload is ',payload,'state:',state)
    debugger
    state.current += payload.amount;
  },
}

//调用mutations来实现改变
const actions = {
  addNumber({commit}, payload) {
    debugger
    commit(types.ADD_NUMBER, payload)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
