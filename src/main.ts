import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createAuthPlugin, setupAuthPlugin } from '@/api/auth';
import '@/assets/style.scss';
import registerComponents from '@/components/base';
import { getTokenSilently } from '@/plugins/auth';
import { createApolloClient } from '@/plugins/apollo';

const app = createApp(App).use(router);

registerComponents(app);

setupAuthPlugin().then(async () => {
  const auth = createAuthPlugin();
  app.use(auth);

  let token: string | undefined = undefined;
  if (auth.isAuthenticated.value) {
    token = await getTokenSilently();
  }

  const apolloClient = await createApolloClient(token);
  app.provide(DefaultApolloClient, apolloClient);

  app.mount('#app');
});
