'use client';

// react
import { useEffect, useMemo } from 'react';

// framer-motion
import { AnimatePresence, LayoutGroup } from 'framer-motion';

// redux toolkit
import {
  useDispatch,
  useSelector,
  fetchJobs,
  selectJobs,
  selectFilters,
} from '@/lib/redux';

// components
import JobListing from './components/JobListing';
import Filters from './components/Filters';
import Footer from './components/Footer';

// styled components
import {
  Container,
  Header,
  ErrorContainer,
  SROnlyTitle,
} from './components/styled/Index.styled';

export default function IndexPage() {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const filters = useSelector(selectFilters);

  const filteredJobs = useMemo(
    () =>
      filters.filters.length > 0
        ? jobs.jobs.filter((job) => {
            const jobFilters = [job.role, job.level]
              .concat(job.languages)
              .concat(job.tools);
            return filters.filters.every((filter) =>
              jobFilters.includes(filter)
            );
          })
        : jobs.jobs,
    [jobs, filters]
  );

  useEffect(() => {
    const controller = new AbortController();
    if (jobs.status === 'idle') dispatch(fetchJobs(controller.signal));
    return () => controller.abort();
  }, []);

  return (
    <LayoutGroup>
      <Header />
      <AnimatePresence>
        {filters.filters.length > 0 && <Filters filters={filters.filters} />}
      </AnimatePresence>
      <Container>
        <SROnlyTitle>Job Listings with Filtering</SROnlyTitle>
        <AnimatePresence>
          {jobs.status === 'error' ? (
            <ErrorContainer>{jobs.error}</ErrorContainer>
          ) : (
            filteredJobs.map((job) => <JobListing key={job.id} job={job} />)
          )}
        </AnimatePresence>
      </Container>
      <Footer />
    </LayoutGroup>
  );
}
