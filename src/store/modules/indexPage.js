
//粗暴的引入mutation-types的全部
import * as types from '../mutation-types'


const state = {
  current: 0, //第一个vuex示例
  count:1,   //第二个vuex示例
}
//获取
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数',
  data:state=>state.count
}

//改变
const mutations = {

  //第一个vuex示例
  [types.ADD_NUMBER]: (state, payload) => {
    // console.log('payload is ',payload)
    state.current += payload.amount;
  },
  //第二个vuex示例
  increment(state) {
    state.count++
  },

  decrement(state) {
    state.count--
  },

}

//调用mutations来实现改变
const actions = {

  //第一个示例
  addNumber({commit}, payload) {
    commit(types.ADD_NUMBER, payload)
  },

  // 第二个示例
  increment: ({commit}) => commit('increment'),

  decrement: ({commit}) => commit('decrement'),

  incrementIfOdd({commit,state}) {
    if ((state.count + 1) % 2 === 0) {
      debugger
      commit('increment')
    }
  },

  //异步实现
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}


//一并导出所有方法
export default {
  state,
  getters,
  actions,
  mutations
}
