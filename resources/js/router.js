import { createRouter, createWebHistory } from 'vue-router';
import firstVuePage from '../components/pages/firstVuePage.vue';
import secondVuePage from '../components/pages/secondVuePage.vue';

const routes = [
    {
        path: '/new-vue-route',
        component: firstVuePage
    },
    {
        path: '/new-vue-route-2',
        component: secondVuePage
    }
];  

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;