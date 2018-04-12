export const state = {
    data: "99"
}

export const actions = {
    setData(contex, val) {
        contex.commit("setData", val)
    }
}
export const mutations = {
    setData(state, val) {
        state.data = val
    }

}