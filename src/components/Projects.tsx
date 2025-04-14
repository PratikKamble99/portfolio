
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with product filtering and user authentication.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    tags: ["React", "NextJS", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for financial analytics with real-time data.",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    tags: ["React", "ChartJS", "Redux"],
    link: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A community platform with social interactions and content sharing.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "Customizable portfolio website template for creative professionals.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across different domains and technologies.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${project.id * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
