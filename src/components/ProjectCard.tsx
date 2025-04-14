
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex gap-2 flex-wrap mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="gap-2" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
