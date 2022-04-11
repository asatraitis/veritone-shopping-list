import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './reducers';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentItem: {},
    isLoading: false,
  },
  extraReducers,
});

export const itemsSelector = state => state.items;

export default itemsSlice.reducer;
