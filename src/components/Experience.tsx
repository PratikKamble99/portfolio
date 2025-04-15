import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
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

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for the heading and description
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animate the timeline line as user scrolls
    gsap.fromTo(
      timelineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.6,
        },
      }
    );

    // Animate each experience card
    experienceRefs.current.forEach((ref, index) => {
      const direction = index % 2 === 0 ? 1 : -1;

      gsap.fromTo(
        ref,
        {
          x: 50 * direction,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2
            ref={headingRef}
            className="text-2xl md:text-4xl font-display font-bold mb-4"
          >
            Work Experience
          </h2>
          <p
            ref={descriptionRef}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line with animated progress */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border/30 -translate-x-1/2" />
            <div
              ref={timelineRef}
              className="absolute left-0 md:left-1/2 w-px bg-primary -translate-x-1/2 origin-top"
              style={{ height: "0%" }}
            />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (experienceRefs.current[index] = el)}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } `}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 translate-y-1 z-10" />

                <div
                  className={`flex-1 md:text-${
                    index % 2 === 0 ? "right" : "left"
                  } ml-4 md:ml-0 `}
                >
                  <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-primary mb-4">
                      {exp.company}
                    </h4>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for timeline layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
