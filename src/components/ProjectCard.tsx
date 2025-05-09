
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
  linkDisabled: boolean;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  videoURL,
  tags,
  link,
  linkDisabled,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover h-full border border-border bg-background">
      <div className="aspect-video overflow-hidden bg-muted">
        {videoURL ? (
          <video
            src={videoURL}
            autoPlay={true}
            muted={true}
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <CardHeader>
          <div className="flex gap-2 flex-wrap mb-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <CardTitle className="font-medium">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="showcasy"
            size="showcasy"
            className={`gap-2 ${
              linkDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            asChild={!linkDisabled}
          >
            {linkDisabled ? (
              <span aria-disabled="true">
                View Project <ArrowUpRight className="h-4 w-4" />
              </span>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
