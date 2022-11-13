import shop from '../../api/shop'
// import {shop} from '../../api/index.js'
const state = () =>({
    items:{}
})
const getters = {}
const actions = {
    async getItems({commit}){
        const data = await shop.getItems()
        commit('getItems',data)
    }
}
const mutations ={
     getItems(state,items){
        state.items = items
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}