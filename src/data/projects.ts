// ===================================================================
// 作品（プロジェクト）情報
// projects 配列に作品を追加していくだけで Works セクションに反映されます。
// ===================================================================

export type Project = {
  /** 作品名 */
  title: string;
  /** 概要（1〜3行）。何を作ったか・何を工夫したかを簡潔に。 */
  description: string;
  /** 使用技術のタグ */
  tech: string[];
  /** ソースコードの URL（任意） */
  repoUrl?: string;
  /** 公開デモの URL（任意） */
  demoUrl?: string;
  /** 個人開発 / チーム / 業務 などの区分（任意） */
  role?: string;
};

export const projects: Project[] = [
  {
    title: "このポートフォリオサイト",
    description:
      "自己紹介・スキル・作品をまとめた個人サイト。Next.js（App Router）と TypeScript で構築し、" +
      "型付きのデータファイルで内容を管理してメンテナンスしやすくしています。レスポンシブ対応。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/your-account/portfolio-site",
    demoUrl: "",
    role: "個人開発",
  },
  {
    title: "作品タイトル その2",
    description:
      "どんな課題を解決するために、何を作ったのかを書きます。工夫した点や学びを一言添えると伝わりやすくなります。",
    tech: ["React", "TypeScript"],
    repoUrl: "https://github.com/your-account/example-2",
    demoUrl: "",
    role: "個人開発",
  },
];
