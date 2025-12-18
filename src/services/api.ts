import type { JobApplication, JobStatus } from '../types/jobTypes';


const statuses: JobStatus[] = ['Applied', 'Interview', 'Offer', 'Rejected'];

export const fetchJobs = async (): Promise<JobApplication[]> => {
  const response = await fetch('https://dummyjson.com/users');

  if (!response.ok) {
    throw new Error('Failed to fetch job applications');
  }

  const data = await response.json();

  return data.users.slice(0, 10).map((user: any, index: number) => ({
    id: user.id,
    company: user.company?.name || 'Unknown Company',
    role: 'Frontend Developer',
    status: statuses[index % statuses.length],
    appliedDate: new Date().toISOString().split('T')[0],
  }));
};

