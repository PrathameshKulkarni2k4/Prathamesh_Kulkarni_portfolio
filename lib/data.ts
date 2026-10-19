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
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Express",
  ".NET",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "MSSQL",
  "Oracle",
  "Socket.IO",
  "Tailwind CSS",
  "Flutter",
  ".NET MAUI",
  "REST APIs",
  "GitHub Actions",
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
    category: "Open source \u00b7 developer tooling",
    year: "2026",
    summary:
      "A CLI that finds the tests which randomly pass and fail, ranks them by how unreliable they are, and shows you why \u2014 so you can trust your test suite again.",
    outcomes: [
      "Reads JUnit XML, TAP and Jest JSON \u2014 one tool for any language",
      "Explainable flakiness score, plus failure-signature clustering",
      "Zero runtime dependencies; ships a GitHub Action that reports on pull requests",
    ],
    stack: ["Python", "CLI", "GitHub Actions", "MIT \u00b7 PyPI"],
    repo: "https://github.com/PrathameshKulkarni2k4/flakeguard",
  },
  {
    index: "02",
    title: "CineMatch",
    category: "Recommender \u00b7 live demo",
    year: "2026",
    summary:
      "A content-based movie recommender with a streaming-style interface. Pick a film and it ranks all 4,806 titles in its library by metadata similarity.",
    outcomes: [
      "Ranks 4,806 titles by similarity across genres, keywords, cast and crew",
      "Posters, official trailers and a where-to-watch lookup via TMDB / JustWatch",
      "A single self-contained page \u2014 no build step and no server",
    ],
    stack: ["JavaScript", "TMDB API", "Cosine similarity"],
    live: "https://prathameshkulkarni2k4.github.io/cinematch/",
    repo: "https://github.com/PrathameshKulkarni2k4/cinematch",
  },
  {
    index: "03",
    title: "RoomBuddy",
    category: "Real-time booking platform",
    year: "2025 \u2014 now",
    summary:
      "A PG room-booking platform for students and owners, with live availability and separate role-based access for the two sides of the marketplace.",
    outcomes: [
      "Real-time room availability pushed over Socket.IO",
      "JWT auth with role-based access, plus a Cloudinary image pipeline",
      "React 19 and Vite on the front end, Node 20 and Express behind it",
    ],
    stack: ["React 19", "Vite", "Express", "MongoDB", "Socket.IO", "JWT"],
    live: "https://roombuddyforstudent.vercel.app/",
    repo: "https://github.com/PrathameshKulkarni2k4/room-booking-system",
  },
  {
    index: "04",
    title: "TiffinSplit",
    category: "Full-stack web app",
    year: "2026",
    summary:
      "A meal-cost sharing app that settles shared tiffin expenses fairly across a group, built type-safe end to end on Next.js and Supabase.",
    outcomes: [
      "Shared TypeScript types across the client and the server",
      "PostgreSQL through Supabase, with SSR auth via @supabase/ssr",
      "Vitest unit tests alongside a typed typecheck",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "Vitest",
    ],
    live: "https://tiffinsplit.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/tiffinsplit",
  },
  {
    index: "05",
    title: "Digipanchayat",
    category: "Applied AI \u00b7 rural governance",
    year: "2025 \u2014 now",
    summary:
      "A rural governance portal that automates citizen services, with an LLM assistant that answers questions about government schemes in plain language.",
    outcomes: [
      "LLM assistant on the Anthropic API answering citizen scheme queries",
      "Role-based dashboards for admins, officers and citizens",
      "Eight government schemes modelled and seeded for eligibility lookup",
    ],
    stack: ["React", "Express", "MongoDB", "Anthropic API", "JWT"],
    live: "https://airgss-megaproject.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/AIRGSS-megaproject",
  },
  {
    index: "06",
    title: "Narratia",
    category: "Collaborative writing",
    year: "2025",
    summary:
      "A storytelling platform where each contributor drafts in their own space, and the drafts are merged into one coherent narrative.",
    outcomes: [
      "Per-member draft spaces with a merge step that reconciles them",
      "React 19 and Vite on the front end, Express and MongoDB behind it",
      "JWT auth and a Cloudinary media pipeline",
    ],
    stack: ["React 19", "Vite", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/PrathameshKulkarni2k4/Narratia",
  },
  {
    index: "07",
    title: "MLOps Production Hub",
    category: "ML engineering",
    year: "2026",
    summary:
      "My MLOps track \u2014 what happens after the notebook, from reproducible dependency pinning to a tested and linted Python project.",
    outcomes: [
      "Reproducible environment with uv and pinned requirements",
      "pytest suite plus ruff lint and format checks",
      "One-command setup, sync, test and lint through Make targets",
    ],
    stack: ["Python", "uv", "pytest", "ruff", "Make"],
    repo: "https://github.com/PrathameshKulkarni2k4/mlops-production-hub",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", ".NET", "REST APIs", "JWT Auth", "Socket.IO"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL (Supabase)", "MySQL", "MSSQL", "Oracle"],
  },
  {
    title: "Mobile",
    items: ["Flutter", ".NET MAUI", "Android"],
  },
  {
    title: "AI & ML",
    items: [
      "Generative AI / LLM APIs (Anthropic)",
      "Machine Learning (scikit-learn)",
      "NLP",
    ],
  },
  {
    title: "Testing & tooling",
    items: [
      "Vitest",
      "pytest",
      "GitHub Actions",
      "Git",
      "Vercel",
      "Cloudinary",
      "Figma",
    ],
  },
  {
    title: "Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
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
