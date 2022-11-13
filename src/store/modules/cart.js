import { getItem, incrbyItem } from '../../api/cart.js'

function updateLocalStorage(cart) {
    localStorage.setItem('cart',
        JSON.stringify(cart))
}
const state = () => ({
    cart: [],
    isSuccess: null,
    message: 'cuong',
    isPopup:false
})
const getters = {
   
    productQuantity: state => product => {
        const item = state.cart.find(i => i._id === product._id)
        if (item) return item.quantity
        else return null
    },
    totalQuantity: state => {
        let sum = 0
        for (let i = 0; i < state.cart.length; i++) {
            sum = sum + state.cart[i].quantity
        }
        return sum
    },
 
    cartItems: state => {
        return state.cart
    },
    isItem: state =>{
        if(state.cart.length === 0){
            return 0
        }else{
            return 1
        }
    },
    subTotal: state => {
        let sum = 0
        for (let i = 0; i < state.cart.length; i++) {
            sum = sum + (state.cart[i].quantity * state.cart[i].price)
        }
        return sum
    }
}
const mutations = {
    async addToCart(state, product) {

        let item = state.cart.find(i => i._id === product._id)
        let value = 1
        let key = product._id

        if (item) {

            const incr = await incrbyItem(key, value)
            if (incr) {
                item.quantity++
            }
            console.log('not quantity')
        } else {
            const item = await getItem(key, value)
            if (item) {
                state.cart.push({ ...product, quantity: 1 })
            }
            console.log('not quantity')
        }

        updateLocalStorage(state.cart)
    },
    closePopup(state){
        state.isPopup = false
    },
    openPopup(state){
        state.isPopup = true
    },
    async removeFromCart(state, product) {
        let value = -1
        let key = product._id

        let item = state.cart.find(i => i._id === product._id)
        if (item) {
            if (item.quantity > 1) {
                await incrbyItem(key, value)
                item.quantity--
            }
            else {
                await incrbyItem(key, value)
                state.cart = state.cart.filter(i => i._id !== product._id)
            }
        }
        updateLocalStorage(state.cart)
    },
    removeAllFromCart(state) {
        state.cart = []
        updateLocalStorage(state.cart)
    },
    
    updateCartFromLocalStorage(state) {
        const cart = localStorage.getItem('cart')
        if (cart) {
            state.cart = JSON.parse(cart)
        }
    }
}
const actions = {

}

export default {
    namespaced: true,
    state, getters, actions, mutations
}