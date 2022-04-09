import prisma from '../prismaClient.js';
import Item from './Item.js';
import { CreateItemArgs, EditItemArgs, editItemArgsFields } from './typeDef.js';

export const createItem = {
  type: Item,
  args: {
    item: { type: CreateItemArgs },
  },
  resolve: async (_, { item: { name, description, amount } }) => {
    try {
      console.log({ name, description, amount });
      return prisma.item.create({
        data: {
          name,
          description,
          amount,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const editItem = {
  type: Item,
  args: {
    item: { type: EditItemArgs },
  },
  resolve: async (
    _,
    { item: { id, name, description, amount, completed } },
  ) => {
    try {
      return prisma.item.update({
        where: { id },
        data: {
          name,
          description,
          amount,
          completed,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};

export const deleteItem = {
  type: Item,
  args: {
    id: editItemArgsFields.id,
  },
  resolve: async (_, { id }) => {
    try {
      return prisma.item.delete({ where: { id } });
    } catch (err) {
      throw new Error(err);
    }
  },
};
