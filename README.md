# Joblisting App

A beginner friendly React + TypeScript job listing app. Covers core concepts like components, props, state, conditional rendering, and CSS.

---

## Features

- View 10 hardcoded Nigerian tech jobs
- Click **Show Details** to expand a job description, then click **Hide Details** to hide.

---

## Tech Stack

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

---

## Getting Started

**Prerequisites:** Node.js installed on your machine.

```bash
# Clone the repo
git clone <repo-url>

# Move into the project folder
cd joblisting-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## File Structure

```
src/
├── components/
│   ├── JobCard.tsx      ← Single job card with show/hide toggle
│   └── JobList.tsx      ← Renders all job cards
├── data/
│   └── jobs.ts          ← Job type and hardcoded job data
├── App.tsx              ← Root component
├── index.css            ← All styles
└── main.tsx             ← Entry point
```
