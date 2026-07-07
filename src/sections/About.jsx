import React from 'react';

// --- DATA ---
const deepDives = [
  {
    title: "Concurrency & Data Integrity",
    situation: "During a high-traffic flash booking event, the database suffered from race conditions, leading to overbooked slots.",
    task: "Ensure atomicity and isolation for every reservation request under 500ms.",
    action: "Implemented Pessimistic Locking in JPA for the reservation phase and added a Redis-based distributed lock for the pre-reservation queue.",
    result: "Zero overbooking incidents across 10,000 test cycles and 15% reduction in DB overhead."
  },
  {
    title: "Distributed Systems Testing",
    situation: "Microservices were failing in production due to subtle API contract drifts not caught by unit tests.",
    task: "Build a resilient integration testing suite that simulates production environments.",
    action: "Orchestrated Testcontainers with Docker to spin up ephemeral Postgres and Kafka instances during CI/CD builds.",
    result: "40% decrease in production bugs and improved developer confidence in deployments."
  }
];

const milestones = [
  {
    year: "2024 - Present",
    title: "Full-Stack Engineer (Freelance)",
    description: "Building bespoke management systems for local businesses using Spring Boot and React. Focus on automating manual workflows.",
    isActive: true
  },
  {
    year: "2023 - 2024",
    title: "Senior Research Project",
    description: "Led a team of 4 to develop an AI-powered diagnostic assistant. Achieved 85% accuracy in preliminary classification tasks.",
    isActive: false
  },
  {
    year: "2020 - 2024",
    title: "BS in Computer Science",
    description: "Focused on Distributed Systems, Algorithms, and Software Engineering Principles. Graduated with Honors.",
    isActive: false
  }
];

// --- COMPONENTS ---
const DeepDiveCard = ({ title, situation, task, action, result }) => (
  <div className="space-y-md border-l-2 border-primary pl-lg">
    <h3 className="font-headline-md text-headline-md">{title}</h3>
    <div className="space-y-sm">
      <p className="font-body-md"><span className="font-bold text-on-surface">Situation:</span> {situation}</p>
      <p className="font-body-md"><span className="font-bold text-on-surface">Task:</span> {task}</p>
      <p className="font-body-md"><span className="font-bold text-on-surface">Action:</span> {action}</p>
      <p className="font-body-md text-primary"><span className="font-bold">Result:</span> {result}</p>
    </div>
  </div>
);

const MilestoneItem = ({ year, title, description, isActive }) => (
  <div className="relative pl-12">
    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 z-10 ${isActive ? 'border-primary' : 'border-outline-variant'}`}></div>
    <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
      <span className={`text-label-sm font-bold ${isActive ? 'text-primary' : 'text-secondary'}`}>{year}</span>
      <h3 className="font-headline-md text-headline-md">{title}</h3>
    </div>
    <p className="text-secondary font-body-md mt-sm">{description}</p>
  </div>
);

// --- MAIN SECTION ---
const About = () => {
  return (
    <div id="about" className="space-y-32">
      {/* Deep Dive Section */}
      <section className="space-y-xl reveal">
        <div className="flex flex-col gap-sm">
          <h2 className="font-headline-lg text-headline-lg">Engineering Deep Dive</h2>
          <p className="text-secondary font-body-md">Solving complex architectural problems with the STAR method.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {deepDives.map((item, idx) => (
            <DeepDiveCard key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="space-y-xl reveal">
        <div className="flex flex-col gap-sm">
          <h2 className="font-headline-lg text-headline-lg">Professional Milestones</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative space-y-lg before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-outline-variant/30">
          {milestones.map((item, idx) => (
            <MilestoneItem key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
