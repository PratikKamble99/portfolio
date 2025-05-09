
import { useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
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
];

export function Projects() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate project cards
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="section bg-background py-24">
      <div className="container max-w-7xl">
        <div className="flex justify-between items-center mb-16" ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-medium">
            Insight
          </h2>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-2 px-6 font-medium"
          >
            View All Insights <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
