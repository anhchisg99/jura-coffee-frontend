import {getInventoryPerProduct} from '../../api/inventory.js'

const state = () =>({
    inventory:null
})
const getters = {}
const actions = {
    async getInventoryPerProduct({commit},id){
        const data = await getInventoryPerProduct(id)
        commit('getInventoryPerProduct',data)
    }
}
const mutations ={
     getInventoryPerProduct(state,inventory){
        state.inventory = inventory.data
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}