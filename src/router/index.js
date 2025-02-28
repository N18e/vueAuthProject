import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { useAuthStore } from '@/store/auth';

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Глобальный Guard для защиты маршрутов
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.token) {
        next('/');
    } else if (to.meta.requiresGuest && authStore.token) {
        next('/dashboard');
    } else {
        next();
    }
});

export default router;
