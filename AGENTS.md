<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# プロジェクト概要

木口 恒生（Kousei Kiguchi）の個人ポートフォリオサイト。自己紹介・スキル・作品（Works）・連絡先を 1 ページにまとめた静的な LP で、Vercel での公開を想定しています。

## 技術スタック

- **Next.js 16**（App Router）+ **React 19** / **TypeScript**
- **Tailwind CSS v4**（`@tailwindcss/postcss` 経由、`globals.css` で `@import "tailwindcss"`）
- フォント: `next/font/google` の Inter + Noto Sans JP
- Lint: ESLint 9（`eslint-config-next`）
- 開発環境: devcontainer（`.devcontainer/`）

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト。メタデータ・フォント・<html lang="ja">
│   ├── page.tsx        # トップページ。各セクションを縦に並べるだけ
│   └── globals.css     # Tailwind 読込み + CSSカスタムプロパティ（テーマ）
├── components/         # 表示専用コンポーネント
│   ├── Header.tsx            # ナビ。"use client"（モバイルメニュー開閉）
│   ├── Hero.tsx              # #about セクション
│   ├── Skills.tsx            # #skills セクション
│   ├── Works.tsx            # #works セクション。projects を WorksGrid に渡すだけ
│   ├── WorksGrid.tsx        # "use client"。選択中の作品を state で保持し、モーダルを制御
│   ├── ProjectCard.tsx      # 1 作品分のカード。details があれば onOpen でクリック可能に
│   ├── ProjectDetailModal.tsx # "use client"。details の内容（説明・画像・動画）を大きく表示
│   ├── Links.tsx            # #links セクション。socials リンクのみ表示
│   └── Footer.tsx
└── data/               # サイトの内容を型付きで管理するデータファイル
    ├── profile.ts      # 氏名・肩書き・自己紹介・SNSリンク（socials）
    ├── skills.ts       # カテゴリ別スキル一覧（習熟度レベル付き）
    └── projects.ts     # 作品（Works）一覧。details 付きの作品はクリックでモーダル表示
```

## 設計方針（重要）

- **内容とUIを分離**: サイトに載る具体的な内容（プロフィール・スキル・作品）はすべて `src/data/*.ts` に集約されている。文言や作品を更新するときは、原則コンポーネントではなく **データファイルを編集する**。各データファイル冒頭のコメントに書き方の説明がある。
- **コンポーネントはプレゼンテーション専用**: `src/components/` はデータを受け取って表示するだけ。`"use client"` は `Header`（モバイルメニュー開閉）、`WorksGrid`（選択中の作品を `useState` で保持）、`ProjectDetailModal`（`useEffect` でキー操作・スクロール制御）の 3 つのみ。
- **作品モーダル**: `Works` → `WorksGrid`（client）→ `ProjectCard` + `ProjectDetailModal` の構成。`projects.ts` で作品に `details`（overview / highlights / challenges / screenshots / video）を書くとカードがクリック可能になり、詳細モーダルが開く。`details` が無い作品はクリック不可のまま。
- **テーマ**: 色は `globals.css` の CSS 変数（`--background` / `--foreground` / `--accent`）で管理。`prefers-color-scheme: dark` でダークモードに自動対応。差し色を変えたい場合は `--accent` を編集。
- **ページ構造**: `page.tsx` が `Header → Hero(#about) → Skills(#skills) → Works(#works) → Links(#links) → Footer` を並べる。ナビはページ内アンカーリンク。

## よく使うコマンド

```bash
npm run dev     # 開発サーバー起動
npm run build   # 本番ビルド
npm run lint    # ESLint
```

## 注意

- **メールアドレスは廃止済み**: `profile` に `email` フィールドは無く、旧 Contact セクションは実態（socials リンクのみ、現状 GitHub だけ）に合わせて **Links** に改称済み。問い合わせフォームは未実装（`Links.tsx` に将来対応の TODO あり。フォーム追加時は Contact への改称を検討）。
- 作品モーダルで使う画像・動画は `public/works/` 配下に置き、`projects.ts` の `details.screenshots` / `details.video` に絶対パス（例: `/works/xxx.png`）で指定する。
- サイト自体が「制作中」の位置づけ（`profile.about` に明記）。
