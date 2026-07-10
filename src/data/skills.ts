// ===================================================================
// スキル情報
// カテゴリごとに、扱える技術をタグとして並べます。
// level は任意で「学習中／実務相当」などの目安を添えられます（不要なら消してOK）。
// ===================================================================

export type Skill = {
  /** 技術名（例: TypeScript） */
  name: string;
  /** 習熟度の目安（任意） */
  level?: "学習中" | "基礎" | "得意" | "取得済み" | "合格見込み" | "取得予定";
};

export type SkillCategory = {
  /** カテゴリ名（例: 言語） */
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "言語",
    skills: [
      { name: "Python", level: "得意" },
      { name: "JavaScript", level: "基礎" },
      { name: "HTML / CSS", level: "基礎" },
      { name: "Java", level: "基礎" },
    ],
  },
  {
    category: "フレームワーク・ライブラリ",
    skills: [
      { name: "Matplotlib", level: "基礎" },
      { name: "Pytorch", level: "基礎" },
    ],
  },
  {
    category: "ツール・環境",
    skills: [
      { name: "Claude Code", level: "得意" },
      { name: "Git / GitHub", level: "得意" },
      { name: "VS Code", level: "得意" },
      { name: "Vercel", level: "基礎" },
      { name: "Docker", level: "学習中" },
    ],
  },
  {
    category: "資格",
    skills: [
      { name: "ITパスポート", level: "取得済み" },
      { name: "基本情報技術者試験", level: "合格見込み" },
    ],
  }
];
