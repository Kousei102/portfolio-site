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
├── components/         # 表示専用コンポーネント（Header/Hero/Skills/Works/ProjectCard/Contact/Footer）
└── data/               # サイトの内容を型付きで管理するデータファイル
    ├── profile.ts      # 氏名・肩書き・自己紹介・メール・SNSリンク
    ├── skills.ts       # カテゴリ別スキル一覧（習熟度レベル付き）
    └── projects.ts     # 作品（Works）一覧
```

## 設計方針（重要）

- **内容とUIを分離**: サイトに載る具体的な内容（プロフィール・スキル・作品）はすべて `src/data/*.ts` に集約されている。文言や作品を更新するときは、原則コンポーネントではなく **データファイルを編集する**。各データファイル冒頭のコメントに書き方の説明がある。
- **コンポーネントはプレゼンテーション専用**: `src/components/` はデータを受け取って表示するだけ。`Header` のみ `"use client"`（モバイルメニューの開閉に `useState` を使用）。
- **テーマ**: 色は `globals.css` の CSS 変数（`--background` / `--foreground` / `--accent`）で管理。`prefers-color-scheme: dark` でダークモードに自動対応。差し色を変えたい場合は `--accent` を編集。
- **ページ構造**: `page.tsx` が `Header → Hero(#about) → Skills(#skills) → Works(#works) → Contact(#contact) → Footer` を並べる。ナビはページ内アンカーリンク。

## よく使うコマンド

```bash
npm run dev     # 開発サーバー起動
npm run build   # 本番ビルド
npm run lint    # ESLint
```

## 注意

- 現状、`profile.email` は仮のアドレス（`example@example.com`）で、Contact セクションにもその旨の注意書きがある。実運用時は差し替える。
- サイト自体が「制作中」の位置づけ（`profile.about` に明記）。
