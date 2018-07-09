import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import One from './views/PortfolioOne'
import Two from './views/PortfolioTwo'
import Three from './views/PortfolioThree'

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
        },
        {
            path: '/portfolio/two',
            name: 'two',
            component: Two
        },
        {
            path: '/portfolio/three',
            name: 'three',
            component: Three
        }
    ],
    mode: 'history'
})