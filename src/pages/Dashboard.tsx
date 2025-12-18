import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';

export default function Dashboard() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs()
      .then(data => setJobs(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading job applications...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <span>{job.status}</span>
        </div>
      ))}
    </div>
  );
}

