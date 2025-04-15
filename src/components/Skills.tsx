
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import gsap from "gsap";

const skills = [
  {
    name: "React",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: "Advanced",
  },
  {
    name: "Node.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    level: "Advanced",
  },
  {
    name: "Next.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    level: "Intermediate",
  },
  {
    name: "GraphQL",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    level: "Intermediate",
  },
  {
    name: "TailwindCSS",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    level: "Intermediate",
  },
];

export function Skills() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animation for title and description
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    gsap.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
        }
      }
    );

    // Clone the skills for infinite scrolling effect
    if (scrollerInnerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerInnerRef.current.children);
      
      // Clone the skill items to ensure smooth infinite scroll
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInnerRef.current?.appendChild(duplicatedItem);
      });
      
      // Auto-scroll animation
      gsap.to(scrollerInnerRef.current, {
        x: `-50%`,
        ease: "linear",
        duration: 25,
        repeat: -1,
      });
    }
  }, []);
  
  return (
    <section id="skills" className="section bg-background overflow-hidden">
      <div className="container mb-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-2xl md:text-4xl font-display font-bold mb-4">Skills & Technologies</h2>
          <p ref={descRef} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div ref={scrollerRef} className="overflow-hidden relative w-full">
          <div 
            ref={scrollerInnerRef} 
            className="flex gap-6 whitespace-nowrap"
          >
            {skills.map((skill, index) => (
              <Card key={`${skill.name}-${index}`} className="group hover:border-primary/50 transition-colors shrink-0">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="text-center whitespace-normal">
                    <h3 className="font-semibold mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Gradient overlays for better visual effect */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
