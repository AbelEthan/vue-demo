import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '_home',
            component: () => import('./view/home')
        },
        // {
        //     path: '/home',
        //     name: 'home',
        //     component: () => import('./view/home')
        // },
    ]
})

export default router;
