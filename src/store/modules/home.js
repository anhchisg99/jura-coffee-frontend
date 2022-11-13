import home from '../../api/home.js'

const state = () =>({
    categories:null
})
const getters = {}
const actions = {
    async getCategoryHomePage({commit}){
        const data = await home.getCategoryHomePage()
        commit('getCategoryHomePage',data)
    }
}
const mutations ={
     getCategoryHomePage(state,categories){
        state.categories = categories.data
    }
}

export default{
    namespaced:true,
    state,getters,actions,mutations
}