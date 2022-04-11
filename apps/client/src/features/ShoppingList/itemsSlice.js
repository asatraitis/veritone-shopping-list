import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './reducers';

const initialCurrentItem = {
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
  },
  reducers: {
    updateCurrentItem: (state, { payload }) => {
      const { name, value } = payload;
      state.currentItem[name] = value;
    },
    resetCurrentitem: state => {
      state.currentItem = initialCurrentItem;
    },
  },
  extraReducers,
});

export const itemsSelector = state => state.items;

export const { updateCurrentItem, resetCurrentitem } = itemsSlice.actions;

export default itemsSlice.reducer;
