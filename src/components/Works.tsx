import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Works() {
  return (
    <section
      id="works"
      className="scroll-mt-16 border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Works</h2>
        <p className="mt-2 text-foreground/60">これまでに作ったもの</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
