export const profile = {
	name: "Yucco K",
	title: "Product-minded Full-stack Engineer",
	titleNote: "ユーザーの課題を理解し、プロダクトの改善まで考えて実装するエンジニア",
	intro: [
		"教育系SaaSを展開する企業での長期インターンで、UI/UX改善から新機能開発、API・DBを含む実装までフルスタックに携わっています。",
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
		period: "2024年12月 〜 現在",
		description: [
			"教育系SaaSを展開する企業で、長期インターンとしてプロダクト開発に参加しています。学習者向け画面・教材管理画面（CMS）の双方を対象に、UI/UX改善、新機能開発、バグ修正、API・DBを含む開発まで幅広く担当しています。",
			"Issue作成者やレビュー担当者と丁寧にやり取りしつつ、CursorなどのAIツールも活用して品質とスピードの両立を意識した開発を経験しています。最近は要件定義や設計から実装・テスト工程まで、一気通貫で担当することが増えています。",
		],
	},
	{
		label: "QA & Testing",
		heading: "受託開発案件でのQA・テスト設計",
		period: "短期フリーランス案件",
		description: [
			"短期フリーランス案件として、業務管理Webシステム2案件のQA・テスト設計に携わりました。仕様整理、テストケース作成、複数ロールの手動E2Eテスト、再テスト運用、不具合報告まで担当し、開発チームが品質課題を判断・修正しやすい運用を整備しました。",
		],
		details: {
			paragraphs: [
				"店舗運営事業者向け業務システムの案件では、仕様整理、テストケース作成、対応リスト、再テスト運用を整備し、TC-IDを起点に指摘・修正・再テスト結果を追跡できる状態を構築しました。前提条件・手順・期待結果を統一し、担当者が変わっても同じ手順で検証できる再現性を確保。端末やブラウザなどの実行環境、未実施理由、仕様確認が必要な論点も記録し、進捗とリスクを説明可能な形で管理しました。",
				"複数ロールを持つ発注管理Webシステムの案件では、発注者、承認者、購買担当、ベンダなどのロール別シナリオを用いて、作成から承認、発注、納品、差戻しまでのE2E手動テストを実施。入力バリデーション、状態管理、権限制御、UI、PDF帳票などの観点から不具合や改善点を整理し、必要に応じて原因仮説や要仕様確認事項を論点化して開発チームへ共有しました。",
			],
			groups: [
				{
					heading: "担当領域",
					items: [
						"テスト設計",
						"手動E2Eテスト",
						"再テスト運用",
						"不具合報告",
						"仕様確認の論点整理",
					],
				},
				{
					heading: "工夫したこと",
					items: [
						"TC-IDによる追跡",
						"前提条件・手順・期待結果の統一",
						"環境差分・未実施理由の記録",
						"ロール別シナリオの整理",
					],
				},
				{
					heading: "得られた経験",
					items: [
						"仕様と実装の差分発見",
						"開発チームとの連携",
						"品質リスクの優先度整理",
					],
				},
			],
		},
	},
];

export const notes = [
	"掲載内容は、守秘義務および契約上の制約に配慮し、プロジェクト名、顧客情報、固有名詞、内部仕様などを一般化しています。",
	"「教育系SaaS」「教材管理画面」「学習者向け画面」「業務管理Webシステム」などの一般化した表現を用いています。",
	"記載している実績は、私が担当・関与した業務の一部を抜粋したものです。",
];
