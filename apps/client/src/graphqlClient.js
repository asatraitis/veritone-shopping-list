import { GraphQLClient } from 'graphql-request';

const endpoint = `${
  import.meta.env.VITE_API_URL || 'http://localhost:3005'
}/graphql`;

export default new GraphQLClient(endpoint, {
  headers: {},
});
