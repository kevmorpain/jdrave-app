import { createAuthPlugin, setupAuth } from "@/plugins/auth";
import { Auth0ClientOptions } from "@auth0/auth0-spa-js";
import authConfig from "../../auth_config.json";
import { RouteLocation } from "vue-router";
import router from "@/router";

const callbackRedirect = (appState: { targetUrl: RouteLocation }): void => {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
};

function setupAuthPlugin(): Promise<void> {
  return setupAuth(authConfig as Auth0ClientOptions, callbackRedirect);
}

export { createAuthPlugin, setupAuthPlugin };
