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
                title: 'Пивное приложение',
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
            path: '/product',
            name: 'product',
            components: {
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Product.vue')
            },
            meta: {
                title: 'Светлое пиво',
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