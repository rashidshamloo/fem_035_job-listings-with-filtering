// redux toolkit
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// thunks
import { fetchJobs } from './thunks';

// schemas
import { jobsSchema } from '@/app/schemas/schemas';

// types
import { Job } from '@/app/types/types';
type Status = 'idle' | 'loading' | 'error';
type InitialState = { jobs: Job[]; status: Status; error: string };

// initial state
const initialState: InitialState = {
  jobs: [],
  status: 'idle',
  error: '',
};

// jobs slice
export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  // these reducers are not used in this project
  // i just created them for learning purposes
  reducers: {
    add: (state, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    set: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
  },
  // fetchJobs thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        // validate API response using Zod
        if (jobsSchema.safeParse(action.payload).success) {
          state.status = 'idle';
          state.jobs = action.payload;
        } else {
          state.status = 'error';
          state.error = 'wrong API response';
        }
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'unknown error';
      });
  },
});
