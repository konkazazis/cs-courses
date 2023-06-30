import {createRouter, createWebHistory} from "vue-router";
import App from "../App.vue";
import Grid from "../components/Grid.vue";
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import CourseDetails from "../components/CourseDetails.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/courses/:id',
            name: 'CourseDetails',
            component: CourseDetails,
          },
    ]
});

export default router;