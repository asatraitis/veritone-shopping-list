import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';
import { Date } from '../scalars.js';

const Item = new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    amount: { type: new GraphQLNonNull(GraphQLInt) },
    completed: { type: new GraphQLNonNull(GraphQLBoolean) },
    createdAt: { type: new GraphQLNonNull(Date) },
    updatedAt: { type: new GraphQLNonNull(Date) },
  },
});

export default Item;
