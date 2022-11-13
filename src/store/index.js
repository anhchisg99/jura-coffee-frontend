import {createStore} from 'vuex'
import shop from './modules/shop'
import home from './modules/home'
import product from './modules/product'
import cart from './modules/cart.js'
import order from './modules/order.js'
import categories from './modules/categories'
import inventories from './modules/inventories'
export default createStore({
    modules:{
        shop,
        home,
        product,
        categories,
        inventories,
        cart,
        order,
    }
})