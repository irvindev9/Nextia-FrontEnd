import { createApp } from 'vue';
import router from './routes/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './style.css';
import App from './App.vue';

createApp(App)
  .use(router)
  .mount('#app')
