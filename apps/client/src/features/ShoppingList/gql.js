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

export const CREATE_ITEM = gql`
  mutation createItem($name: String!, $description: String, $amount: Int) {
    createItem(
      item: { name: $name, description: $description, amount: $amount }
    ) {
      id
      name
      description
      amount
      completed
    }
  }
`;
