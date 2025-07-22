import { Code, Layout, Lightbulb, Sparkles, DownloadCloud } from "lucide-react";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1PpkhdI-0xfi9cc7LmJU31vJDeodGWKWW/view?usp=drive_link";

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
      "Streamlined development by adopting Micro Frontend Architecture, reducing build time by 60%, and accelerating release cycles. Built scalable web applications using React, TypeScript, Node.js, PostgreSQL, MySQL, Tailwind CSS, and Material UI. Mentored junior developers and interns on clean code, and performance best practices.",
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
    id: 1,
    title: "Cadis EziExpert: Real-time Video Calling with WebRTC",
    description:
      "Real-time video calling application with WebRTC. Implemented features like authentication, authorization, session management, state management, real-time video calling between Rockid Glass and web app.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
      { name: "webRTC", color: "blue-text-gradient" },
    ],
    imageSrc: null,
    videoURL:
      "https://cadishealth.com/wp-content/uploads/2024/04/CADIS-Video-Final-1.mp4",
    link: "#",
    linkDisabled: true,
  },
  {
    id: 3,
    title: "Expense Tracker: Personal Finance Management",
    description:
      "Developed an application to record and manage personal transactions. Features include authentication, adding transactions, uploading images, and data visualization with charts.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "express-graphql", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    imageSrc: "./expenseTracker.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/expense-tracker-graphql-react",
    linkDisabled: false,
  },
  {
    id: 2,
    title: "Image-AI: Advanced Image Processing SaaS",
    description:
      "Developed a full-fledged Next.js SaaS application from scratch. Implemented authentication, authorization, session/state management, and payment gateway integration. Added object detection and removal, image quality enhancement, and noise reduction features.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    imageSrc: "./imageAi.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/image-ai",
    linkDisabled: false,
  },
  {
    id: 5,
    title: "ONCO Healthcare",
    description:
      "Built an appointment booking platform for oncology treatment, allowing patients to schedule consultations with doctors via a user-friendly interface. Integrated Stripe.js for secure, seamless payments and implemented real-time updates for availability and bookings. Enhanced accessibility to oncology care through efficient scheduling and robust backend session handling with JWT.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
      { name: "stripe", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
    ],
    imageSrc: "./oncoHealthcare.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  {
    id:6,
    title:"Pontis",
    description:"Developed a System Health Monitoring and Log Management application to track real-time performance metrics and user activities. Designed a dynamic UI with React.js and Redux that updates based on backend data. Integrated APIs for live system health tracking, log retrieval, and alert notifications for critical issues, enabling proactive issue resolution and enhanced system stability.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "react-chart-js", color: "green-text-gradient" },
    ],
    imageSrc: "./pontis.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  {
    id:7,
    title:"Munitrix",
    description:"Built a secure database management frontend using React.js, MUI, and Redux, enabling users to dynamically create, update, and delete tables and columns. Implemented AES, RSA, and SHA-1 encryption protocols to ensure secure API communication and protect sensitive data, aligning with modern security standards.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
    ],
    imageSrc: "./munitrix.png",
    videoURL: null,
    link: null,
    linkDisabled: true,
  },
  {
    id:8,
    title: "3D Portfolio: Interactive Portfolio",
    description:
      "Developed an interactive portfolio showcasing 3D design and animation. Implemented dynamic UI with smooth transitions, project highlights, and responsive layout. Technologies used include React, Tailwind, and 3D rendering libraries.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "express-graphql", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    imageSrc: "./3dportfolio.png",
    videoURL: null,
    link: "https://github.com/PratikKamble99/expense-tracker-graphql-react",
    linkDisabled: false,
  },
];
