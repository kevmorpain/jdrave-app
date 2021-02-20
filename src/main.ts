import { createApp, h, provide } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/api";
import { createAuthPlugin, setupAuthPlugin } from "@/api/auth";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  }
})
  .use(store)
  .use(router);

setupAuthPlugin().then(() => {
  const auth = createAuthPlugin();
  app.use(auth).mount("#app");
});
