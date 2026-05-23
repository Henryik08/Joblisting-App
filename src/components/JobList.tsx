import type { Job } from "../data/jobs";
import JobCard from "./JobCard";

type JobListProp = {
  jobs: Job[];
};

const JobList = ({ jobs }: JobListProp) => {
    if (!jobs || jobs.length === 0) {
        return(
            <p className="empty-message">No jobs available at the moment.</p>
        )
    }


  return (
    <div className="grid">
      {jobs.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
