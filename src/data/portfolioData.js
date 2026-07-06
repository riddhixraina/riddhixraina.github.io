// ============================================================
// portfolioData.js: Centralized configuration for Riddhi Raina Prasad's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Riddhi Raina Prasad",
  firstName: "Riddhi",
  brandName: "Riddhi Raina",
  title: "Full Stack & AI Engineer",
  location: "Brooklyn, New York",
  phone: "+1 (347) 254-5477",
  emails: {
    primary: "rrp4822@nyu.edu",
  },
  summary:
    "CS grad student at NYU and former SDE2 at Optum (UnitedHealth Group). I build scalable systems and intelligent AI products. 5x hackathon winner shipping full-stack systems that hold up in production.",
  resumeUrl: "/Riddhi_Raina_Prasad_Full_Stack_SDE_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/riddhixraina",
  linkedin: "https://www.linkedin.com/in/riddhiraina/",
  email: "mailto:rrp4822@nyu.edu",
};

export const heroContent = {
  greeting: "Hi, I'm Riddhi",
  titleHighlight: "Full Stack & AI Engineer",
  subtitle:
    "Ex-SDE2 @ UnitedHealthGroup · MS CS @ NYU · 5x hackathon winner. I build scalable systems with Java, C#, React, Python, Kubernetes, and AI that ships.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:rrp4822@nyu.edu?subject=Hiring Inquiry – Portfolio&body=Hello Riddhi,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Riddhi_Raina_Prasad_Full_Stack_SDE_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Riddhi Raina Prasad</span>, a Full Stack & AI Engineer based in Brooklyn, New York. I spent 3+ years at Optum (UnitedHealth Group) building enterprise healthcare systems in Java and C#, migrating legacy monoliths to Kubernetes-orchestrated microservices, hardening data-security pipelines protecting millions of HIPAA records, and automating CI/CD across 8 global engineering teams. Now I'm pursuing my Master's in Computer Science at NYU, and still winning hackathons on the side.`,
  techStack: ["Java & C#", "React & Full Stack", "Cloud & Kubernetes"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into production-ready systems",
  description:
    "From enterprise healthcare platforms to hackathon prototypes, I follow a structured, measurable approach to shipping software that holds up in production.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, users, and constraints, using the same discipline I applied scoping migrations that touched millions of HIPAA-protected records.",
    },
    {
      number: "02",
      title: "Design",
      text: "Clean architecture first: microservices boundaries, data models, and interfaces that stay maintainable as systems and teams grow.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Scalable backends, responsive frontends, and ML pipelines built with modern stacks, typed code, and tests that actually catch things.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Kubernetes, Docker, CI/CD automation, and cloud infrastructure on AWS and Azure, with monitoring and rollback plans, not hope.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 94 },
        { name: "C#", level: 86 },
        { name: "Python", level: 92 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React", level: 92 },
        { name: "Node.js / Express", level: 90 },
        { name: "Next.js", level: 82 },
        { name: "Django / Flask", level: 85 },
        { name: "REST APIs", level: 93 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "CNN / LSTM Architectures", level: 84 },
        { name: "LLM & Agent Systems", level: 86 },
        { name: "Data Analysis (Pandas, GeoPandas)", level: 88 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Kubernetes", level: 90 },
        { name: "Docker", level: 90 },
        { name: "AWS", level: 87 },
        { name: "Azure", level: 84 },
        { name: "Cloudflare Workers (Edge)", level: 82 },
        { name: "CI/CD (Travis, GitHub Actions)", level: 90 },
      ],
    },
    {
      title: "Data & Storage",
      skills: [
        { name: "PostgreSQL / MySQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "DuckDB", level: 80 },
        { name: "Redis / KV Stores", level: 82 },
      ],
    },
    {
      title: "Security & Systems",
      skills: [
        { name: "HIPAA Data Security Pipelines", level: 90 },
        { name: "Distributed Systems", level: 86 },
        { name: "Microservices Architecture", level: 90 },
        { name: "Consistent Hashing / Caching", level: 84 },
      ],
    },
  ],
};

// Hackathons & Achievements (rendered by the ContentCreator section)
export const contentCreation = {
  badge: "Hackathon Circuit",
  heading: "5x Hackathon Winner & Counting",
  description:
    "I've been on the hackathon circuit since undergrad at VIT, with five wins to date, building AI and full-stack prototypes under pressure and shipping them before the clock runs out.",
  categories: [
    {
      title: "Pulse Foundry Hackathon",
      description:
        "Won 1st place building a resilient wound-care billing pipeline that ingests flaky EHR data, grounds extracted facts to source, and lets billers control decisions with a deterministic rule engine.",
      stats: "🥇 1st Place",
      icon: "🏥",
    },
    {
      title: "AWS Financial AI Hackathon",
      description:
        "Placed 2nd out of 500+ teams building an AI-powered financial solution on AWS, competing against teams from across the country.",
      stats: "🥈 2nd of 500+ Teams",
      icon: "🏦",
    },
    {
      title: "Cross-Campus Base44 Hackathon",
      description:
        "Took 1st place at the cross-campus Base44 hackathon, designing and shipping a working AI product end-to-end within the event window.",
      stats: "🥇 1st Place",
      icon: "🏆",
    },
    {
      title: "Five Hackathon Wins",
      description:
        "Five wins across the hackathon circuit since my undergrad days at Vellore Institute of Technology, spanning AI, full-stack, healthcare, and cloud builds.",
      stats: "5x Winner",
      icon: "⚡",
    },
  ],
};

// Leadership & Teaching Data
export const leadershipList = [
  {
    title: "Adjunct Instructor, NYU Center for K12 STEM Education",
    description:
      "Teaching Innovation, Entrepreneurship & Science to K12 students, bringing industry engineering experience into the classroom.",
    role: "Adjunct Instructor",
    badge: "Teaching",
  },
  {
    title: "Graduate Research Assistant, New York University",
    description:
      "Conducting graduate-level research at NYU, applying machine learning and systems engineering to open problems.",
    role: "Research Assistant",
    badge: "Research",
  },
  {
    title: "Teaching Assistant, NYU Courant Institute",
    description:
      "Supported instruction at the Courant Institute of Mathematical Sciences, guiding students through core computer science coursework.",
    role: "Teaching Assistant",
    badge: "Academia",
  },
  {
    title: "Graduate Student Researcher, NYU Vertically Integrated Projects",
    description:
      "Collaborated on long-running, cross-disciplinary research projects within NYU's VIP program.",
    role: "Student Researcher",
    badge: "Innovation",
  },
  {
    title: "Cross-Team Automation Lead, Optum (UnitedHealth Group)",
    description:
      "Automated CI/CD workflows adopted across 8 global engineering teams, cutting release friction for enterprise healthcare systems.",
    role: "Senior Software Engineer",
    badge: "Leadership",
  },
];

// Work Experience Data (rendered by the Internships/Experience section)
export const internshipsList = [
  {
    organization: "Optum · UnitedHealth Group",
    role: "Senior Software Engineer",
    duration: "Mar 2025 – Aug 2025",
    badge: "Full-Time",
    skills: [
      "Automated CI/CD workflows across 8 global engineering teams",
      "Drove production reliability for enterprise healthcare systems",
    ],
    tech: ["Kubernetes", "Java", "C#", "CI/CD", "Microservices", "Cloud"],
  },
  {
    organization: "Optum · UnitedHealth Group",
    role: "Software Engineer",
    duration: "Jun 2023 – Feb 2025",
    badge: "Full-Time",
    skills: [
      "Contributed to migration of legacy monoliths to Kubernetes-orchestrated microservices",
      "Hardened data-security pipelines protecting millions of HIPAA records",
      "Built and maintained scalable backend services in production",
      "Collaborated across global teams on healthcare platform features",
    ],
    tech: ["Java", "C#", "Spring", ".NET", "SQL", "Azure", "Security"],
  },
  {
    organization: "UnitedHealth Group",
    role: "TDP Associate",
    duration: "Jun 2022 – May 2023",
    badge: "Full-Time",
    skills: [
      "Rotated through the Technology Development Program",
      "Shipped features across backend and data engineering stacks",
      "Built foundations in enterprise-scale software delivery",
    ],
    tech: ["Java", "C#", ".NET", "SQL", "Agile", "Cloud"],
  },
  {
    organization: "New York University",
    role: "Graduate Research Assistant",
    duration: "Apr 2026 – Present",
    badge: "Research",
    skills: [
      "Graduate research in computer science at NYU",
      "Applying ML and systems engineering to research problems",
    ],
    tech: ["Python", "PyTorch", "Research"],
  },
  {
    organization: "NYU Courant Institute",
    role: "Teaching Assistant",
    duration: "Jan 2026 – May 2026",
    badge: "Academia",
    skills: [
      "Supported CS instruction at the Courant Institute",
      "Held office hours, graded, and mentored students",
    ],
    tech: ["CS Fundamentals", "Mentoring"],
  },
  {
    organization: "NYU Center for K12 STEM Education",
    role: "Adjunct Instructor",
    duration: "Jun 2026 – Present",
    badge: "Teaching",
    skills: [
      "Teaching Innovation, Entrepreneurship & Science",
      "Designing hands-on STEM curriculum for K12 students",
    ],
    tech: ["Teaching", "Entrepreneurship", "STEM"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Fast Learning", icon: "⚡", desc: "Picking up new languages, frameworks, and domains by shipping alongside reading." },
  { name: "Leadership", icon: "👑", desc: "Driving automation adoption across 8 global engineering teams at Optum." },
  { name: "Teaching", icon: "🎓", desc: "Instructing and mentoring students at NYU, from K12 STEM to the Courant Institute." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking complex distributed systems into clean, logical, testable pieces." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working across global teams, time zones, and disciplines to ship together." },
  { name: "Communication", icon: "💬", desc: "Clear, structured technical communication in code review, docs, and the classroom." },
  { name: "Adaptability", icon: "🌟", desc: "Equally comfortable maintaining established systems and building new ones from scratch." },
  { name: "Competitive Drive", icon: "🏆", desc: "Five hackathon wins built on preparation, speed, and calm under deadline pressure." },
];

export const projects = [
  {
    id: "docuflow",
    number: "01",
    badge: "🥈 AWS Financial AI Hack · 2nd Place",
    organization: "aws-financial-ai-hack-skywalkers77",
    title: "DocuFlow",
    description:
      "An AI intelligence layer for finance teams buried in invoices, contracts, and vendor PDFs. DocuFlow runs a full document-to-answer pipeline with Landing AI ADE extraction, Gemini embeddings, semantic search, anomaly detection, and grounded AI chat so analysts move from ingestion to investigation without leaving the browser. Built with React, FastAPI, PostgreSQL, and AWS.",
    techTags: ["React", "TypeScript", "FastAPI", "Landing AI ADE", "Gemini", "PostgreSQL", "AWS"],
    links: {
      github: "https://github.com/aws-financial-ai-hack-skywalkers77",
      demo: "https://devpost.com/software/docuflow-x7jmsq",
    },
    isFlagship: true,
  },
  {
    id: "ally",
    number: "02",
    badge: "🥇 Cross Campus 44 Hack · 1st Place",
    organization: "ally",
    title: "Ally",
    description:
      "A production-ready AI companion for differently-abled students that removes the daily invisible tax of campus life. Ally reroutes around broken elevators, verifies access failures with timestamped evidence, drafts professor emails, and connects students with peers who understand their experience. Built entirely on Base44 with AI at the core.",
    techTags: ["Base44", "React", "AI Agents", "Accessibility", "Full Stack"],
    links: {
      github: null,
      demo: "https://ally-campus-care.base44.app",
    },
    isFlagship: false,
  },
  {
    id: "astrorag",
    number: "03",
    badge: "🚀 Best Use of Cloudflare · NASA Space Apps",
    organization: "skywalkers77",
    title: "AstroRAG",
    description:
      "A serverless RAG knowledge base that turns NASA space biology publications into a searchable, multimodal AI system. Ingests PDFs, extracts text, images, and tables, chunks content with Gemini embeddings, and answers grounded questions through Cloudflare Workers, D1, Vectorize, and R2 at the edge.",
    techTags: ["Cloudflare Workers", "Vectorize", "D1", "R2", "Gemini", "RAG", "JavaScript"],
    links: {
      github: "https://github.com/skywalkers77/cf_ai_astro-rag",
      demo: "https://youtu.be/WYewpQNFzAk?si=2vuHn05fNh5CvFVY",
    },
    isFlagship: false,
  },
  {
    id: "specterrossai",
    number: "04",
    badge: "🥈 Best Use of Databricks · NYU Startup Week",
    organization: "SpecterRossAI",
    title: "SpecterRossAI",
    description:
      "A voice-enabled courtroom simulation where you argue cases against AI opposing counsel while an AI judge delivers precedent-based rulings. Features real-time WebSocket streaming, ElevenLabs voice agents, RAG over case files stored in Databricks, live transcripts, and strategy coaching for legal professionals and law students.",
    techTags: ["React", "TypeScript", "FastAPI", "ElevenLabs", "Databricks", "RAG", "WebSockets"],
    links: {
      github: "https://github.com/SpecterRossAI",
      demo: "https://devpost.com/software/ai-litigation-simulator-engine",
    },
    isFlagship: false,
  },
  {
    id: "pulsenyc-skywalkers",
    number: "05",
    badge: "🥇 Pulse Foundry Hackathon · 1st Place",
    organization: "pulseNYC-Skywalkers",
    title: "Wound-Care Billing Pipeline",
    description:
      "A resilient clinical billing pipeline that ingests messy EHR notes from a flaky API, extracts wound facts without hallucinating, and lets a non-technical biller control billing decisions. Caches raw data in DuckDB, grounds every extracted fact to its source, and uses a deterministic rule engine so neither API downtime nor LLM output can corrupt a billing call.",
    techTags: ["Python", "DuckDB", "FastAPI", "LangExtract", "Gemini", "Next.js", "Healthcare"],
    links: {
      github: "https://github.com/pulseNYC-Skywalkers",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "nyc-transit-hub",
    number: "06",
    badge: "🥇 NYU LeetCode Bootcamp · Best Project Award",
    organization: "riddhixraina",
    title: "NYC Transit Hub",
    description:
      "Won 1st place and Best Project at the NYU LeetCode Bootcamp. Real-time NYC subway updates, schedules, and transit information powered by MTA GTFS-RT feeds. Flask API polls live arrival data, service alerts, and accessibility outages into SQLite, with a React + TypeScript frontend for station search, trip planning, and a service status dashboard. Dockerized and deployed on Render.",
    techTags: ["React", "TypeScript", "Flask", "Python", "SQLite", "MTA GTFS-RT", "Docker"],
    links: {
      github: "https://github.com/riddhixraina/nyc-transit-hub",
      demo: "https://nyc-transit-hub-1-5zwl.onrender.com/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      icon: "☁️",
    },
    {
      name: "Security Analyst (SSC/Q0901)",
      issuer: "SSC NASSCOM",
      icon: "🛡️",
    },
    {
      name: "Cybersecurity Compliance Framework & System Administration",
      issuer: "IBM",
      icon: "🔐",
    },
    {
      name: "C++ Training",
      issuer: "Professional Certification",
      icon: "⚙️",
    },
    {
      name: "Java Training",
      issuer: "Professional Certification",
      icon: "☕",
    },
    {
      name: "C# / .NET",
      issuer: "Professional Certification",
      icon: "💜",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/riddhiraina/details/certifications/",
};

export const education = {
  degree: "MS – Computer Science",
  institution: "New York University",
  cgpa: null,
  graduation: "2027",
  twelfth: "BTech – Electrical, Electronics & Communications Engineering, Vellore Institute of Technology (2018–2022)",
  tenth: "DAV Schools Network",
};

export const footerContent = {
  taglines: [
    "Full Stack & AI Engineering",
    "Java · C# · React · Kubernetes",
    "Scalable Systems That Ship",
  ],
  credential: "MS CS @ NYU · Ex-SDE2 @ Optum · 5x Hackathon Winner",
  copyright: `© ${new Date().getFullYear()} Riddhi Raina Prasad | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
