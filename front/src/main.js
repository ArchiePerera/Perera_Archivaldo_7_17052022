import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.js"

import { createApp } from 'vue'

import App from './App.vue'
import Signin from "./components/Signin.vue"

const app = createApp(App)
const routes = [
    { path: "/", component: App },
    { path: "/signin", component: Signin },
]

app.mount('#app')
