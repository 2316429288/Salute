import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Column from './pages/ColumnDetail.vue'
import CreatePost from './pages/CreatePost.vue'
import store from './store'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { redirectAlreadyLogin: true }
        }, {
            path: '/column/:id',
            name: 'column',
            component: Column
        },
        {
            path: '/create',
            name: 'create',
            component: CreatePost,
            meta: { requiredLogin: true }
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiredLogin && !store.state.user.isLogin) {
        next({ name: 'login' })
    } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router