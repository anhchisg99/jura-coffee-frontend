import axios from 'axios'
import url from './config.js'
export default{
    async getCategoryHomePage(){
        console.log(url)
        return await axios.get(`${url}/categories/get-category-home-page`)
    }
}
