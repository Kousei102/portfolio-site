// ===================================================================
// プロフィール情報
// このファイルの値を自分の情報に書き換えてください。
// ===================================================================

export type SocialLink = {
  /** 表示名（例: GitHub） */
  label: string;
  /** リンク先 URL */
  href: string;
};

export type Profile = {
  /** 氏名（例: 山田 太郎） */
  name: string;
  /** 英語表記など、氏名の下に添えるサブ表記（任意） */
  nameEn?: string;
  /** 肩書き・キャッチコピー（例: Webエンジニア / フロントエンド志望） */
  headline: string;
  /** 自己紹介文（数行程度） */
  about: string;
  /** SNS・外部リンク */
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "木口 恒生",
  nameEn: "Kousei Kiguchi",
  headline: "はじめまして、新米エンジニアです",
  about:
    "Claude Codeを用いた開発を学んでいます。\n\n※ 現在、このポートフォリオは制作中です。内容が不十分な箇所があります。ご了承ください。",
  socials: [
    { label: "GitHub", href: "https://github.com/Kousei102" },
    /** { label: "X (Twitter)", href: "https://x.com/your-account" }, */
    /** { label: "Zenn", href: "https://zenn.dev/your-account" }, */
  ],
};
