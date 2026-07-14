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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Claude Code"],
    repoUrl: "https://github.com/Kousei102/portfolio-site",
    demoUrl: "",
    role: "個人開発",
  },
  {
    title: "レシート家計簿AI",
    description:
      "レシートの写真をアップロードすると、AIが自動で家計簿を作成してくれるアプリ。Claude APIとNext.jsを使用し、ユーザーが簡単に家計管理できるように設計されています。",
    tech: ["Next.js", "TypeScript", "Claude Code"],
    repoUrl: "https://github.com/Kousei102/receipt-budget-ai",
    demoUrl: "https://receipt-budget-ai.vercel.app/",
    role: "個人開発",
  },
  {
    title: "ミニゲーム集",
    description:
      "ブラウザで遊べる5種類のミニゲーム（ブロック崩し・Climb or Burn・弾幕シューティング・剣戟バトル・スターよけ）を集めたゲームポータル。" +
      "難易度設定やアイテム、2人対戦などゲームごとに異なる遊び方を実装しています。",
    tech: ["HTML", "CSS", "JavaScript", "Claude Code"],
    repoUrl: "https://github.com/Kousei102/claude-code-book-template",
    demoUrl: "https://minigames-k.onrender.com/",
    role: "個人開発",
  },
];
