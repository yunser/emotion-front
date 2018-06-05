import Vue from 'vue'
import Router from 'vue-router'

const Gif = resolve => require(['@/views/Gif'], resolve)
const GifDetail = resolve => require(['@/views/GifDetail'], resolve)
const Up = resolve => require(['@/views/Up'], resolve)
const About = resolve => require(['@/views/About'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Gif
    },
    {
        path: '/gif/:id',
        component: GifDetail
    },
    {
        path: '/up',
        component: Up
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
