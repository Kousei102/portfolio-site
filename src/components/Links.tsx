import { profile } from "@/data/profile";

export function Links() {
  return (
    <section id="links" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Links</h2>
        <p className="mt-2 text-foreground/60">
          制作物やアカウントは下記のリンクからご覧いただけます。
        </p>

        {profile.socials.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-4">
            {profile.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* TODO: 将来的にお問い合わせフォームを追加する場合はここに
            （その際はセクション名を Contact に戻すことを検討）。
            静的サイトのままなら Formspree などのフォームバックエンド、
            動的にするなら Route Handler + メール送信サービスを利用します。 */}
      </div>
    </section>
  );
}
