import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk';
import { fetchJobs as fetchJobsFromAPI } from './fetchJobs';

export const fetchJobs = createAppAsyncThunk(
  'jobs/fetchJobs',
  async (signal: AbortSignal) => await fetchJobsFromAPI(signal)
);
