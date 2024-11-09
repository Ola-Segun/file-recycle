import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FilemanagementView from '@/views/FilemanagementView.vue';
import FilemanView from '@/views/FilemanView.vue';
import AccountView from '@/views/AccountView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/manage/files',
            name: 'manage-files',
            component: FilemanagementView,
        },
        {
            path: '/manage/account',
            name: 'manage-account',
            component: AccountView,
        },
        {
            path: '/man/files',
            name: 'man-files',
            component: FilemanView,
        }
    ]
})

export default router;