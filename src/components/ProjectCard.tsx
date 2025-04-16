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
import { Tooltip } from "./ui/tooltip";

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
      </div>
      <div className="h-64 flex flex-col justify-between">
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
          <CardDescription>
            <Tooltip>
              {description.length > 200
                ? description.slice(0, 200) + "..."
                : description}
            </Tooltip>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="outline"
            className={`gap-2 ${
              linkDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            asChild
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
