import { useState } from "react";
import type { Job } from "../data/jobs";

type JobCardProp = {
  job: Job;
};

const JobCard = ({ job }: JobCardProp) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="company">{job.company}</span>
      </div>

      <div className="meta">
        <span>&#128205; {job.location}</span>
        <span>&#128176; {job.salary}</span>
      </div>

      {showDetails && (
        <div className="details">
          <p>{job.description}</p>
        </div>
      )}

      <button
        className={showDetails ? "btn-hide" : "btn-show"}
        onClick={() => setShowDetails((prev: boolean) => !prev)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;
