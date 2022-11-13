// import data from '../data.json'
import axios from 'axios'
const url = 'http://ec2-18-139-108-66.ap-southeast-1.compute.amazonaws.com'


export default{
    async getItems(){
        return await axios.get(`${url}/products/new-release`)
    }
}
