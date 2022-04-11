import { gql } from 'graphql-request';

export const GET_ITEMS = gql`
  query getItems {
    getItems {
      id
      name
      description
      amount
      completed
    }
  }
`;
