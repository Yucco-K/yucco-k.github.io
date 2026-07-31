// デザイントークン: 白基調 + ネイビー / ブルーグレーのアクセント
export const theme = {
	colors: {
		bg: "#fafbfc",
		surface: "#ffffff",
		surfaceMuted: "#f1f4f7",
		text: "#2d3748",
		textMuted: "#64748b",
		heading: "#1e3a5f",
		accent: "#1e3a5f",
		accentSoft: "#e8eef4",
		link: "#2c5f8a",
		border: "#e2e8f0",
		badgeDone: "#e6f0e8",
		badgeDoneText: "#2f6b43",
		badgeWip: "#eef0f4",
		badgeWipText: "#556070",
	},
	maxWidth: "1040px",
	contentWidth: "760px",
	radius: "8px",
	font: {
		base: "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, system-ui, sans-serif",
	},
} as const;
