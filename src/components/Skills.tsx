
import { Card, CardContent } from "./ui/card";

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
];

export function Skills() {
  return (
    <section id="skills" className="section bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="group hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

