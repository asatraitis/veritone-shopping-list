import { createAsyncThunk } from '@reduxjs/toolkit';
import graphqlClient from '../../../graphqlClient';
import { GET_ITEMS, CREATE_ITEM, EDIT_ITEM, DELETE_ITEM } from '../gql';

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
  [createItem.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.items.unshift(payload?.createItem);
  },
  [createItem.rejected]: state => {
    state.isLoading = false;
    console.error('Something went wrong while cerating an item.');
  },
};

export const editItem = createAsyncThunk('items/editItem', async variables => {
  return graphqlClient.request(EDIT_ITEM, variables);
});
const extraEditItemReducers = {
  [editItem.fulfilled]: (state, { payload }) => {
    const { editItem: newItem } = payload;
    const itemIdx = state.items.findIndex(item => item.id === newItem.id);
    state.isLoading = false;
    state.items[itemIdx] = newItem;
  },
  [editItem.rejected]: () => {
    console.error('Something went wrong while editing an item.');
  },
};

export const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async ({ id }) => {
    return graphqlClient.request(DELETE_ITEM, { id });
  },
);
const extraDeleteItemReducers = {
  [deleteItem.pending]: state => {
    state.isLoading = true;
  },
  [deleteItem.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.items = state.items.filter(
      item => item.id !== payload?.deleteItem.id,
    );
  },
  [deleteItem.rejected]: state => {
    state.isLoading = false;
    console.error('Something went wrong while deleting an item.');
  },
};

export default {
  ...extraGetItemsReducers,
  ...extraCreateItemReducers,
  ...extraEditItemReducers,
  ...extraDeleteItemReducers,
};
