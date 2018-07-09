import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import One from './views/PortfolioOne'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio/one',
            name: 'one',
            component: One
        }
    ],
    mode: 'history'
})