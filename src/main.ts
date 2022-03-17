import { createApp, h, provide } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from '@/api/apollo';
import { createAuthPlugin, setupAuthPlugin } from '@/api/auth';
import '@/assets/style.pcss';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
}).use(router);

setupAuthPlugin().then(() => {
  const auth = createAuthPlugin();
  app.use(auth).mount('#app');
});
