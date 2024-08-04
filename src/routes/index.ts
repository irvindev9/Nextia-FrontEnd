import Home from '../components/Home.vue';
import Register from '../components/Auth/Register.vue';
import Login from '../components/Auth/Login.vue';
import Recover from '../components/Auth/Recover.vue';
import Dashboard from '../components/Dashboard.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/recuperar',
    name: 'Recover',
    component: Recover,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
];