import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from "vue-router"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { createApp } from 'vue'

import App from './App.vue'
import Signin from "./components/Signin.vue"
import Wall from "./components/Wall.vue"

const app = createApp(App)

const routes = [
    { path: "/signin", component: Signin },
    { path: '/home', component: Wall },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
