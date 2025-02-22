import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import MyImages from "./pages/MyImages.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import NotFound from "./pages/NotFound.vue";

const routes =[
    {
         path:'/',
        component: DefaultLayout,
        children:[
            {path:'',name:"Home",component:Home},
            {path:'/images',name:"MyImages",component:MyImages},
        ]
    },
    {
        path:"/login",
        name:"Login",
        component: Login
    },
    {
        path:"/signup",
        name:"Signup",
        component: Signup
    },
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component: NotFound
    },

]

const router =createRouter({
    history: createWebHistory(),
    routes,
})

export default router