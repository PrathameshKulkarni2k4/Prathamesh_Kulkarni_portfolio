export const profile = {
  name: "Prathamesh Kulkarni",
  firstName: "Prathamesh",
  role: "Full-Stack Web & AI Developer",
  tagline:
    "Building scalable MERN-stack applications and intelligent AI solutions.",
  bio: "I am a final-year B.Tech Computer Science student at DKTE Society's Textile & Engineering Institute, Ichalkaranji. My foundation is built on strong problem-solving in Data Structures & Algorithms, and I specialise in Full-Stack Web Development with the MERN stack, with a keen interest in Machine Learning and Generative AI. My goal is to bridge robust software engineering with intelligent systems to build automated, scalable solutions for real-world problems.",
  location: "Ichalkaranji, Maharashtra, India",
  email: "prathameshkulkarni22092004@gmail.com",
  phone: "+91 93228 12459",
  github: "https://github.com/PrathameshKulkarni2k4",
  linkedin: "https://www.linkedin.com/in/prathameshkulkarni2k4/",
  leetcode: "https://leetcode.com/u/PrathameshKulkarni2k4/",
  resume:
    "https://drive.google.com/file/d/1_IAQkHuRXyggDjtJ275sxu2-NhqmYPvz/view",
};

export const stats = [
  { label: "Current CGPA", value: "8.74" },
  { label: "LeetCode Problems", value: "200+" },
  { label: "GATE Qualified", value: "2025" },
  { label: "Public Repos", value: "23" },
];

export const techStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Java",
  "C++",
  "Python",
  "SQL",
  "Git",
  "GitHub",
  "Socket.IO",
  "JWT",
  "REST APIs",
  "Scikit-learn",
  "Figma",
  "Vercel",
];

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    items: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web Technologies",
    icon: "layers",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML/CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Figma", "Vercel", "Postman", "Socket.IO", "Cloudinary"],
  },
  {
    title: "Core & AI",
    icon: "brain",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Machine Learning (Scikit-learn)",
      "Generative AI",
      "REST APIs",
      "JWT Authentication",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "TiffinSplit",
    category: "FULL-STACK · TYPE-SAFE",
    description:
      "A tiffin / meal expense-sharing platform that splits shared food costs fairly across groups — built end-to-end in TypeScript with a focus on clean data modelling.",
    highlights: [
      "Type-safe full-stack architecture in TypeScript",
      "Fair per-member expense splitting logic",
      "Deployed live on Vercel",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    live: "https://tiffinsplit.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/tiffinsplit",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "RoomBuddy",
    category: "PG-ROOM BOOKING SYSTEM",
    description:
      "A MERN PG room-booking platform for students and owners with real-time room availability, secure role-based auth and image-driven room discovery.",
    highlights: [
      "Real-time availability updates via Socket.IO",
      "Secure JWT login with role-based access control",
      "Cloudinary-powered room image uploads",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    live: "https://roombuddyforstudent.vercel.app/",
    repo: "https://github.com/PrathameshKulkarni2k4/room-booking-system",
    accent: "from-indigo-400 to-violet-500",
  },
  {
    title: "Digipanchayat",
    category: "AI-POWERED RURAL GOVERNANCE",
    description:
      "An AI system that automates citizen services using NLP and ML — classifying grievances and predicting scheme eligibility to make rural governance faster.",
    highlights: [
      "NLP-based grievance classification",
      "ML-driven scheme eligibility prediction",
      "Real-time interaction for rural governance workflows",
    ],
    stack: ["MERN", "GenAI", "NLP", "Computer Vision"],
    live: "https://airgss-megaproject.vercel.app",
    repo: "https://github.com/PrathameshKulkarni2k4/AIRGSS-megaproject",
    accent: "from-fuchsia-400 to-purple-600",
  },
  {
    title: "Narratia",
    category: "AI COLLABORATIVE WRITING",
    description:
      "A collaborative storytelling web app where individuals or teams write drafts in their own space, then merge them into one cohesive narrative using context-aware AI.",
    highlights: [
      "Per-member draft spaces with AI-assisted refinement",
      "Intelligent context-aware story merging",
      "Built for both solo writers and teams",
    ],
    stack: ["JavaScript", "Node.js", "AI/LLM", "MongoDB"],
    repo: "https://github.com/PrathameshKulkarni2k4/Narratia",
    accent: "from-amber-400 to-rose-500",
  },
  {
    title: "Movie Recommendation System",
    category: "MACHINE LEARNING",
    description:
      "A content-based recommender that uses TF-IDF vectorisation and cosine similarity to surface accurate movie suggestions with live metadata.",
    highlights: [
      "TF-IDF vectorisation + cosine similarity modelling",
      "TMDb API integration for real-time metadata",
      "Python data pipeline with Pandas & NumPy",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "TMDb API"],
    repo: "https://github.com/PrathameshKulkarni2k4/Movie_recommadation",
    accent: "from-sky-400 to-blue-600",
  },
  {
    title: "MLOps Production Hub",
    category: "ML ENGINEERING",
    description:
      "An exploration of taking models to production — reproducible pipelines, containerised training and deployment workflows for ML systems.",
    highlights: [
      "Reproducible ML pipelines with Make",
      "Containerised training & serving workflows",
      "Focus on production-grade ML engineering",
    ],
    stack: ["Python", "Makefile", "Docker", "MLOps"],
    repo: "https://github.com/PrathameshKulkarni2k4/mlops-production-hub",
    accent: "from-teal-400 to-emerald-600",
  },
];

export type ExperienceItem = {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
  kind: "work" | "education";
};

export const timeline: ExperienceItem[] = [
  {
    title: "Salesforce Developer Intern",
    subtitle: "SmartInternz (Virtual Internship)",
    period: "2024",
    points: [
      "Completed 30+ development tasks with 100% on-time delivery.",
      "Hands-on with Apex triggers, Flows, Lightning components and CRM workflows.",
    ],
    kind: "work",
  },
  {
    title: "Android Developer Intern",
    subtitle: "Google Developers (Virtual Internship)",
    period: "2024",
    points: [
      "Explored Android application development fundamentals.",
      "Worked through guided build tasks around mobile app architecture.",
    ],
    kind: "work",
  },
  {
    title: "B.Tech — Computer Science & Engineering",
    subtitle: "DKTE Society's Textile & Engineering Institute, Ichalkaranji",
    period: "2022 — 2026",
    points: ["Current CGPA: 8.74", "GATE 2025 Qualified"],
    kind: "education",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "P.V.P. Mahavidyalaya, Kavathe Mahankal",
    period: "2020 — 2022",
    points: ["Percentage: 83.17%"],
    kind: "education",
  },
  {
    title: "Secondary School Certificate (SSC)",
    subtitle: "Hanuman Vidyalaya, Agalgaon",
    period: "2019 — 2020",
    points: ["Percentage: 93.40%"],
    kind: "education",
  },
];

export const highlights = [
  {
    title: "Competitive Programming",
    body: "Solved 200+ problems on LeetCode, sharpening algorithmic thinking and coding speed.",
  },
  {
    title: "Cisco Networking Essentials",
    body: "Certified in fundamental networking concepts — protocols, addressing and the OSI model.",
  },
  {
    title: "Smart India Hackathon",
    body: "Active participant, building real-world solutions under time pressure.",
  },
  {
    title: "Virtual Internships",
    body: "Salesforce Developer (SmartInternz) and Android Developer (Google Developers).",
  },
];

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
