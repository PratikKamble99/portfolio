import { Code, Layout, Lightbulb, Sparkles, DownloadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description:
      "Building interactive and responsive websites with modern frameworks.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Problem Solving",
    description: "Finding creative solutions to complex technical challenges.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Creative Thinking",
    description: "Approaching projects with innovation and fresh perspectives.",
  },
];

export function About() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (skillsRef.current) {
      const cards = skillsRef.current.querySelectorAll('.skill-card');
      
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&auto=format&fit=crop&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About me"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              About Me
            </div>

            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Passionate about creating meaningful digital experiences
            </h2>

            <p className="text-lg text-muted-foreground">
              I'm a developer and designer with over 5 years of experience
              crafting digital solutions for clients across various industries.
              My approach combines technical expertise with creative
              problem-solving to deliver stunning, functional products.
            </p>

            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1jVJS4dBQF5klTiBeiJzJqGy0hK1op3SQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume <DownloadCloud className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-xl md:text-2xl font-display font-bold text-center mb-12">
            My Expertise
          </h3>

          <div ref={skillsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="skill-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
