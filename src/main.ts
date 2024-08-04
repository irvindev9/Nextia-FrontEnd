import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import routes from './routes';

import './style.css';
import App from './App.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app')
