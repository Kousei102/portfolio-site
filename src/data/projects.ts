// ===================================================================
// 作品（プロジェクト）情報
// projects 配列に作品を追加していくだけで Works セクションに反映されます。
//
// details を書くと、その作品のカードがクリック可能になり、
// クリックでスクリーンショットや動作中の動画、詳しい文章を大きく表示する詳細モーダルが開きます。
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
  /**
   * 動作中の動画（任意）。動画は public/works/ 配下に置き、その絶対パスを src に書く。
   * 音なしで自動再生・ループする。poster は再生前/読み込み前に表示する静止画（任意）。
   * 例: public/works/receipt-demo.mp4 → { src: "/works/receipt-demo.mp4", poster: "/works/receipt-1.png" }
   */
  video?: { src: string; poster?: string };
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
    title: "レシート家計簿AI（Nokori）",
    description:
      "レシートや決済アプリ・カード明細の画像をアップロードすると、AI が品目・金額・日付を自動で読み取って家計簿にするアプリ。" +
      "収入・貯蓄目標・定期収支まで管理し、「あと使える額」がひと目でわかるよう設計しています。",
    tech: ["Next.js", "TypeScript", "Claude API", "Claude Code"],
    repoUrl: "https://github.com/Kousei102/receipt-budget-ai",
    demoUrl: "https://receipt-budget-ai.vercel.app/",
    role: "個人開発",
    details: {
      video: {
        src: "/works/紹介動画_Nokori.mp4",
      },
      overview:
        "「レシートを撮るだけで家計簿がつく」体験から始め、"+
        "“今月あといくら使えるか” までわかる家計管理アプリ「Nokori」へと発展させた Web アプリです。" +
        "手入力の面倒さが家計簿が続かない一番の原因だと考え、撮影した画像から品目・金額・日付を自動で読み取って一覧化するところまでを自動化しました。\n\n" +
        "レシートだけでなく PayPay などの決済アプリのスクリーンショットやクレジットカードの明細画像にも対応。" +
        "さらに収入・貯蓄目標・定期収入（給与）・定期支出（家賃やサブスク）を登録すると、" +
        "「収入 − 貯蓄目標 − 支出」で算出した“あと使える額”が自動で更新されます。\n\n" +
        "画像解析には Claude の Vision を利用し、フロントエンドは Next.js（App Router）+ TypeScript で構築しています。",
      highlights: [
        "レシートに限らず決済アプリのスクショやカード明細も読み取れるようにし、キャッシュレス中心の支出にも対応",
        "読み取り結果をそのまま登録するのではなく、ユーザーが確認・修正してから保存できる UI にして精度と使い勝手を両立。信頼度が低い項目には「要確認」バッジを表示",
        "収入・貯蓄目標・定期収支を管理し、“あと使える額”をリアルタイムに算出する家計管理機能を実装",
        "カテゴリの追加・削除、月単位のフィルタ、CSV エクスポートに対応し、記録の振り返り・活用をしやすくした",
        "同じ内容を複数回アップロードしても重複登録されないように、日付・金額・品目の組み合わせで重複チェックする仕組みを実装",
      ],
      challenges: [
      ],
    },
  },
  {
    title: "ミニゲーム集",
    description:
      "ブラウザで遊べる5種類のミニゲームを集めたゲームポータル。" +
      "難易度設定やアイテム、2人対戦などゲームごとに異なる遊び方を実装しています。",
    tech: ["HTML", "CSS", "JavaScript", "Claude Code"],
    repoUrl: "https://github.com/Kousei102/claude-code-book-template",
    demoUrl: "https://minigames-k.onrender.com/",
    role: "個人開発",
    details: {
      video: {
        src: "/works/PF用動画_ミニゲーム集.mp4",
      },
      overview:
        "ブラウザだけで遊べる 5 種類のミニゲームを 1 つのポータルにまとめた作品です。" +
        "「小さくても遊びとして完成しているものを数多く作る」ことをテーマに、ジャンルの異なるゲームをそれぞれ実装しました。\n\n" +
        "収録タイトルはブロック崩し・Climb or Burn・弾幕シューティング・剣戟バトル・スターよけの 5 つ。",
      highlights: [
        "5 タイトルを共通のポータルから起動できる構成にし、それぞれ独立して遊べるようにした",
        "耐久・シューティング・2人対戦など、ゲームごとに違うゲーム性で実装した",
        "HTML / CSS / JavaScript の基礎だけでゲームループや当たり判定を組んだ",
      ],
      challenges: [
      ],
    },
  },
];
