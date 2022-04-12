import { graphql } from 'msw';
import { items } from './data';

export const handlers = [
  graphql.query('getItems', (_req, res, ctx) => {
    return res(
      ctx.data({
        getItems: items,
      }),
    );
  }),
];
