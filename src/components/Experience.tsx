import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE } from "@/data";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading and description animation
    gsap.fromTo(
      [headingRef.current, descriptionRef.current],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Timeline line animation with coca-cola effect
    gsap.fromTo(
      timelineRef.current,
      { height: "0%" },
      {
        height: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Experience cards animation
    experienceRefs.current.forEach((ref, index) => {
      const xOffset = index % 2 === 0 ? 100 : -100;

      gsap.fromTo(
        ref,
        {
          x: xOffset,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
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
            {EXPERIENCE.map((exp, index) => (
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
                  } ml-4 md:ml-0`}
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
