import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	gap: 2rem;
	padding: 1.5rem 0 1rem 0;
	background: rgba(0, 0, 0, 0.08);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 10;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
	color: ${({ $active, to }) =>
		$active && to === "/internship" ? "#ffc300" : $active ? "#ffd700" : "#fff"};
	font-weight: 600;
	text-decoration: none;
	font-size: 1.2rem;
	padding: 0.3em 1em;
	border-radius: 1em;
	background: ${({ $active }) => ($active ? "rgba(255,255,255,0.12)" : "none")};
	transition: background 0.2s, color 0.2s;
	&:hover {
		background: rgba(255, 255, 255, 0.18);
		color: #ffd700;
	}
`;

export const PortfolioGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
	box-sizing: border-box;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const PortfolioCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 1rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
	color: #222;
	text-align: left;
	transition: transform 0.2s, box-shadow 0.2s;
	min-height: 200px;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
	}
`;
