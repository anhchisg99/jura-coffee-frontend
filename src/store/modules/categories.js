import categories from '../../api/categories.js'

const state = () =>({
    categories:null
})
const getters = {}
const actions = {
    async getHomeProduct({commit},route){
        // console.log({chan:route})
        const data = await categories.getHomeProduct(route)
        commit('getHomeProduct',data)
    }
}
const mutations ={
     getHomeProduct(state,categories){
        state.categories = categories.data
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}