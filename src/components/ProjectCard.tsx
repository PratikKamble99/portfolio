import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  videoURL: string;
  tags: { name: string; color: string }[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  videoURL,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover h-full">
      <div className="aspect-video overflow-hidden bg-muted">
        {videoURL ? (
          <video
            src={videoURL}
            autoPlay={true}
            muted={true}
            // controls
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between">
        <CardHeader>
          <div className="flex gap-2 flex-wrap mb-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-2 py-1 bg-secondary ${tag.color} text-xs rounded-full`}
              >
                {tag.name}
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
      </div>
    </Card>
  );
}
