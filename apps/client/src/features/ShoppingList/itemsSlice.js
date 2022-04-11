import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './reducers';

const initialCurrentItem = {
  id: null,
  name: '',
  description: '',
  amount: 0,
  completed: true,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentItem: initialCurrentItem,
    isLoading: false,
    itemOperation: 'add',
  },
  reducers: {
    updateCurrentItem: (state, { payload }) => {
      const { name, value } = payload;
      state.currentItem[name] = value;
    },
    resetCurrentitem: state => {
      state.currentItem = initialCurrentItem;
      state.itemOperation = 'add';
    },
    selectItem: (state, { payload }) => {
      const { id, checked } = payload;
      const itemIdx = state.items.findIndex(item => item.id === id);
      state.items[itemIdx].completed = checked;
    },
    editCurrentItem: (state, { payload }) => {
      state.itemOperation = 'edit';
      state.currentItem = state.items.find(item => item.id === payload);
    },
  },
  extraReducers,
});

export const itemsSelector = state => state.items;

export const {
  updateCurrentItem,
  resetCurrentitem,
  selectItem,
  editCurrentItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
