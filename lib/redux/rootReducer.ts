/* Instruments */
import { jobsSlice } from './slices/jobsSlice/jobsSlice';
import { filtersSlice } from './slices/filtersSlice/filtersSlice';

export const reducer = {
  jobs: jobsSlice.reducer,
  filters: filtersSlice.reducer,
};
