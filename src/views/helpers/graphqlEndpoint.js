import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const endpoint = 'https://global-ratings.herokuapp.com/graphql'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: endpoint
})

const client = new ApolloClient({
  cache,
  link
})

export default client; 