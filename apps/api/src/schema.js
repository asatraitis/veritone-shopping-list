import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { itemQueries } from './Item/index.js';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...itemQueries,
    },
  }),
});

export default schema;
