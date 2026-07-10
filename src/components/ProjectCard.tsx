import type { Project } from "@/data/projects";

/** 外部リンクアイコン（SVG インライン） */
function LinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-black/5 bg-foreground/[0.02] p-6 transition-colors hover:border-accent/40 dark:border-white/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.role && (
          <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60">
            {project.role}
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:underline"
            >
              <LinkIcon /> デモを見る
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-accent"
            >
              <LinkIcon /> コード
            </a>
          )}
        </div>
      )}
    </article>
  );
}
