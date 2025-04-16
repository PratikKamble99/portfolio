import { useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    title: "Cadis EziExpert",
    description:
      "Real-time video calling application with WebRTC. Implemented features like authentication, authorization, session management, state management, real-time video calling between Rockid Glass and web app. Integrated Janus media server for WebRTC functionalities, managing signaling and media transfer.",
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
  },
  {
    id: 2,
    title: "Image-AI",
    description:
      "Developed a full-fledged Next.js SaaS application from scratch. Implemented authentication, authorization, session/state management, and payment gateway integration. Added object detection and removal, image quality enhancement, and noise reduction features.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    imageSrc: "./imageAi.png",
    videoURL: null,
    link: "https://github.com/",
  },
  {
    id: 3,
    title: "Expense Tracker",
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
    link: "https://github.com/",
  },
  {
    id: 4,
    title: "PONTIS",
    description:
      "Configured a dynamic UI that adapts in real-time based on backend data. Created logic to render UI components conditionally as per API responses.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "material UI", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    imageSrc: "./pontis.png",
    videoURL: null,
    link: "#",
  },
];

export function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="section bg-muted/30 overflow-hidden">
      <div className="container mb-12">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across different domains and technologies.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
