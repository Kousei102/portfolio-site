import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          PORTFOLIO
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
          {profile.nameEn && (
            <span className="ml-3 align-middle text-lg font-normal text-foreground/50">
              {profile.nameEn}
            </span>
          )}
        </h1>
        <p className="mt-4 text-lg text-foreground/80 sm:text-xl">
          {profile.headline}
        </p>
        <p className="mt-8 max-w-2xl leading-relaxed text-foreground/70">
          {profile.about}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#works"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            作品を見る
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            連絡する
          </a>
        </div>
      </div>
    </section>
  );
}
