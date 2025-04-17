
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import gsap from "gsap";

const skills = [
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Advanced",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Advanced",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: "Intermediate",
  },
  {
    name: "GraphQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    level: "Intermediate",
  },
  {
    name: "TailwindCSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Intermediate",
  },
];

export function Skills() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = (rect.width / 2 - x) / 10;

    gsap.to(card, {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      duration: 0.3,
    });
  };

  useEffect(() => {
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

    if (scrollerInnerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerInnerRef.current.children);
      
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInnerRef.current?.appendChild(duplicatedItem);
      });
      
      gsap.to(scrollerInnerRef.current, {
        x: `-50%`,
        ease: "linear",
        duration: 25,
        repeat: -1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="skills" className="section bg-background overflow-hidden spotlight gradient-dark">
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
              <Card
                key={`${skill.name}-${index}`}
                className="group hover:border-primary/50 transition-colors shrink-0 tilt-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=random`;
                      }}
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
          
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
