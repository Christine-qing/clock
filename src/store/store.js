import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    count:1
}
export default new Vuex.Store({
    state,
    
});

const mutations={
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
}


// Vue.Store({state,mutations})

//这里的mutation是固定的写法，意思是改变的，所以你先不用着急，只知道我们要改变state的数值的方法，必须写在mutations里就可以了