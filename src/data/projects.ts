// ===================================================================
// 作品（プロジェクト）情報
// projects 配列に作品を追加していくだけで Works セクションに反映されます。
//
// details を書くと、その作品のカードがクリック可能になり、
// クリックでスクリーンショットや詳しい文章を大きく表示する詳細モーダルが開きます。
// details を省略した作品は、従来どおりクリック不可のカードのままです。
// ===================================================================

/** カードをクリックしたときに開く詳細モーダルの内容（すべて任意） */
export type ProjectDetails = {
  /** 概要（長め）。背景・目的などを綴った説明文。空行で段落を分けられる。 */
  overview?: string;
  /** 工夫した点（箇条書き） */
  highlights?: string[];
  /** 苦労した点（箇条書き、任意） */
  challenges?: string[];
  /**
   * スクリーンショット（任意）。画像は public/ 配下に置き、その絶対パスを src に書く。
   * 例: public/works/receipt-1.png → { src: "/works/receipt-1.png", alt: "説明" }
   */
  screenshots?: { src: string; alt: string }[];
};

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
  /** クリックで開く詳細モーダルの内容（任意）。無ければカードはクリック不可のまま。 */
  details?: ProjectDetails;
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
    details: {
      overview:
        "「レシートを撮るだけで家計簿がつく」体験を目指して作った Web アプリです。" +
        "手入力の面倒さが家計簿が続かない一番の原因だと考え、撮影した画像から品目・金額・日付を自動で読み取って一覧化するところまでを自動化しました。\n\n" +
        "画像解析には Claude の Vision を利用し、フロントエンドは Next.js（App Router）+ TypeScript で構築しています。",
      highlights: [
        "レシート画像を Claude に渡し、品目・金額・日付を構造化された JSON として受け取る設計にして、後続の集計処理を簡単にした",
        "読み取り結果をそのまま登録するのではなく、ユーザーが確認・修正してから保存できる UI にして精度と使い勝手を両立",
        "型付きのデータ構造で家計簿項目を管理し、集計や表示を追加しやすくした",
      ],
      challenges: [
        "レシートによって書式やレイアウトがバラバラで、安定して読み取らせるためのプロンプト調整に試行錯誤した",
        "画像アップロードから解析結果表示までの待ち時間をどう見せるか（ローディング体験）に悩んだ",
      ],
    },
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
    details: {
      overview:
        "ブラウザだけで遊べる 5 種類のミニゲームを 1 つのポータルにまとめた作品です。" +
        "「小さくても遊びとして完成しているものを数多く作る」ことをテーマに、ジャンルの異なるゲームをそれぞれ実装しました。\n\n" +
        "収録タイトルはブロック崩し・Climb or Burn・弾幕シューティング・剣戟バトル・スターよけの 5 つ。" +
        "難易度設定やアイテム、2 人対戦など、ゲームごとに異なる遊び方を用意しています。",
      highlights: [
        "5 タイトルを共通のポータルから起動できる構成にし、それぞれ独立して遊べるようにした",
        "難易度・アイテム・2人対戦など、ゲームごとに手触りの違う仕組みを実装した",
        "追加ライブラリに頼らず、HTML / CSS / JavaScript の基礎だけでゲームループや当たり判定を組んだ",
      ],
      challenges: [
        "弾幕シューティングや剣戟バトルなど、当たり判定と処理落ちのバランス調整が難しかった",
        "ジャンルの違うゲームを同じポータルに統一感を持たせて並べる設計に工夫が必要だった",
      ],
    },
  },
];
