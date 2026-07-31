import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./theme";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	background: rgba(255, 255, 255, 0.92);
	backdrop-filter: blur(8px);
	border-bottom: 1px solid ${theme.colors.border};
`;

export const HeaderInner = styled.div`
	max-width: ${theme.maxWidth};
	margin: 0 auto;
	padding: 0.9rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`;

export const SiteName = styled(Link)`
	font-weight: 700;
	font-size: 1.05rem;
	color: ${theme.colors.heading};
	text-decoration: none;
	letter-spacing: 0.02em;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 0.4rem;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
	color: ${({ $active }) =>
		$active ? theme.colors.heading : theme.colors.textMuted};
	font-weight: ${({ $active }) => ($active ? 600 : 500)};
	text-decoration: none;
	font-size: 0.95rem;
	padding: 0.35em 0.9em;
	border-radius: 6px;
	background: ${({ $active }) =>
		$active ? theme.colors.accentSoft : "transparent"};
	transition: background 0.2s, color 0.2s;

	&:hover {
		background: ${theme.colors.surfaceMuted};
		color: ${theme.colors.heading};
	}
`;

export const Main = styled.main`
	flex: 1;
	width: 100%;
	padding-top: 4rem;
`;

export const Badge = styled.span<{ $variant?: "done" | "wip" }>`
	display: inline-block;
	font-size: 0.78rem;
	font-weight: 600;
	line-height: 1;
	padding: 0.35em 0.8em;
	border-radius: 999px;
	background: ${({ $variant }) =>
		$variant === "wip" ? theme.colors.badgeWip : theme.colors.badgeDone};
	color: ${({ $variant }) =>
		$variant === "wip" ? theme.colors.badgeWipText : theme.colors.badgeDoneText};
	white-space: nowrap;
`;

export const Card = styled.div`
	background: ${theme.colors.surface};
	border: 1px solid ${theme.colors.border};
	border-radius: ${theme.radius};
	padding: 1.5rem;
`;
