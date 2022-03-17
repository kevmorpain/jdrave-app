import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
  GetIdTokenClaimsOptions,
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  IdToken,
  LogoutOptions,
  PopupConfigOptions,
  PopupLoginOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import {
  App,
  computed,
  inject,
  InjectionKey,
  reactive,
  watchEffect,
} from 'vue';
import { NavigationGuardNext, RouteLocation } from 'vue-router';

const AuthKey = Symbol('auth') as InjectionKey<AuthPlugin>;

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  user: unknown;
  popupOpen: boolean;
  error: unknown;
}

let client!: Auth0Client;
const state = reactive<AuthState>({
  loading: true,
  isAuthenticated: false,
  user: {},
  popupOpen: false,
  error: null,
});

const setUser = async (): Promise<void> => {
  const user = await client.getUser();
  if (user) {
    state.user = user;
  }
};

/** Authenticates the user using a popup window */
const loginWithPopup = async (
  o: PopupLoginOptions,
  config?: PopupConfigOptions | undefined
): Promise<void> => {
  state.popupOpen = true;
  try {
    await client.loginWithPopup(o, config);

    setUser();
    state.isAuthenticated = await client.isAuthenticated();
    state.error = null;
  } catch (error) {
    console.error(error);
    state.error = error;
  } finally {
    state.popupOpen = false;
  }

  setUser();
  state.isAuthenticated = true;
};

/** Handles the callback when logging in using a redirect */
const handleRedirectCallback = async (): Promise<void> => {
  state.loading = true;
  try {
    await client.handleRedirectCallback();
    setUser();
    state.isAuthenticated = true;
    state.error = null;
  } catch (error) {
    console.error(error);
    state.error = error;
  } finally {
    state.loading = false;
  }
};

/** Authenticates the user using the redirect method */
const loginWithRedirect = (o?: RedirectLoginOptions): Promise<void> => {
  return client.loginWithRedirect(o);
};

/** Returns all the claims present in the ID token */
const getIdTokenClaims = (
  o?: GetIdTokenClaimsOptions
): Promise<IdToken | undefined> => {
  return client.getIdTokenClaims(o);
};

/** Returns the access token. If the token is invalid or missing, a new one is retrieved */
const getTokenSilently = (o?: GetTokenSilentlyOptions): Promise<string> => {
  return client.getTokenSilently(o);
};

/** Gets the access token using a popup window */
const getTokenWithPopup = (o?: GetTokenWithPopupOptions): Promise<string> => {
  return client.getTokenWithPopup(o);
};

/** Logs the user out and removes their session on the authorization server */
const logout = (o?: LogoutOptions): void | Promise<void> => {
  return client.logout(o);
};

export interface AuthPlugin {
  isAuthenticated: boolean;
  loading: boolean;
  user: unknown;
  getIdTokenClaims: (o?: GetIdTokenClaimsOptions) => Promise<IdToken>;
  getTokenSilently: (o?: GetTokenSilentlyOptions) => Promise<string>;
  getTokenWithPopup: (o?: GetTokenWithPopupOptions) => Promise<string>;
  handleRedirectCallback: () => Promise<void>;
  loginWithRedirect: (o?: RedirectLoginOptions) => Promise<void>;
  loginWithPopup: (
    o: PopupLoginOptions,
    config?: PopupConfigOptions | undefined
  ) => Promise<void>;
  logout: (o?: LogoutOptions) => void;

  /**
   * Called automatically by `app.use(auth)`. Should not be called manually by
   * the user.
   *
   * @internal
   * @param app - Application that uses the auth
   */
  install(app: App): void;
}

const authPlugin = {
  isAuthenticated: computed(() => state.isAuthenticated),
  loading: computed(() => state.loading),
  user: computed(() => state.user),
  getIdTokenClaims,
  getTokenSilently,
  getTokenWithPopup,
  handleRedirectCallback,
  loginWithRedirect,
  loginWithPopup,
  logout,

  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const auth = this;
    app.config.globalProperties.$auth = reactive(auth);
    app.provide(AuthKey, reactive(auth));
  },
};

export const setupAuth = async (
  options: Auth0ClientOptions,
  onRedirectCallback: (appState: { targetUrl: RouteLocation }) => void
) => {
  client = await createAuth0Client({
    ...options,
  });

  try {
    // If the user is returning to the app after authentication
    if (
      window.location.search.includes('code=') &&
      window.location.search.includes('state=')
    ) {
      // handle the redirect and retrieve tokens
      const { appState } = await client.handleRedirectCallback();
      state.error = null;

      // Notify subscribers that the redirect callback has happened, passing the appState
      // (useful for retrieving any pre-authentication state)
      onRedirectCallback(appState);
    }
  } catch (e) {
    console.error(e);
    state.error = e;
  } finally {
    // Initialize our internal authentication state
    state.isAuthenticated = await client.isAuthenticated();
    setUser();
    state.loading = false;
  }
};

export const authGuard = (
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext
) => {
  const verify = () => {
    // If the user is authenticated, continue with the route
    if (state.isAuthenticated) {
      return next();
    }

    // Otherwise, log in
    loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!state.loading) {
    return verify();
  }

  // Watch for the loading property to change before we check isAuthenticated
  watchEffect(() => {
    if (!state.loading) {
      return verify();
    }
  });
};

export const createAuthPlugin = () => {
  return authPlugin;
};

export function useAuth(): AuthPlugin {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return inject(AuthKey)!;
}
