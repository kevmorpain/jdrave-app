import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { GET_GAMES } from '@/services/games';

let apolloClient: ApolloClient<NormalizedCacheObject>;

let authToken: string | undefined;

export function createApolloClient(
  token?: string
): ApolloClient<NormalizedCacheObject> {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: 'https://jdrave.hasura.app/v1/graphql',
  });

  authToken = token;

  const authMiddleware = new ApolloLink((operation, forward) => {
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
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
  authToken = token;
}

export { apolloClient };
