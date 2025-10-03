import { v4 as uuid } from "uuid";
import { Code, Lightbulb, Sparkles } from "lucide-react";

export const RESUME_LINK =
  "https://drive.google.com/drive/u/0/folders/1JHM4UYAYTLnqaaBwJVl6FMLKW-CP-a6e";

export const SKILLS = [
  {
    icon: Code,
    title: "Development",
    description:
      "Building interactive and responsive websites with modern frameworks.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding creative solutions to complex technical challenges.",
  },
  {
    icon: Sparkles,
    title: "Creative Thinking",
    description: "Approaching projects with innovation and fresh perspectives.",
  },
];

export const NAV_ITEMS = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    id: 2,
    role: "Software Developer",
    company: "Ciklum",
    location: "India", // Update location if needed
    period: "Dec 2022 - Present",
    description:
      "Built scalable web interfaces using React.js, TypeScript, and Material UI. Designed and developed secure RESTful APIs for authentication, authorization, session management, and core feature development. Used Docker for containerization. Created reusable UI components with efficient state management using Redux and Zustand. Collaborated with designers, product owners, and backend engineers in Agile sprints to deliver user-centric features through rapid iteration and code reviews.",
  },
  {
    id: 1,
    role: "Junior Software Developer",
    company: "Infogen Labs",
    location: "India", // Update location if needed
    period: "June 2022 - Dec 2023",
    description:
      "Built reusable UI components in ReactJS, ensuring consistency with design guidelines and enhancing user experience. Gained hands-on experience with ReactJS, Material UI. Proactively fixed bugs in legacy code and collaborated with cross-functional teams to understand best practices and project objectives.",
  },
];

export const PROJECTS = [
  {
    id: uuid(),
    title: "2 Factor Authentication: MERN Stack",
    description:
      "Developed a secure MERN-based Multi-Factor Authentication (MFA) system with session management features, including login with 1FA/2FA, session revocation, and the ability to enable/disable 2FA. Implemented JWT-based authentication, bcrypt for password hashing, and secure token handling to enhance application security.", 
    tags: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB", color: "purple" },
      { name: "Tailwind", color: "pink" },
      { name: "bcrypt", color: "green" },
      { name: "speakeasy", color: "blue" },
    ],
    imageSrc: "./2fa-auth.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/2-factor-auth-MERN",
    linkDisabled: false,
  },
  {
    id: uuid(),
    title: "Cadis EziExpert: Real-time Video Calling with WebRTC",
    description:
      "Real-time video calling application with WebRTC. Implemented features like authentication, authorization, session management, state management, real-time video calling between Rockid Glass and web app.",
    tags: [
      { name: "React", color: "blue" },
      { name: "MySQL", color: "purple" },
      { name: "Material UI", color: "pink" },
      { name: "WebRTC", color: "blue" },
    ],
    imageSrc: null,
    videoURL:
      "https://cadishealth.com/wp-content/uploads/2024/04/CADIS-Video-Final-1.mp4",
    link: "#",
    linkDisabled: true,
  },
  {
    id: uuid(),
    title: "Expense Tracker: Personal Finance Management",
    description:
      "Developed an application to record and manage personal transactions. Features include authentication, adding transactions, uploading images, and data visualization with charts.",
    tags: [
      { name: "React", color: "blue" },
      { name: "express-graphql", color: "green" },
      { name: "mongodb", color: "purple" },
      { name: "tailwind", color: "pink" },
    ],
    imageSrc: "./expenseTracker-2.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/expense-tracker-graphql-react",
    linkDisabled: false,
  },
  {
    id: uuid(),
    title: "Image-AI: Advanced Image Processing SaaS",
    description:
      "Developed a full-fledged Next.js SaaS application from scratch. Implemented authentication, authorization, session/state management, and payment gateway integration. Added object detection and removal, image quality enhancement, and noise reduction features.",
    tags: [
      { name: "Next.js", color: "blue" },
      { name: "MySQL", color: "purple" },
      { name: "Tailwind", color: "pink" },
    ],
    imageSrc: "./imageAi.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/image-ai",
    linkDisabled: false,
  },
  {
    id: uuid(),
    title: "ONCO Healthcare",
    description:
      "Built an appointment booking platform for oncology treatment, allowing patients to schedule consultations with doctors via a user-friendly interface. Integrated Stripe.js for secure, seamless payments and implemented real-time updates for availability and bookings. Enhanced accessibility to oncology care through efficient scheduling and robust backend session handling with JWT.",
    tags: [
      { name: "React", color: "blue" },
      { name: "PostgreSQL", color: "purple" },
      { name: "Material UI", color: "pink" },
      { name: "Stripe", color: "green" },
      { name: "Redux", color: "green" },
    ],
    imageSrc: "./oncoHealthcare.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  {
    id: uuid(),
    title:"Pontis",
    description:"Developed a System Health Monitoring and Log Management application to track real-time performance metrics and user activities. Designed a dynamic UI with React.js and Redux that updates based on backend data. Integrated APIs for live system health tracking, log retrieval, and alert notifications for critical issues, enabling proactive issue resolution and enhanced system stability.",
    tags: [
      { name: "React", color: "blue" },
      { name: "Material UI", color: "pink" },
      { name: "Redux", color: "green" },
      { name: "Chart.js", color: "blue" },
    ],
    imageSrc: "./pontis.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  {
    id: uuid(),
    title:"Munitrix",
    description:"Built a secure database management frontend using React.js, MUI, and Redux, enabling users to dynamically create, update, and delete tables and columns. Implemented AES, RSA, and SHA-1 encryption protocols to ensure secure API communication and protect sensitive data, aligning with modern security standards.",
    tags: [
      { name: "react", color: "blue" },
      { name: "material UI", color: "pink" },
      { name: "redux", color: "green" },
    ],
    imageSrc: "./munitrix.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  ,
  {
    id: uuid(),
    title: "Chatbot Application with Generative AI",
    description:
      "Developed a chatbot application leveraging Generative AI for natural language understanding and response generation. Integrated with a React frontend and a Node.js backend, utilizing MongoDB for data storage. and GenAI concepts like tool calling, vector databases, and prompt engineering to enhance user interactions.",
    tags: [
      { name: "React", color: "blue" },
      { name: "express", color: "green" },
      { name: "Rag.js", color: "purple" },
      { name: "Vector Embeddings", color: "orange" },
      { name: "tailwind", color: "pink" },
    ],
    imageSrc: "./chatbot.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/RAG-pdf-analyzer-chat-bot",
    linkDisabled: false,
  },
  {
    id: uuid(),
    title: "3D Portfolio: Interactive Portfolio",
    description:
      "Developed an interactive portfolio showcasing 3D design and animation. Implemented dynamic UI with smooth transitions, project highlights, and responsive layout. Technologies used include React, Tailwind, and 3D rendering libraries.",
    tags: [
      { name: "React", color: "blue" },
      { name: "express-graphql", color: "green" },
      { name: "mongodb", color: "purple" },
      { name: "tailwind", color: "pink" },
    ],
    imageSrc: "./3dportfolio.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/expense-tracker-graphql-react",
    linkDisabled: false,
  }
];
