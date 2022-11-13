import axios from 'axios'
import url from './config.js'
export default{
    async getPerProduct(id){
        console.log(url)
        return await axios.get(`${url}/products/${id}`)
    }
}
