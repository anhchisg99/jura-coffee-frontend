import product from '../../api/product.js'

const state = () =>({
    product:null
})
const getters = {}
const actions = {
    async getPerProduct({commit},id){
        const data = await product.getPerProduct(id)
        commit('getPerProduct',data)
    }
}
const mutations ={
     getPerProduct(state,product){
        state.product = product.data
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}