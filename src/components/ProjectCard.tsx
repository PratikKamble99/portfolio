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
    <Card className="overflow-hidden rounded-lg border bg-background/50 transition-all hover:shadow-md h-full">
      {/* Media container */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {!linkDisabled && (
          <div className="absolute top-4 right-4 flex gap-2">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={"./github.png"}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
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
        <p className="text-muted-foreground text-base">
          {description.split(".")[0]}.
        </p>

        {/* {!linkDisabled && (
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
        )} */}
      </div>
    </Card>
  );
}
