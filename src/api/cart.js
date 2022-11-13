import axios from 'axios'
import url from './config.js'


export async function getItem(key, value) {
    try {

        console.log('add to cart success!')
        return await axios.get(`${url}/carts/setItem?key=${key}&value=${value}`)
    } catch (error) {
        console.log('fail')
    }
}
export async function incrbyItem(key, value) {
    try {

        console.log('add to cart success!')
        return await axios.get(`${url}/carts/incrbyItem?productId=${key}&incr=${value}`)
    } catch (error) {
        console.log(error)
    }
} 
