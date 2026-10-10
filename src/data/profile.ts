export const profile = {
	name: "Yucco K",
	title: "Product-minded Full-stack Engineer",
	titleNote: "ユーザーの課題を理解し、プロダクトの改善まで考えて実装する開発者",
	intro: [
		"2024年12月から2026年10月まで、教育系SaaSを展開する企業の開発チームに長期インターンとして参加し、UI/UX改善や新機能開発、API・DBを含む実装に携わりました。",
		"「動くだけでなく、選ばれるプロダクト」を支える開発者を目指し、日々の学びや気づきはZennで発信しています。",
	],
	links: [
		{ label: "GitHub", href: "https://github.com/Yucco-K", external: true },
		{ label: "Zenn", href: "https://zenn.dev/yucco", external: true },
		{ label: "Experience", href: "#experience", external: false },
	],
};

export const strengths = [
	{
		title: "Product Development",
		description:
			"ユーザー体験と運用効率の両面から課題を捉え、UIの細かな改善から機能の設計・実装まで、プロダクト視点で開発に取り組みます。",
	},
	{
		title: "Full-stack Development",
		description:
			"フロントエンドの実装からAPI設計・DB操作まで一貫して担当。tRPCとZodを用いた型安全なAPI、Prismaによるトランザクション処理などを実務で扱っています。",
	},
	{
		title: "Quality & Maintainability",
		description:
			"バリデーションやトランザクションによるデータ整合性の担保、カスタムフックへの責務分割など、保守しやすいコードを意識して実装しています。",
	},
];

export type Experience = {
	label: string;
	heading: string;
	period: string;
	description: string[];
	// カードには要約のみ表示し、詳細は折りたたみで展開する
	details?: {
		paragraphs: string[];
		groups: { heading: string; items: string[] }[];
	};
};

// 主軸はインターンでのプロダクト開発経験。QA経験は補完的な位置づけで掲載する。
export const experiences: Experience[] = [
	{
		label: "Product Development",
		heading: "教育系SaaS企業での長期インターン",
		period: "2024年12月 〜 2026年10月（2026年1〜3月は活動休止）",
		description: [
			"教育系SaaSを展開する企業で、長期インターンとしてプロダクト開発に参加しました。学習者向け画面・教材管理画面（CMS）の双方を対象に、UI/UX改善、新機能開発、バグ修正、API・DBを含む開発を担当しました。",
			"Issue作成者やレビュー担当者とやり取りしつつ、Claude CodeなどのAIツールも活用して品質とスピードの両立を意識した開発を経験しました。要件の確認や設計から実装・テストまで、一連の工程を担当する機会もありました。",
		],
	},
	{
		label: "QA & Testing",
		heading: "受託開発案件でのテスト業務",
		period: "2025年12月〜2026年1月（短期参画）",
		description: [
			"同じ企業の受託開発部門で、Webシステム2案件のテスト業務に短期間参加しました。主にテストケースの作成、画面や機能の動作確認、不具合の報告、修正後の再テストを担当しました。",
		],
	}];

export const notes = [
	"掲載内容は、守秘義務および契約上の制約に配慮し、プロジェクト名、顧客情報、固有名詞、内部仕様などを一般化しています。",
	"「教育系SaaS」「教材管理画面」「学習者向け画面」「業務管理Webシステム」などの一般化した表現を用いています。",
	"記載している実績は、私が担当・関与した業務の一部を抜粋したものです。",
];
