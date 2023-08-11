// redux toolkit
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// initial state
const initialState: string[] = [];

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      // only add the filter if it doesn't already exist
      if (state.includes(action.payload)) return;
      return [...state, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((filter) => filter !== action.payload);
    },
    clear: () => {
      return initialState;
    },
  },
});
