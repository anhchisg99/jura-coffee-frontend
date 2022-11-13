import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

app.use(store)
app.use(router)

//global variables
app.config.globalProperties.url = 'http://ec2-18-139-108-66.ap-southeast-1.compute.amazonaws.com';
// app.config.globalProperties.isPopup = false;

app.mount('#app')


