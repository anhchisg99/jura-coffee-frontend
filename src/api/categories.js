import axios from 'axios'
import url from './config.js'

export default{
    async getHomeProduct(route){
        const limit = 3
        const category = route
        return await axios.get(`${url}/products/relate-product?category=${category}&limit=${limit}`)
    }
}
