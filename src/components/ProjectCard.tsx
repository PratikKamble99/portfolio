
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | null;
  videoURL: string | null;
  tags: { name: string; color: string }[];
  link: string;
  linkDisabled: boolean;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  videoURL,
  link,
  linkDisabled,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg border-none bg-background/50 transition-all hover:shadow-md">
      {/* Media container */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {videoURL ? (
          <video
            src={videoURL}
            autoPlay={true}
            muted={true}
            loop={true}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium leading-tight mb-4">{title}</h3>
        <p className="text-muted-foreground text-base">{description.split('.')[0]}.</p>
        
        {!linkDisabled && (
          <div className="mt-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-foreground font-medium hover:underline"
            >
              Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
