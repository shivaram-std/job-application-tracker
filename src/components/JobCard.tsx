import type { JobApplication } from "../types/jobTypes";


interface JobCardProps {
  job: JobApplication;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <span>Status: {job.status}</span>
      <p>Applied on: {job.appliedDate}</p>
    </div>
  );
}

