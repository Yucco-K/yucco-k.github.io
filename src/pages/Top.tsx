import BubbleScene from "../components/BubbleScene";
import YuccoCat from "../components/YuccoCat";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Top() {
	const location = useLocation();
	const [catKey, setCatKey] = useState(0);

	// Topページに来るたびにYuccoCatを再マウント
	useEffect(() => {
		setCatKey((prev) => prev + 1);
	}, [location.pathname]);

	return (
		<main
			style={{
				width: "100vw",
				padding: "6rem 0 4rem 0",
				textAlign: "center",
				position: "relative",
				zIndex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-start",
				flex: 1,
			}}
		>
			<BubbleScene />
			<YuccoCat key={catKey} />
			<div style={{ position: "relative", zIndex: 2 }}>
				<h1
					style={{
						fontSize: "2.5rem",
						marginBottom: "1.5rem",
						textShadow: "0 2px 16px #0008",
					}}
				>
					Welcome to my portfolio site!
				</h1>
			</div>
		</main>
	);
}

