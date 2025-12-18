import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

import { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { JobApplication } from '../types/job';
import JobCard from '../components/JobCard';

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

  if (loading) return <p>Loading job applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

