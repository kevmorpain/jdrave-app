import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import '@/assets/style.scss';
import registerComponents from '@/components/base';
import { createApolloClient } from '@/plugins/apollo';
import i18n from '@/plugins/i18n';
import { createAuth0 } from '@auth0/auth0-vue';
// import authConfig from '../auth_config.json';
import authConfigDev from '../auth_config.dev.json';

const app = createApp(App).use(router).use(i18n);

registerComponents(app);

const auth = createAuth0({
  // ...(process.env.NODE_ENV === 'production' ? authConfig : authConfigDev),
  ...authConfigDev,
  redirect_uri:
    process.env.NODE_ENV === 'production'
      ? 'https://kevmorpain.github.io/jdrave-app/app'
      : 'http://localhost:8080/app',
});
app.use(auth);

const apolloClient = createApolloClient();
app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');
