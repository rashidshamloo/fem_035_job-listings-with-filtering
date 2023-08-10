// redux toolkit
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// types
interface State {
  filters: string[];
  status: 'idle' | 'loading' | 'failed';
}

// initial state
const initialState: State = { filters: [], status: 'idle' };

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      // only add the filter if it doesn't already exist
      if (state.filters.includes(action.payload)) return;
      state.filters = [...state.filters, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload
      );
    },
    clear: (state) => {
      state.filters = [];
    },
  },
});
