
import axios from 'axios'
import url from './config.js'


export async function getInventoryPerProduct(id) {
    try {
        
        console.log(url)
        return await axios.get(`${url}/inventories/per-product/${id}`)
    } catch (error) {
        console.log('fail')
    }
}
