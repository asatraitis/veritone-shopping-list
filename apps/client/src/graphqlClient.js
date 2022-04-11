import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3005/graphql';

export default new GraphQLClient(endpoint, {
  headers: {},
});
