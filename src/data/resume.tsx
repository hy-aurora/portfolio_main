import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Omisha Singh",
  initials: "OS",
  url: "https://hyaurora.me",

  location: "Kanpur, Uttar Pradesh, India",
  locationLink:
    "https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh+208012",
  description:
    "Full-stack software engineer crafting AI, realtime streaming, and Web3 products that scale from prototype to production.",
  summary: `**Software engineer & B.Tech CSE student** building production-grade experiences across streaming, automation, and campus ecosystems.

As an SDE I Intern at Tackle Studioz, I collaborate with designers and PMs to turn ambitious product ideas into performant web applications. I thrive on shipping zero-to-one software—deploying realtime streaming with StreamFi, automating GTM workflows via MailForge, and scaling community platforms like VYBE and UniMart.

- Finalist at Yellow Hackathon 2025 (India Edition) with StreamFi, a realtime streaming platform blending edge delivery and encrypted workflows.
- Certified across Google Cloud, AI/ML, cybersecurity, and Web3 innovation, always exploring how emerging tech augments human work.
- Active campus leader mentoring peers on modern stacks and guiding multidisciplinary builds.`.trim(),
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "FastAPI",
    "Django",
    "Spring Boot",
    "Node.js",
    "Express",
    "SQL",
    "Google Cloud",
    "Firebase",
    "Convex",
    "Docker",
    "Git & GitHub",
    "Figma",
    // Added from project tech stacks
    "Tailwind CSS",
    "MongoDB",
    "Socket.IO",
    "Stripe",
    "Ethers.js",
    "RainbowKit",
    "shadcn/ui",
    "Resend API",
    "Google Gemini",
    "React Hook Form",
    "Zod",
    "React Hot Toast",
    "Vite",
    "Framer Motion",
    "JWT",
    "NextUI",
    "Clerk",
    "Redis",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "omishasingh201@gmail.com",
    tel: "+917388762608",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hy-aurora",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/singhomi201",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/OmishaSingh02",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://hyaurora.me",
        icon: Icons.globe,
        navbar: false,
      },
      Certificates: {
        name: "Certificates",
        url: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
        icon: Icons.googleDrive,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:omishasingh201@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Tackle Studioz",
      href: "https://tacklestudioz.com/",
      badges: ["SDE I Intern"],
      location: "Remote",
      title: "Software Development Engineer I Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQF6yLyOGkhQ6A/company-logo_200_200/B56ZaW7YNuGUAI-/0/1746288871824/tacklestudioz_logo?e=2147483647&v=beta&t=tZ5_MYIkRByHYCYH1BKF8FZrU3voKrCNkmOm6BQpeTA",
      start: "May 2025",
      end: "July 2025",
      description:
        "Developed and maintained scalable web applications using modern frameworks and cloud services while partnering with cross-functional stakeholders to streamline releases and deliver high-quality experiences.",
    },
  ],
  education: [
    {
      school: "Pranveer Singh Institute of Technology (PSIT)",
      href: "https://psit.ac.in/",
      degree: "B.Tech in Computer Science & Engineering · CGPA 7.5/10",
      logoUrl: "https://www.psit.ac.in/assets/webp/psit-logos/psit-logo-2.jpeg",
      start: "Dec 2022",
      end: "Jul 2026 (Expected)",
    },
    {
      school: "Onkareshwar Saraswati Vidya Niketan Inter College (OSVN)",
      href: "",
      degree: "Senior Secondary · 84.60%",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WHCzxwfqrMZyYEgiRv1bs0ABs-icPPXl6g&s",
      start: "Apr 2020",
      end: "Apr 2021",
    },
    {
      school: "Onkareshwar Saraswati Vidya Niketan Inter College (OSVN)",
      href: "",
      degree: "High School · 84.83%",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WHCzxwfqrMZyYEgiRv1bs0ABs-icPPXl6g&s",
      start: "Apr 2010",
      end: "Apr 2019",
    },
  ],
  projects: [
    {
      title: "StreamFi · Live Streaming × Web3 × Realtime",
      href: "https://streamfi.codernotme.me/landing",
      dates: "2025",
      active: true,
      description: `Launch-ready live streaming platform blending realtime chat, Web3 monetisation, and creator tooling.

**Why StreamFi**
- One cohesive stack for RTMP ingest, HLS playback, realtime chat, and on-chain revenue (NFTs, tips).
- Batteries-included DX: auth, roles, moderation, metrics, logging, CSRF, CORS, and automated tooling.
- Modular by design—swap media backends, blockchains, or payment rails without rewriting core flows.`.trim(),
      technologies: [
        "TypeScript",
        "Next.js",
        "Express",
        "Socket.IO",
        "MongoDB",
        "Stripe",
        "Ethers v6",
        "Tailwind CSS",
        "RainbowKit",
        "Docker",
      ],
      links: [
        {
          type: "Live",
          href: "https://streamfi.codernotme.me/landing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hy-aurora/StreamFi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/streamfi.png",
      video: "",
    },
    {
      title: "MailForge · AI-Powered Email Service",
      href: "https://github.com/hy-aurora/MailForge",
      dates: "2025",
      active: true,
      description: `Enterprise-grade email automation suite with AI drafting, deliverability optimisation, and responsive UI.

- Generates personalised campaigns using Google Gemini with tone presets and context-aware templates.
- Integrates Resend API, custom headers, spam avoidance, and compliance-ready unsubscribe flows.
- Supports bulk sending, PDF attachments, file ingestion, and full analytics across teams.`.trim(),
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Resend API",
        "Google Gemini",
        "React Hook Form",
        "Zod",
        "React Hot Toast",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hy-aurora/MailForge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mailer.png",
      video: "",
    },
    {
      title: "EdHub – Create & Sell Online Courses",
      href: "https://edhub.hritikyadav.me/",
      dates: "2025",
      active: false,
      description: `Modern learning marketplace enabling instructors to launch courses with analytics, dashboards, and rich UX.

- Built responsive frontend with React, Vite, Tailwind, and Framer Motion for smooth authoring flows.
- Delivers secure enrolment, JWT auth, and MongoDB-powered course management via Express APIs.
- Admin console monitors platform metrics, approvals, and roadmap for payments, certificates, and streaming.`.trim(),
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      links: [
        {
          type: "Live",
          href: "https://edhub.hritikyadav.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hy-aurora/EdHub/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/edhub.png",
      video: "",
    },
    {
      title: "VYBE – Campus Collaboration Platform",
      href: "https://vybe1.vercel.app/",
      dates: "2024 – 2025",
      active: false,
      description: `Social platform for colleges that unites students, mentors, and communities with realtime collaboration.

- Multi-role experience covering students, mentors, admins, and tech users with tailored dashboards.
- Realtime chat, anonymous discussions, and project workbench powered by Convex and Redis.
- Hardened for production with Clerk authentication, Dockerised services, and scalable Next.js architecture.`.trim(),
      technologies: [
        "Next.js",
        "NextUI",
        "TypeScript",
        "Tailwind CSS",
        "Clerk",
        "Convex",
        "Redis",
        "Docker",
      ],
      links: [
        {
          type: "Live",
          href: "https://vybe1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hy-aurora/vybe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vybe.png",
      video: "",
    },
    {
      title: "UniMart – Student Marketplace",
      href: "https://unimart.codernotme.me/",
      dates: "2024",
      active: false,
      description: `Campus-focused marketplace that streamlines buying, selling, and discovering student essentials.

- Built catalogue browsing, search, and secure order flows with Next.js and Tailwind CSS.
- Node.js APIs with MongoDB handle listings, messaging, and role-based management for sellers and admins.
- Deployed responsive experience optimised for mobile users and rapid campus launches.`.trim(),
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Live",
          href: "https://unimart.codernotme.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hy-aurora/unimart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/unimart.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Yellow Hackathon 2025 (India Edition)",
      dates: "September 2025",
      location: "India",
      description:
        "Finalist with StreamFi – a realtime streaming platform featuring low-latency ingest (RTMP→HLS), on-chain creator monetisation, and encrypted moderation workflows.",
      image: "https://pbs.twimg.com/media/G1hXtw8WAAAxciO.jpg",
      links: [
        {
          title: "Certificate Folder",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Deloitte Technology Job Simulation",
      dates: "July 2025",
      location: "Virtual",
      description:
        "Completed consulting simulation covering cloud modernisation scoping, stakeholder communication, and solution architecture deliverables.",
      image: "https://www.graduatesfirst.com/wp-content/uploads/2023/07/Deloitte-logo-5696145.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "AWS Solutions Architecture Job Simulation",
      dates: "July 2025",
      location: "Virtual",
      description:
        "Designed scalable AWS workloads, produced architecture diagrams, and articulated trade-offs for resilience and cost optimisation.",
      image: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1641170563/image8965422010918071331.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Salesforce Trailhead Agentblazer Champion",
      dates: "May 2025",
      location: "Virtual",
      description:
        "Earned Trailhead credential focusing on CRM automation, service excellence, and multi-channel customer support workflows.",
      image: "https://trailhead.salesforce.com/assets/agentblazer/agentblazer-level-1-3afbb05a25116376d5021711bb6d1b3550296280f8d5cb3b69c1188cdcfe723b.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      dates: "April 2025",
      location: "Virtual",
      description:
        "Completed foundational AWS curriculum covering core services, global infrastructure, pricing, and security best practices.",
      image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "freeCodeCamp Responsive Web Design",
      dates: "March 2025",
      location: "Virtual",
      description:
        "Built accessible, mobile-first layouts and components using semantic HTML5 and modern CSS techniques across multiple projects.",
      image: "https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/drive/folders/13wy7bl57urcybiqxKrf238YzxqG_Zm9H?usp=drive_link",
          icon: <Icons.googleDrive className="h-4 w-4" />,
        },
      ],
    },
  ],
} as const;
