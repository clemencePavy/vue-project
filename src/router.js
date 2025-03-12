import { createRouter, createWebHistory } from "vue-router";
import UserProfile from "./pages/UserProfile.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/user/:username",
        name: "user",
        component: UserProfile,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, /* -> routes: routes (car même nom)*/
});

export default router;