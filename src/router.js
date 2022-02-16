import Vue from 'vue'
import Router from 'vue-router'
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Главная',
                description: '',
            },
            children: [],
        },
        {
            path: '/catalog',
            name: 'catalog',
            components: {
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Catalog.vue')
            },
            meta: {
                title: 'Каталог',
                description: '',
            },
            children: [],
        },
        {
            path: '/products',
            name: 'products',
            components: {
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Products.vue')
            },
            meta: {
                title: 'Светлое пиво',
                description: '',
            },
            children: [],
        },
        {
            path: '/cart',
            name: 'cart',
            components: {
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Cart.vue')
            },
            meta: {
                title: 'Корзина',
                description: '',
            },
            children: [],
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;