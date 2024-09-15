import { createRouter, createWebHistory } from "vue-router";
import UserList from "./components/UserList.vue";
import UserForm from "./components/UserForm.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name:'Home',
        component: UserList
    },
    {
        path: '/new-user',
        name: 'new-user',
        component: UserForm
    }
]
})

export default router;