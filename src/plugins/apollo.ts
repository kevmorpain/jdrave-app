import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { GET_GAMES } from '@/services/games';
import { setContext } from '@apollo/client/link/context';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export async function createApolloClient(
  token?: string
): Promise<ApolloClient<NormalizedCacheObject>> {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: 'https://jdrave.hasura.app/v1/graphql',
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return forward(operation);
  });

  // Cache implementation
  const cache = new InMemoryCache();
  const link = concat(authMiddleware, httpLink);

  // Create the apollo client
  apolloClient = new ApolloClient({
    link,
    cache,
    connectToDevTools: true,
    typeDefs: [GET_GAMES],
    resolvers: {},
  });

  return apolloClient;
}

export async function updateApolloClientHeaders(token?: string): Promise<void> {
  setContext(() => ({
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
    },
  }));
}

export { apolloClient };
