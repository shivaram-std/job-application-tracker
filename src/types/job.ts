export type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

export interface JobApplication {
  id: number;
  company: string;
  role: string;
  status: JobStatus;
  appliedDate: string;
}
