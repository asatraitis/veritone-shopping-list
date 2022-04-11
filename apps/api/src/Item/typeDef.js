import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const createItemArgsFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: GraphQLString },
  amount: { type: GraphQLInt },
};

export const editItemArgsFields = {
  ...createItemArgsFields,
  name: { type: GraphQLString },
  id: { type: new GraphQLNonNull(GraphQLInt) },
  completed: { type: GraphQLBoolean },
};

export const CreateItemArgs = new GraphQLInputObjectType({
  name: 'CreateItemArgs',
  fields: createItemArgsFields,
});

export const EditItemArgs = new GraphQLInputObjectType({
  name: 'EditItemArgs',
  fields: editItemArgsFields,
});
