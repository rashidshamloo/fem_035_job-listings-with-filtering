// types
import { Job } from '@/app/types/types';

export const testJob1: Job = {
  id: 1,
  company: 'testCompany1',
  logo: '/images/photosnap.svg',
  new: true,
  featured: true,
  position: 'testPosition1',
  role: 'testRole1',
  level: 'testLevel1',
  postedAt: 'testTime1',
  contract: 'testContract1',
  location: 'testLocation1',
  languages: ['testLang1_1', 'testLang1_2'],
  tools: ['testTool1_1', 'testTool1_2'],
};

export const testJob2: Job = {
  id: 2,
  company: 'testCompany2',
  logo: '/images/manage.svg',
  new: false,
  featured: false,
  position: 'testPosition2',
  role: 'testRole2',
  level: 'testLevel2',
  postedAt: 'testTime2',
  contract: 'testContract2',
  location: 'testLocation2',
  languages: ['testLang2_1', 'testLang2_2'],
  tools: ['testTool2_1', 'testTool2_2'],
};
