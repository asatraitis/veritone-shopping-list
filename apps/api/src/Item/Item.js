import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import { Date } from '../scalars.js';

const Item = new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    amount: { type: GraphQLInt },
    completed: { type: GraphQLBoolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
});

export default Item;
