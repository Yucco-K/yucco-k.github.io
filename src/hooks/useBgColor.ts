import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useBgColor() {
	const { pathname } = useLocation();
	return useMemo(() => {
		if (pathname === "/internship") return "#fffaeb"; // 薄いオレンジ
		if (pathname === "/portfolio") return "#d0ffd6"; // 薄い黄緑
		return "#2b8dff"; // 濃いスカイブルー
	}, [pathname]);
}

