# Portfolio Website - Yucco K

実務経験・技術スタック・課題解決のプロセスを伝えることを目的とした、採用担当者向けのポートフォリオサイトです。

**公開 URL**: https://yucco-k.github.io

## サイト構成

シングルページ構成のメインページに、以下のセクションを掲載しています。

- **Hero** - 名前・タイトル・自己紹介・各種リンク
- **Strengths** - 強み
- **Experience** - 実務経験の概要（プロダクト開発インターン / QA・テスト業務）
- **Selected Case Studies** - 代表的な開発実績のケーススタディ
- **Additional Contributions** - その他の改善・修正実績
- **Explorations & Challenges** - 開発・検証中の取り組み
- **Tech Stack** - 使用技術と用途

### ルーティング

| パス | 内容 |
| --- | --- |
| `/` | メインページ（上記セクションのシングルページ） |
| `/projects` | 個人開発プロジェクト一覧 |
| `/internship` | `/` へリダイレクト（旧URL） |
| `/portfolio` | `/projects` へリダイレクト（旧URL） |

## 技術スタック

- **React** `^19.1.0`
- **TypeScript** `~5.8.3`
- **Vite** `^7.0.4` - 開発サーバー & ビルドツール
- **React Router Dom** `^7.6.3` - クライアントサイドルーティング
- **Styled Components** `^6.1.19` - CSS-in-JS スタイリング
- **ESLint** `^9.30.1` - コード品質管理

## 設計方針

- **データとUIの分離** - 掲載コンテンツは `src/data/` 配下の型付きモジュール（プロフィール・ケーススタディ・実績・技術スタックなど）で管理し、コンポーネントはデータを描画することに専念
- **デザイントークン** - 色・幅・フォントなどを `src/styles/theme.ts` に集約し、一貫したスタイリングを実現
- **アクセシビリティ** - `prefers-reduced-motion` への対応、セマンティックなHTML（`details` / `summary` による折りたたみ表示など）

## プロジェクト構造

```
yucco-k.github.io/
├── .github/workflows/    # GitHub Actions ワークフロー（Pages デプロイ）
├── public/               # 静的ファイル（404.html など）
├── src/
│   ├── components/       # 共通コンポーネント（Layout / Section / CaseStudyCard など）
│   ├── data/             # 掲載コンテンツ（型付きデータモジュール）
│   ├── pages/            # ページコンポーネント（Home / Projects）
│   └── styles/           # デザイントークン・グローバルスタイル
└── package.json
```

## 開発の開始方法

```bash
# リポジトリをクローン
git clone https://github.com/Yucco-K/yucco-k.github.io.git
cd yucco-k.github.io

# 依存関係をインストール
npm install

# 開発サーバー起動（HMR 有効）
npm run dev

# ESLint チェック
npm run lint

# 本番用ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## デプロイ

- **GitHub Pages** でホスティング（GitHub Actions ビルド方式）
- `main` ブランチへの push をトリガーに、ビルドから公開まで自動実行
- **SPA ルーティング対応**: `404.html` によるリダイレクトで、React Router のルートへの直接アクセスをサポート
