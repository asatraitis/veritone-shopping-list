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

export const EDIT_ITEM = gql`
  mutation editItem(
    $id: Int!
    $name: String
    $description: String
    $amount: Int
    $completed: Boolean
  ) {
    editItem(
      item: {
        id: $id
        name: $name
        description: $description
        amount: $amount
        completed: $completed
      }
    ) {
      id
      name
      description
      amount
      completed
      updatedAt
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation deleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
