import Home from '../components/Home.vue';
import Register from '../components/Auth/Register.vue';

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
  }
];