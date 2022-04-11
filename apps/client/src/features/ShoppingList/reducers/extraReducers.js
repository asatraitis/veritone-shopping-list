import { createAsyncThunk } from '@reduxjs/toolkit';
import graphqlClient from '../../../graphqlClient';
import { GET_ITEMS } from '../gql';

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

export default {
  ...extraGetItemsReducers,
};
