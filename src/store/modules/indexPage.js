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




import * as types from '../mutation-types'


const state = {
    current: 0,
}

const getters = {
    // todos: (state, getters) => {
    //     return state.count * 2;
    // }
}

const mutations = {
    [types.ADD_NUMBER]: (state, payload) => {
       // console.log('payload is ',payload)
        state.current += payload.amount;
    },
}

const actions = {
    addNumber({commit},payload){
        commit(types.ADD_NUMBER,payload)
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}



