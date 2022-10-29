import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path : '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path : '/register'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;