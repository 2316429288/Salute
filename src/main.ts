import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import axios from 'axios'
import store from './store'
import mock from './data/mockData'

axios.defaults.baseURL = 'https://api.shayu.com/api/'

mock.getColumns()

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app");
