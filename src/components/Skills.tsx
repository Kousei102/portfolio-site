import { skillCategories } from "@/data/skills";

const levelStyles: Record<string, string> = {
  得意: "bg-accent/10 text-accent",
  基礎: "bg-foreground/5 text-foreground/70",
  学習中: "bg-foreground/5 text-foreground/50",
  取得済み: "bg-accent/10 text-accent",
  合格見込み: "bg-foreground/5 text-foreground/70",
  取得予定: "bg-foreground/5 text-foreground/50",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
        <p className="mt-2 text-foreground/60">扱える技術・ツール</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/50">
                {cat.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-black/5 bg-foreground/[0.02] px-3 py-2 text-sm dark:border-white/10"
                  >
                    <span className="font-medium">{skill.name}</span>
                    {skill.level && (
                      <span
                        className={`rounded px-1.5 py-0.5 text-xs ${
                          levelStyles[skill.level] ?? "bg-foreground/5"
                        }`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
