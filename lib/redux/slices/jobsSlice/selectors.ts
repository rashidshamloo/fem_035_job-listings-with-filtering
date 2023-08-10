import { ReduxState } from '@/lib/redux';

export const selectJobs = (state: ReduxState) => state.jobs;
