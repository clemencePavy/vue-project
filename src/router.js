import { createRouter, createWebHistory } from "vue-router";
import UserProfile from "./pages/UserProfile.vue";
import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/user/:username",
        name: "user",
        component: UserProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, /* -> routes: routes (car même nom)*/
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        next({ name: 'register' });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  router.beforeEach((to, from, next) => {
    if(user) {
      next();
    }

    if(to.meta.requiresAuth) {
      return next("/register");
    }
  });

export default router;