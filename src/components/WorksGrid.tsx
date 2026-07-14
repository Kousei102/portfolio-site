"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

export function WorksGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={
              project.details ? () => setSelected(project) : undefined
            }
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
