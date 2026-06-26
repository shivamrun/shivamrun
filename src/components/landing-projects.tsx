import { getAllDocuments } from "@/app/projects/[app_slug]/util";
import { geistSans } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  href,
  imageSrc,
  imageAlt,
  containerClassName,
  duration,
  description,
}: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  containerClassName?: string;
  duration: string;
  description: string;
}) => {
  return (
    <Link className="group block" href={href}>
      <figure
        className={cn(
          "relative grid rounded-sm place-items-center overflow-hidden border border-border/70 bg-card/40 transition-colors md:rounded-1 group-hover:border-border py-16! md:py-24!",
          containerClassName
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="select-none object-contain max-h-24 sm:max-h-32 w-auto rounded-full"
        />
      </figure>
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center px-1 pt-3 pb-2 justify-between w-full">
          <h3
            className="tracking-wide font-medium text-foreground group-hover:underline underline-offset-2"
            style={geistSans.style}
          >
            {title}
          </h3>
          <div className="mb-1.5 text-[13px] text-muted-foreground md:mb-0">
            {duration}
          </div>
        </div>
        <p className="px-1 text-sm text-muted-foreground md:text-[15px]">
          {description}
        </p>
      </div>
    </Link>
  );
};

const LandingProjects = () => {
  const projects = getAllDocuments("projects");
  return (
    <div
      className={cn(
        "mx-auto grid gap-x-6 gap-y-9 md:gap-y-8 pb-6 sm:pb-20 px-2",
        projects.length === 1
          ? "max-w-4xl md:grid-cols-1"
          : "max-w-7xl md:grid-cols-2"
      )}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          duration={project.timeline}
          href={`/projects/${project.key}`}
          imageSrc={
            project.coverImage || `/images/projects/${project.key}/cover.png`
          }
          imageAlt={`${project.title} cover`}
          containerClassName={project.containerClassName}
        />
      ))}
    </div>
  );
};

export default LandingProjects;
