import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    linkActiveClass: 'active-link',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: { name: 'home' },
        },
        {
            path: '/home',
            name: 'home',
            component: () => import("../views/Layout/Layout.vue"),
        }
    ]
})

export default router