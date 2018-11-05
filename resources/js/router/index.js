import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    history: true,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
    ]
});
