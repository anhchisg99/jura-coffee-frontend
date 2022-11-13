import axios from 'axios'
import url from './config.js'


export async function makeOrder(order) {
    try {

        console.log('ordering success!')
        return await axios.post(`${url}/orders/make-order`,order)
    } catch (error) {
        console.log('fail')
    }
}
