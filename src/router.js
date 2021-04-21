import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router