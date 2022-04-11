import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentItem: {},
    isLoading: false,
  },
});

export const itemsSelector = state => state.items;

export default itemsSlice.reducer;
