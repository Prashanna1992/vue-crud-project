import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import LoginPage from './components/LoginPage'
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
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path : '/log-in'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;