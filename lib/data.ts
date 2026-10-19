export const profile = {
  name: "Prathamesh Kulkarni",
  role: "Full-Stack & AI Engineer",
  pitch:
    "I build full-stack products with the MERN stack — and wire in machine learning where it actually earns its place.",
  intro:
    "Software Developer at Xperate in Pune, building bespoke software for law firms and SME businesses. B.Tech in Computer Science from DKTE Society's Textile & Engineering Institute, GATE 2025 qualified. I care about systems that ship: clean APIs, real-time data, and interfaces people can actually use.",
  currentRole: "Software Developer",
  currentCompany: "Xperate",
  currentCompanyUrl: "https://www.linkedin.com/company/xperate",
  location: "Pune, Maharashtra, India",
  email: "prathameshkulkarni22092004@gmail.com",
  phone: "+91 93228 12459",
  github: "https://github.com/PrathameshKulkarni2k4",
  linkedin: "https://www.linkedin.com/in/prathameshkulkarni2k4/",
  leetcode: "https://leetcode.com/u/PrathameshKulkarni2k4/",
  resume: "/Prathamesh_Kulkarni_Resume.pdf",
};

/** Scannable proof points — the first thing a hiring manager should see. */
export const proof = [
  { value: "8.74", label: "CGPA" },
  { value: "2025", label: "GATE qualified" },
  { value: "200+", label: "LeetCode solved" },
  { value: "7", label: "projects shipped" },
];

export const techStack = [
  "Java",
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Express",
  ".NET",
  "Flutter",
  ".NET MAUI",
  "MongoDB",
  "MySQL",
  "MSSQL",
  "Oracle",
  "Tailwind CSS",
  "REST APIs",
  "Git",
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "flakeguard",
    category: "Open source · developer tooling",
    year: "2026",
    summary:
      "A CLI that finds the tests which randomly pass and fail, ranks them by how unreliable they are, and shows you why — so you can trust your test suite again.",
    outcomes: [
      "Reads JUnit XML, TAP and Jest JSON — one tool for any language",
      "Explainable flakiness score plus failure-signature clustering",
      "Ships a GitHub Actions workflow that comments on pull requests",
    ],
    stack: ["Python", "CLI", "GitHub Actions", "Open source"],
    repo: "https://github.com/PrathameshKulkarni2k4/flakeguard",
  },
  {
    index: "02",
    title: "TiffinSplit",
    category: "Full-stack web app",
    year: "2026",
    summary:
      "A meal-cost sharing platform that settles shared tiffin expenses fairly across a group, built end-to-end in TypeScript.",
    outcomes: [
      "Modelled the split logic so every member's balance reconciles to zero",
      "Type-safe end-to-end — shared types between client and server",
      "Shipped and running live on Vercel",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    live: "https://tiffinsplit.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/tiffinsplit",
  },
  {
    index: "03",
    title: "RoomBuddy",
    category: "Real-time booking platform",
    year: "2025",
    summary:
      "A PG room-booking system for students and owners, with live availability and role-based access for two distinct user types.",
    outcomes: [
      "Real-time room availability pushed over Socket.IO",
      "JWT auth with role-based access for students and owners",
      "Cloudinary-backed image pipeline for room listings",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    live: "https://roombuddyforstudent.vercel.app/",
    repo: "https://github.com/PrathameshKulkarni2k4/room-booking-system",
  },
  {
    index: "04",
    title: "Digipanchayat",
    category: "Applied AI · rural governance",
    year: "2025 — now",
    summary:
      "An AI system that automates citizen services for rural local bodies, from grievance intake through to scheme eligibility.",
    outcomes: [
      "NLP pipeline that classifies incoming citizen grievances",
      "ML model predicting eligibility across government schemes",
      "MERN dashboard for officials to action requests",
    ],
    stack: ["MERN", "GenAI", "NLP", "Computer Vision"],
    live: "https://airgss-megaproject.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/AIRGSS-megaproject",
  },
  {
    index: "05",
    title: "Narratia",
    category: "AI collaborative writing",
    year: "2025",
    summary:
      "A storytelling app where each contributor drafts privately, then merges into one coherent narrative with context-aware AI.",
    outcomes: [
      "Per-member draft spaces with AI-assisted refinement",
      "Context-aware merge that preserves each writer's voice",
      "Built for both solo writers and teams",
    ],
    stack: ["JavaScript", "Node.js", "LLM APIs", "MongoDB"],
    repo: "https://github.com/PrathameshKulkarni2k4/Narratia",
  },
  {
    index: "06",
    title: "Movie Recommendation System",
    category: "Machine learning",
    year: "2024",
    summary:
      "A content-based recommender using TF-IDF vectorisation and cosine similarity, enriched with live movie metadata.",
    outcomes: [
      "TF-IDF + cosine similarity ranking over a movie corpus",
      "TMDb API integration for real-time metadata",
      "Python data pipeline with Pandas and NumPy",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "TMDb API"],
    repo: "https://github.com/PrathameshKulkarni2k4/Movie_recommadation",
  },
  {
    index: "07",
    title: "MLOps Production Hub",
    category: "ML engineering",
    year: "2026",
    summary:
      "Work on what happens after the notebook — reproducible pipelines and containerised training and serving.",
    outcomes: [
      "Reproducible build pipelines driven by Make",
      "Containerised training and serving workflows",
      "Focus on production-grade ML engineering",
    ],
    stack: ["Python", "Make", "MLOps"],
    repo: "https://github.com/PrathameshKulkarni2k4/mlops-production-hub",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "C++",
      "C",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      ".NET",
      "REST APIs",
      "JWT Auth",
      "Socket.IO",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "MSSQL", "Oracle", "Cloudinary"],
  },
  {
    title: "Mobile",
    items: ["Flutter", ".NET MAUI", "Android"],
  },
  {
    title: "Fundamentals & AI",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Machine Learning",
      "Generative AI",
    ],
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  kind: "work" | "education";
  label?: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "Software Developer",
    org: "Xperate · Pune, India",
    period: "Apr 2026 — Present",
    detail:
      "Building bespoke software for law firms, vendors and SME businesses at an international product and services company (UK HQ, teams across India, UK, Canada and Australia).",
    kind: "work",
    label: "Current role",
  },
  {
    title: "Trainee Software Developer",
    org: "Xperate · Pune, India",
    period: "Dec 2025 — Apr 2026",
    detail:
      "Joined the engineering team while finishing my degree, and was promoted to Software Developer within four months.",
    kind: "work",
    label: "Promoted",
  },
  {
    title: "Salesforce Developer Intern",
    org: "SmartInternz · Virtual",
    period: "2024",
    detail:
      "Completed 30+ development tasks with 100% on-time delivery across Apex triggers, Flows, Lightning components and CRM workflows.",
    kind: "work",
  },
  {
    title: "Android Developer Intern",
    org: "Google Developers · Virtual",
    period: "2024",
    detail:
      "Built through guided Android fundamentals — app architecture, lifecycle and UI construction.",
    kind: "work",
  },
  {
    title: "B.Tech, Computer Science & Engineering",
    org: "DKTE Society's Textile & Engineering Institute, Ichalkaranji",
    period: "2022 — 2026",
    detail: "CGPA 8.74 · GATE 2025 qualified",
    kind: "education",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "P.V.P. Mahavidyalaya, Kavathe Mahankal",
    period: "2020 — 2022",
    detail: "83.17%",
    kind: "education",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Hanuman Vidyalaya, Agalgaon",
    period: "2019 — 2020",
    detail: "93.40%",
    kind: "education",
  },
];

export const beyond = [
  "Registered Design No. 467176-001 — Patent Office of India (2025)",
  "AWS Academy Cloud Foundations (2025)",
  "200+ problems solved on LeetCode",
  "Cisco Networking Essentials certified",
  "Smart India Hackathon participant",
];

export const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
