# ポートフォリオサイト

新米エンジニアの自己紹介・スキル・作品をまとめた個人ポートフォリオサイトです。
Next.js（App Router）と TypeScript で構築しています。

## 使用技術

- **Next.js 16**（App Router）
- **TypeScript**
- **Tailwind CSS v4**
- **Vercel**（ホスティング想定）

サイト内容は型付きのデータファイル（`src/data/`）で管理しており、
コンポーネントを触らずに文章・スキル・作品を更新できる構成にしています。

## セットアップ

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:3000）
```

その他のコマンド:

```bash
npm run build    # 本番ビルド
npm run start    # ビルド結果をローカルで起動
npm run lint     # ESLint チェック
```

## 内容の編集方法

自分の情報に書き換えるには、主に以下の3ファイルを編集します。

| ファイル | 編集する内容 |
| --- | --- |
| `src/data/profile.ts` | 氏名・肩書き・自己紹介・メール・SNS リンク |
| `src/data/skills.ts` | スキル（カテゴリ別のタグ） |
| `src/data/projects.ts` | 作品（配列に追加するだけで Works に反映） |

見た目のアクセントカラーは `src/app/globals.css` の `--accent` を変更すると
サイト全体に反映されます（ライト／ダークで別々に指定可能）。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx     # 共通レイアウト・フォント・メタ情報
│   ├── page.tsx       # トップページ（各セクションを組み立て）
│   └── globals.css    # グローバルスタイル・テーマ変数
├── components/        # 各セクションのコンポーネント
│   ├── Header.tsx     # 固定ナビ（モバイルメニュー対応）
│   ├── Hero.tsx       # トップ／自己紹介
│   ├── Skills.tsx
│   ├── Works.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/              # サイトのコンテンツ（ここを編集）
    ├── profile.ts
    ├── skills.ts
    └── projects.ts
```

## デプロイ（Vercel）

1. このリポジトリを GitHub に push する
2. [Vercel](https://vercel.com/new) でリポジトリを Import する
3. 設定はデフォルトのまま Deploy（Next.js は自動検出されます）

以降は GitHub に push するたびに自動でデプロイされます。
