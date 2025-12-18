import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import type { JobApplication, JobStatus } from '../types/jobTypes';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

export default function Dashboard() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [filteredStatus, setFilteredStatus] = useState<JobStatus | 'All'>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs()
      .then(data => setJobs(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredJobs =
    filteredStatus === 'All'
      ? jobs
      : jobs.filter(job => job.status === filteredStatus);

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      <FilterBar
        selectedStatus={filteredStatus}
        onChange={setFilteredStatus}
      />

      {filteredJobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

