import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home";
import Details from "@/views/Details";
import Create from "@/views/Create";
import Tags from "@/views/Tags";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/post/:id',
        name: 'Details',
        component: Details,
        props:true
    },
    {
        path: '/create',
        name: 'Create',
        component: Create,
    },
    {
        path: '/tags/:id',
        name: 'Tags',
        component: Tags,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router