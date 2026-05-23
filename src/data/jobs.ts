export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description:
      "Build and maintain responsive user interfaces using React and TypeScript. You will work closely with designers to turn mockups into polished, accessible web experiences.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description:
      "Design and maintain RESTful APIs using Node.js and PostgreSQL. You will be responsible for the performance, reliability, and security of our core server-side services.",
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Kreative Studio",
    location: "Lagos",
    salary: "₦350,000",
    description:
      "Lead end-to-end product design from user research to final Figma handoff. You will advocate for the user in every decision and collaborate with engineers to ship great experiences.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudBase NG",
    location: "Remote",
    salary: "₦500,000",
    description:
      "Manage CI/CD pipelines and cloud infrastructure on AWS. You will automate deployments, monitor system health, and ensure high availability across all production environments.",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Insightful Analytics",
    location: "Abuja",
    salary: "₦280,000",
    description:
      "Analyse business data and build dashboards using SQL and Power BI. You will surface key insights that help leadership make informed, data-driven decisions.",
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppWorks Nigeria",
    location: "Port Harcourt",
    salary: "₦380,000",
    description:
      "Develop and ship cross-platform mobile applications using React Native. You will optimise for performance and deliver a smooth experience on both Android and iOS devices.",
  },
  {
    id: 7,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Lagos",
    salary: "₦450,000",
    description:
      "Monitor networks for threats, conduct penetration tests, and harden enterprise systems. You will play a key role in keeping company and client data safe from emerging attacks.",
  },
  {
    id: 8,
    title: "Technical Writer",
    company: "DocsFirst",
    location: "Remote",
    salary: "₦200,000",
    description:
      "Create clear and accurate documentation, guides, and API references for a developer audience. You will work directly with engineers to ensure all content is correct and easy to follow.",
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "QualityFirst Ltd",
    location: "Enugu",
    salary: "₦250,000",
    description:
      "Write and maintain automated test suites using Playwright and Jest. You will own the quality bar for every release and catch regressions before they reach users.",
  },
  {
    id: 10,
    title: "Machine Learning Engineer",
    company: "AIForge",
    location: "Abuja",
    salary: "₦600,000",
    description:
      "Train, evaluate, and deploy machine learning models for real-world NLP and computer vision tasks. You will also optimise models for low-latency inference in production.",
  },
  
];

export default jobs;
