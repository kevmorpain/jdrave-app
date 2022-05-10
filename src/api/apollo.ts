import { GET_GAMES } from '@/services/games';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  concat,
} from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://jdrave.hasura.app/v1/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken');
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

// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
  typeDefs: [GET_GAMES],
  resolvers: {},
});

export default apolloClient;
