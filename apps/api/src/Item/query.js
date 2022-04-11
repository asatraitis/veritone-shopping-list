import { GraphQLList } from 'graphql';
import Item from './Item.js';
import prisma from '../prismaClient.js';

export const getItems = {
  type: new GraphQLList(Item),
  resolve: async () => {
    try {
      return prisma.item.findMany({
        orderBy: [{ createdAt: 'desc' }],
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};
