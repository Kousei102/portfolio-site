"use client";

import { useEffect, useRef } from "react";
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

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape で閉じる + 背面スクロールのロック（開いている間のみ）
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details ?? {};
  const titleId = "project-detail-title";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-black/5 bg-background p-6 shadow-xl sm:p-8 dark:border-white/10"
      >
        {/* 閉じるボタン */}
        <button
          type="button"
          ref={closeButtonRef}
          aria-label="閉じる"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-accent"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* タイトル + 区分 */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id={titleId} className="text-xl font-bold sm:text-2xl">
              {project.title}
            </h2>
            {project.role && (
              <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60">
                {project.role}
              </span>
            )}
          </div>

          {/* 技術タグ */}
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* スクリーンショット */}
        {details.screenshots && details.screenshots.length > 0 && (
          <div className="mt-6 flex flex-col gap-4">
            {details.screenshots.map((shot) => (
              // 任意アスペクト比のスクリーンショットのため <img> を使用。
              // 将来的に next/image へ移行する場合は width/height の指定が必要。
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="h-auto w-full rounded-lg border border-black/5 dark:border-white/10"
              />
            ))}
          </div>
        )}

        {/* 概要 */}
        {details.overview && (
          <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-foreground/80">
            {details.overview}
          </p>
        )}

        {/* 工夫した点 */}
        {details.highlights && details.highlights.length > 0 && (
          <section className="mt-6">
            <h3 className="text-sm font-semibold">工夫した点</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed text-foreground/70">
              {details.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 苦労した点 */}
        {details.challenges && details.challenges.length > 0 && (
          <section className="mt-6">
            <h3 className="text-sm font-semibold">苦労した点</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed text-foreground/70">
              {details.challenges.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* リンク */}
        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-black/5 pt-5 text-sm font-medium dark:border-white/10">
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
      </div>
    </div>
  );
}
