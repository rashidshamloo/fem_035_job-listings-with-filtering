// config
import { API_URL } from '@/app/config/config';

// types
import { Job } from '@/app/types/types';

// fetches jobs from the api
export const fetchJobs = async (signal: AbortSignal): Promise<Job[]> => {
  const res = await fetch(API_URL + '/api', { signal });
  return await res.json();
};
