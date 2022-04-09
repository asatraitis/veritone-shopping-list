import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { itemQueries, itemMutatations } from './Item/index.js';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...itemQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...itemMutatations,
    },
  }),
});

export default schema;
