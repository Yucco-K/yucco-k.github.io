export type TechCategory = {
	category: string;
	items: { name: string; usage: string }[];
};

// 技術名の羅列ではなく、実務で何に使ったかを添えて掲載する
export const techStack: TechCategory[] = [
	{
		category: "Frontend",
		items: [
			{
				name: "Next.js（App Router）/ React / TypeScript",
				usage: "学習者向け画面・教材管理画面（CMS）の実装",
			},
			{ name: "Mantine UI", usage: "コンポーネント設計・フォームUIの構築" },
			{ name: "Zustand", usage: "クライアント側の状態管理" },
			{ name: "@dnd-kit", usage: "教材並び替えのドラッグ＆ドロップUI" },
		],
	},
	{
		category: "Backend",
		items: [
			{ name: "tRPC", usage: "型安全なAPI設計・実装" },
			{ name: "Fastify", usage: "サーバーフレームワーク" },
			{ name: "Zod", usage: "入力バリデーション" },
			{ name: "Firebase Auth", usage: "認証まわりの連携" },
		],
	},
	{
		category: "Database",
		items: [
			{ name: "PostgreSQL", usage: "メインデータベース" },
			{
				name: "Prisma",
				usage: "ORM・トランザクション処理によるデータ整合性の担保",
			},
			{ name: "Supabase", usage: "データベース基盤" },
		],
	},
	{
		category: "Infrastructure / CI/CD",
		items: [
			{ name: "Vercel", usage: "Preview / Staging / Production 環境の運用" },
			{ name: "GitHub Actions", usage: "CI/CD パイプライン" },
			{
				name: "AWS（AppRunner, S3, EC2, Route53, RDS）",
				usage: "インフラ構成の理解・運用",
			},
			{ name: "Docker", usage: "開発環境の構築" },
		],
	},
	{
		category: "Development Tools",
		items: [
			{
				name: "Cursor などのAIツール",
				usage: "品質とスピードを両立した開発",
			},
			{ name: "Postman", usage: "APIテスト" },
			{
				name: "Sentry / LogRocket / Google Analytics",
				usage: "監視・分析ツールの活用",
			},
		],
	},
];
