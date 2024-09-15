import { createRouter, createWebHistory } from "vue-router";
import UserList from "./components/UserList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: "/",
        name: "Home",
        component: UserList
    },
    {
        path: "/new-user",
        name: "new-user",
        component: () => import("./components/UserForm.vue")
    }
]
})

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

export default router;