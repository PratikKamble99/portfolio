
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led the development of multiple web applications using React and TypeScript.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed responsive web applications and mentored junior developers.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    location: "Boston, MA",
    period: "2018 - 2020",
    description: "Built interactive websites and implemented UI/UX designs.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 translate-y-1" />

                <div className={`flex-1 md:text-${index % 2 === 0 ? "right" : "left"}`}>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>
                    
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

