// types
import { HTMLAttributes } from 'react';
import { Job } from '../types/types';

// styled components
import {
  Container,
  FeaturedLine,
  JobImage,
  ImageWrapper,
  JobInfo,
  TitleWrapper,
  Badge,
  BadgeWrapper,
  Company,
  Position,
  Details,
  Tags,
} from './styled/JobListing.styled';

type JobListingProps = { job: Job } & HTMLAttributes<HTMLDivElement>;

const JobListing = ({ job }: JobListingProps) => (
  <Container>
    {job.featured && <FeaturedLine />}
    <ImageWrapper>
      <JobImage src={job.logo} alt={job.company} fill={true} />
    </ImageWrapper>
    <JobInfo>
      <TitleWrapper>
        <Company>{job.company}</Company>
        <BadgeWrapper>
          {job.new && <Badge $type="new">NEW!</Badge>}
          {job.featured && <Badge $type="featured">FEATURED</Badge>}
        </BadgeWrapper>
      </TitleWrapper>
      <Position href="#">{job.position}</Position>
      <Details>
        <span>{job.postedAt}</span>&#8226;
        <span>{job.contract}</span>&#8226;
        <span>{job.location}</span>
      </Details>
    </JobInfo>
    <Tags
      tags={[job.role, job.level].concat(job.languages).concat(job.tools)}
    />
  </Container>
);

export default JobListing;
