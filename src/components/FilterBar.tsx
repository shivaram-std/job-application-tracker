import { JobStatus } from '../types/job';

interface FilterBarProps {
  selectedStatus: JobStatus | 'All';
  onChange: (status: JobStatus | 'All') => void;
}

const statuses: (JobStatus | 'All')[] = [
  'All',
  'Applied',
  'Interview',
  'Offer',
  'Rejected',
];

export default function FilterBar({ selectedStatus, onChange }: FilterBarProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => onChange(status)}
          style={{
            marginRight: '0.5rem',
            fontWeight: selectedStatus === status ? 'bold' : 'normal',
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

