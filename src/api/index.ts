import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const getHeaders = () => {
  const headers: { authorization?: string } = {};
  const token: string | null = localStorage.getItem("authToken");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers
}

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://jdrave.hasura.app/v1/graphql',
  headers: getHeaders()
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient;