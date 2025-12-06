import React from "react";
import BubbleScene from "../components/BubbleScene";

export default function Internship() {
	// レスポンシブpadding（top right bottom left）
	const getResponsivePadding = React.useCallback(() => {
		if (window.innerWidth < 600) return "6rem 1rem 2rem 1rem";
		if (window.innerWidth < 900) return "6rem 4rem 2rem 4rem";
		if (window.innerWidth < 1200) return "6rem 8rem 2rem 8rem";
		return "6rem 12rem 2rem 12rem";
	}, []);
	const [padding, setPadding] = React.useState(getResponsivePadding());
	const [textColor, setTextColor] = React.useState("#fff");
	const [titleColor, setTitleColor] = React.useState("#6a4fb6");

	React.useEffect(() => {
		const handleResize = () => setPadding(getResponsivePadding());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [getResponsivePadding]);

	React.useEffect(() => {
		// 4秒後（バブルフェードアウト完了後）に文字色を変更
		const colorTimer = setTimeout(() => {
			setTextColor("#222");
			setTitleColor("#5a3fa6");
		}, 4000);

		return () => clearTimeout(colorTimer);
	}, []);

	return (
		<main
			style={{
				width: "100vw",
				padding,
				color: "#222",
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				boxSizing: "border-box",
				position: "relative",
				flex: 1,
			}}
		>
			<BubbleScene shouldFadeOut={true} />
			<div
				style={{
					position: "relative",
					zIndex: 2,
					width: "100%",
					color: textColor,
					transition: "color 1s ease-out",
				}}
			>
				<h1
					style={{
						color: titleColor,
						fontWeight: 800,
						fontSize: "2.2rem",
						marginBottom: "1.2rem",
						letterSpacing: "0.04em",
						transition: "color 1s ease-out",
					}}
				>
					Internship Portfolio
				</h1>
				<h2>🍀 About</h2>
				<p>
					<b>教育系IT企業での長期インターン（2024年12月〜現在）</b>
				</p>
				<p>
					2024年12月から、教育系SaaSを展開する企業で長期インターンとしてプロダクト開発に参加しています。
					UI/UXの改善、新機能の実装、バグ修正、運用効率の向上など、
					<b>プロダクトの改善に幅広く携わっています</b>。
				</p>
				<p>
					要件や設計をもとに、手を動かしながら実装を進め、
					<b>
						Issue作成者やレビュー担当者と丁寧にやり取りしつつ、品質とスピードの両立を意識した開発（Cursor
						EditorなどAIツールの活用）を経験
					</b>
					。現在もチーム開発の中で着実にスキルを積み上げています。
				</p>
				<h2>🚀 What I Worked On</h2>
				<h3>✅ UX改善・UI向上</h3>
				<div style={{ textAlign: "left", margin: "0 auto", maxWidth: 600 }}>
					<b>スケルトンUIの導入：</b>{" "}
					ローディング中のちらつきや無表示を防止するため、レッスン詳細ページにスケルトンを実装。
					<br />
					<br />
					<b>外部リンクの視認性アップ：</b>{" "}
					リンクと通常テキストが見分けづらい問題を改善。色付きの下線を追加してアクセシビリティも意識。
					<br />
					<br />
					<b>初期タグのハイライト：</b>{" "}
					クイズ一覧ページで、初期状態からタグが選択されているように見せる改善を実装。機能の発見性が向上。
					<br />
					<br />
					<b>完了ボタンとリダイレクト挙動の調整：</b>{" "}
					チュートリアル最終ページの「完了」ボタン文言と、クリック後のリダイレクト先を見直し、ユーザーの意図に沿ったナビゲーションに改善。
					<br />
					<br />
					<b>チュートリアル完了ボタンのメッセージ改善：</b>{" "}
					最終ページでのメッセージ表示や非公開ページへの遷移を修正。状況に応じた適切なトースト表示とページ遷移を実装。
					<br />
				</div>
				<h3>🛠 バグ修正・ロジック改善</h3>
				<div style={{ textAlign: "left", margin: "0 auto", maxWidth: 600 }}>
					<b>ユーザー名生成ロジックの見直し：</b>{" "}
					メールアドレスからのユーザー名自動生成に関する仕様を見直し、プライバシー面を改善。
					<br />
					<br />
					<b>スペース差異による誤判定を修正：</b>{" "}
					コード自動判定機能において、半角スペースのみの違いで「不正解」となる問題を解消。
					<br />
					<br />
					<b>編集ログの絞り込み：</b>{" "}
					編集履歴の表示で、対象のレコード以外も表示されていた問題に対応し、対象のレコードのみに絞って表示されるように改善。
					<br />
					<br />
					<b>モーダルの意図しない表示を防止：</b>{" "}
					URLパラメータにより不自然にモーダルが開いてしまうバグを修正。
					<br />
					<br />
					<b>非公開コンテンツの表示制御を強化：</b>{" "}
					非公開のチュートリアルやレッスンが表示されてしまうバグを修正。フロント側とバックエンド側のロジックを厳密に制御。
					<br />
					<br />
					<b>非公開チュートリアルへの遷移制御：</b>{" "}
					非CMSユーザーが「次へ」ボタンから非公開チュートリアルに遷移できてしまう問題を修正。公開状態チェックと適切なリダイレクト処理を実装。
					<br />
					<br />
					<b>学習進捗ページの非公開コンテンツフィルタリング：</b>{" "}
					個人の学習進捗ページで非公開のコース・レッスングループ・レッスンが表示される問題を修正。フロント・バックエンド双方でフィルタリング処理を追加し、進捗率の計算ズレも解消。
					<br />
					<br />
					<b>スキル図鑑のコース表示バグ修正：</b>{" "}
					複数組織所属ユーザーで、一部組織でデフォルト表示設定のコースが非表示になる問題を解決。組織設定補完処理を追加し、「レコードなし」と「値がundefined」を厳密に区別。
					<br />
					<br />
					<b>レッスン完了率・進捗表示の不具合修正：</b>{" "}
					開発環境や一部本番環境でのレッスン完了率・進捗表示の不具合（非公開チュートリアルが進捗率計算に含まれる問題）を修正。
					<br />
				</div>
				<h3>🔧 機能追加・改善</h3>
				<div style={{ textAlign: "left", margin: "0 auto", maxWidth: 600 }}>
					<b>ドラッグ＆ドロップで並び替え可能に：</b>{" "}
					@dnd-kitを活用し、チュートリアルやレッスンの順序変更を直感的にできるUIを新規開発。フロントエンドのUI実装に加え、バックエンドの並び順一括更新API（トランザクション・バリデーション対応）まで担当。ローカル開発用レッスンの運用効率を大幅に改善。
					<br />
					<br />
					<b>フォーム保存の安定化（SkillCodingフォーム）：</b>{" "}
					保存ボタンを2回押さないと反応しない不具合を解消。状態管理や実行チェック処理を見直し、UXを改善。また、フォームの責務を分割し、useCodeExecution、useSkillCodingForm、useSkillCodingValidationなどのカスタムフックへ処理を分離。保守性と再利用性を向上。
					<br />
					<br />
					<b>コースアクセステンプレート管理機能：</b>{" "}
					組織ごとのコース利用権限を効率的に管理できるテンプレート機能を実装。テンプレートのCRUD操作、組織への適用、適用履歴管理、コース変更時の自動同期機能を開発。
					<br />
					<br />
					<b>チュートリアルフィードバック機能：</b>{" "}
					学習者が教材の問題点を報告できるフィードバック機能を実装。tRPCによる型安全なAPI通信、React
					Hook Form + Zodによるバリデーション、upsert処理による重複防止を実現。
					<br />
					<br />
					<b>GitHubプロフィール連携機能：</b>{" "}
					学習者の課題進捗や学習成果をGitHubプロフィールに埋め込めるバッジ機能を実装。動的SVG生成（シンプルバッジ・詳細カード）、公開/非公開設定、表示項目のプライバシーカスタマイズ機能、ワンクリック埋め込みコード生成を開発。tRPCによる型安全なAPI設計、統計情報の並列取得によるパフォーマンス最適化、CORS対応を実現。
					<br />
					<div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.5rem" }}>
						※ プロダクト全体との整合性を考慮し、より最適な仕様を検討中
					</div>
					<br />
					<b>ロードマップ管理機能：</b>{" "}
					スクール側が特定のレッスンを選択してカスタムコースを作成できるロードマップ機能を実装。前任者の実装を引き継ぎ、新プロジェクトルール（Frourio
					→ tRPC、Chakra UI → Mantine UI
					移行）に準拠するよう全面改修。CRUD機能（作成・読取・更新・削除）、CMS管理画面（アコーディオン表示、コース単位一括選択、公開/非公開切り替え）、ログインユーザー向け公開ページ、ナビゲーショントラッキング（クエリパラメータ）を開発。Zodによるバリデーション、トランザクション処理（削除・更新時の整合性保証）、カスケード削除、slug自動生成（重複チェック）、tRPCキャッシュ最適化（30分）を実装。
					<br />
					<div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.5rem" }}>
						※ UI/UXの最終調整中（レッスンカード表示の統一、ナビゲーション動線の最適化）
					</div>
					<br />
				</div>
				<h2>🧑‍💻 Tech Stack</h2>
				<p style={{ fontSize: "0.95rem", color: "#444" }}>
					※ フルスタックで新機能の開発を中心に携わっています。
				</p>
				<h3>Frontend</h3>
				<div>
					Next.js 15（App Router）
					<br />
					React / TypeScript
					<br />
					Mantine UI（コンポーネント設計）
					<br />
					Zustand（状態管理）
					<br />
					@dnd-kit（ドラッグ＆ドロップ）
					<br />
					Firebase Auth（認証）
				</div>
				<h3>Backend</h3>
				<div>
					Supabase
					<br />
					tRPC（型安全なAPI構成）
					<br />
					Fastify（サーバーフレームワーク）
					<br />
					Prisma（ORM）
					<br />
					PostgreSQL 18
				</div>
				<h3>Infra / CI/CD</h3>
				<div>
					Vercel（Preview / Staging / Production）
					<br />
					GitHub Actions（CI/CD）
					<br />
					AWS（AppRunner, S3, EC2, Route53, RDS）
					<br />
					Docker（開発環境）
				</div>
				<h3>Others</h3>
				<div>
					SendGrid / Stripe
					<br />
					Google Analytics / Sentry / LogRocket
					<br />
					Postman（APIテスト）
				</div>
				<h2>📝 Notes</h2>
				<div style={{ fontSize: "0.95rem", color: "#444" }}>
					実際のプロダクト名や顧客情報などは守秘義務により記載しておりません。
					<br />
					上記は私が担当・関与した業務の一部を抜粋したものです。
				</div>
				<h2>📌 Final Words</h2>
				<p>
					自己学習やインターンを通じて、<b>プロダクトの改善</b>や
					<b>ユーザー体験の向上</b>に取り組んでいます。 また、
					<b>日々の学びや気づきをZennにまとめて発信</b>しています。
					限られた時間の中でも、「動くだけでなく、
					<b>選ばれるプロダクト</b>
					」を支える開発者として、日々の実践の中でスキルを磨いています。
				</p>
			</div>
		</main>
	);
}

