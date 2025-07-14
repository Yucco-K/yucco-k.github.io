# 🚀 Portfolio Website - Yucco-K

モダンな Web テクノロジーを活用して構築したポートフォリオサイトです。

## 📖 プロジェクト概要

このプロジェクトは、最新のフロントエンド技術を使用した高性能なポートフォリオサイトです。  
GitHub Pages でホスティングされ、GitHub Actions による自動デプロイを実装しています。

## 🎥 デモ

![サンプル動画](src/assets/sample-portfolio%20-v3.gif)

## 🛠️ 技術スタック

### 🎨 **フロントエンド**

- **React** `^19.1.0` - モダンな UI ライブラリ
- **TypeScript** `~5.8.3` - 型安全性を確保
- **Vite** `^7.0.4` - 高速な開発サーバー & ビルドツール
- **React Router Dom** `^7.6.3` - クライアントサイドルーティング

### 🎭 **UI & アニメーション**

- **Styled Components** `^6.1.19` - CSS-in-JS スタイリング
- **Framer Motion** `^12.23.3` - 滑らかなアニメーション
- **@react-three/fiber** `^9.2.0` - 3D グラフィックス (Three.js)
- **@react-three/drei** `^10.5.0` - Three.js ヘルパー

### 📝 **コンテンツ管理**

- **React Markdown** `^10.1.0` - マークダウン記法サポート

### 🔧 **開発ツール**

- **ESLint** `^9.30.1` - コード品質管理
- **Playwright** `^1.54.1` - E2E テスト
- **Cursor** - AI 支援コードエディタ
- **TaskMaster** - タスク管理ツール

### 🚀 **デプロイ & CI/CD**

- **GitHub Pages** - 無料ホスティング
- **GitHub Actions** - 自動デプロイパイプライン
- **gh-pages** `^6.3.0` - デプロイメント補助

## 🔄 CI/CD パイプライン

GitHub Actions を使用した自動化されたデプロイメントパイプラインを構築しています。

### 📋 自動化フロー

1. **コードプッシュ** - `main` ブランチへの変更を検出
2. **依存関係インストール** - `npm ci` で高速インストール
3. **ビルド** - `npm run build` で本番用にビルド
4. **テスト** - コード品質チェック
5. **デプロイ** - GitHub Pages へ自動公開

### ⚙️ ワークフロー設定

- **トリガー**: `main` ブランチへの push
- **Node.js**: v18.x
- **キャッシュ**: npm 依存関係の高速化
- **SPA サポート**: React Router の動的ルーティング対応

## 🌐 デプロイメント

**公開 URL**: https://yucco-k.github.io

### 🔧 SPA ルーティング対応

- `404.html` リダイレクト設定
- React Router の動的ルーティング完全サポート
- GitHub Pages での URL 直接アクセス対応

## 🏃‍♂️ 開発の開始方法

### 1. 環境セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/Yucco-K/yucco-k.github.io.git

# ディレクトリに移動
cd yucco-k.github.io

# 依存関係をインストール
npm install
```

### 2. 開発サーバー起動

```bash
# 開発サーバー起動（HMR 有効）
npm run dev

# ビルド（本番用）
npm run build

# プレビュー
npm run preview
```

### 3. コード品質チェック

```bash
# ESLint チェック
npm run lint

# E2E テスト
npx playwright test
```

## 📁 プロジェクト構造

```
yucco-k.github.io/
├── .github/workflows/     # GitHub Actions ワークフロー
├── public/               # 静的ファイル
├── src/                  # ソースコード
│   ├── components/       # React コンポーネント
│   ├── pages/           # ページコンポーネント
│   └── assets/          # 画像・リソース
├── dist/                # ビルド出力
└── package.json         # プロジェクト設定
```

## 🚀 技術的な特徴

### ⚡ **高速パフォーマンス**

- Vite による超高速開発サーバー
- HMR (Hot Module Replacement) 対応
- 最適化されたビルド出力

### 🎯 **型安全性**

- TypeScript による静的型チェック
- ESLint による厳格なコード品質管理

### 🌟 **モダン UI**

- Styled Components による効率的なスタイリング
- Framer Motion による滑らかなアニメーション
- Three.js による 3D グラフィックス

### 🔄 **自動化**

- GitHub Actions による CI/CD パイプライン
- コード変更時の自動デプロイメント
- 依存関係の自動管理

---

## 🎨 開発コンセプト

### Cursor × TaskMaster × Playwright × React × TypeScript × Vite × GitHub Pages

最新の開発ツールチェーンを活用し、効率的で保守性の高いコードベースを構築しています。

**🚀 継続的な改善とモダンな開発体験を追求したポートフォリオサイトです。**
