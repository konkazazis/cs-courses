import {createRouter, createWebHistory} from "vue-router";
import App from "../App.vue";
import Grid from "../components/Grid.vue";
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: Grid
        }
    ]
});

export default router;