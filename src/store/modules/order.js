import {makeOrder} from '../../api/order.js'

const state = () =>({
    order:null
})
const getters = {}
const actions = {
    async makeOrder({commit},order){
        const data = await makeOrder(order)
        commit('makeOrder',data)
    }
}
const mutations ={
     makeOrder(state,order){
        state.order = order.data
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}