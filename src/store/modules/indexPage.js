// import * as types from './mutation-types'

// export const state = {
//     count:1,
//     current:2
// }

// //actions里面的时间会触发mutation里的事件，来改变state，外部会调用state
// export const mutations={
//     add(state){
//         state.count+=1;
//     },
//     reduce(state){
//         state.count-=1;
//     },
//     changeData:(state,payload)=>{
//         state.current += payload.amount
//     }
// };




// const actions = {
//     addNumber({commit},payload){
//         commit(types.ADD_NUMBER,payload)
//     }
// }

// //外部调用 会触发actions里面的方法，这里列举一个例子foo
// // export const actions={
// //     foo(context,data){
// //       context.commit('add',data)
// //     }
// // }

// //这里的mutation是固定的写法，意思是改变的，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了



//粗暴的引入mutation-types的全部
import * as types from '../mutation-types'


const state = {
  current: 0,
  count: 1,
}

const getters = {
  evenOrOdd: (state) => {
    state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

const mutations = {
  [types.ADD_NUMBER]: (state, payload) => {
    // console.log('payload is ',payload)
    state.current += payload.amount;
  },
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

const actions = {
  addNumber({commit}, payload) {
    commit(types.ADD_NUMBER, payload)
  },
  increment: ({commit}) =>{ 
    commit('increment')
  },

  decrement: ({commit}) => {
    commit('decrement')
  },

  incrementIfOdd({commit,state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 5000)
    })
  }
}


// 最后将所有方法导出
export default {
  state,
  getters,
  actions,
  mutations
}
