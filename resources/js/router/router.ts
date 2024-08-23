import { createRouter, createWebHistory } from 'vue-router'
import Login from "../pages/login.vue";
import Home from "../pages/home.vue";

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,
        },
        {
            path:'/login',
            name:'login',
            component: Login,
        }
    ]
})