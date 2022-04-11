import { createAsyncThunk } from '@reduxjs/toolkit';
import graphqlClient from '../../../graphqlClient';
import { GET_ITEMS, CREATE_ITEM } from '../gql';

export const getItems = createAsyncThunk('items/itemList', async () => {
  return graphqlClient.request(GET_ITEMS);
});
const extraGetItemsReducers = {
  [getItems.pending]: state => {
    state.isLoading = true;
  },
  [getItems.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.items = action.payload?.getItems;
  },
  [getItems.rejected]: state => {
    state.isLoading = false;
    console.error('Something went wrong while retrieving items.');
  },
};

export const createItem = createAsyncThunk('items/newItem', async variables => {
  return graphqlClient.request(CREATE_ITEM, variables);
});
const extraCreateItemReducers = {
  [createItem.pending]: state => {
    state.isLoading = true;
  },
  [createItem.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.items.push(action.payload?.createItem);
    state.currentItem = {
      name: '',
      description: '',
      amount: 0,
      completed: true,
    };
  },
  [createItem.rejected]: state => {
    state.isLoading = false;
    console.error('Something went wrong while cerating an item.');
  },
};

export default {
  ...extraGetItemsReducers,
  ...extraCreateItemReducers,
};
