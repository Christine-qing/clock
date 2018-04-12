//粗暴的引入
import * as types from '../mutation-types'


const state = {
  count: 1, //第二个vuex示例
}

//获取
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数',
  count: state => state.count
}

//这里的mutation是固定的写法，意思是改变的，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了
const mutations = {

  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },

}

//调用mutations来实现改变
const actions = {

  increment: ({
    commit
  }) => commit('increment'),

  decrement: ({
    commit
  }) => commit('decrement'),

  //先判断当前的值，然后再进行操作
  incrementIfOdd({
    commit,
    state
  }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },

  //异步实现
  incrementAsync({
    commit
  }) {
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
