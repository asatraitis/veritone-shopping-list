import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInputObjectType,
} from 'graphql';

const createItemArgsFields = {
  name: { type: GraphQLString },
  description: { type: GraphQLString },
  amount: { type: GraphQLInt },
};

export const editItemArgsFields = {
  ...createItemArgsFields,
  id: { type: GraphQLInt },
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
