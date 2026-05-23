import jobs from './data/jobs'
import JobList from "./components/JobList"


function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="heading">Job Listings</h1>
      <p className="subheading">{jobs.length} postions available</p>
      </header>

      <main className="main">
        <JobList jobs={jobs}/>
      </main>
    </div>
  )
}

export default App
