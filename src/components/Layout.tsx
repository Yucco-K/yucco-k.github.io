import { Routes, Route, useLocation } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { AppContainer, Nav, NavLink } from "../styles/commonStyles";
import { useBgColor } from "../hooks/useBgColor";
import Footer from "./Footer";
import Top from "../pages/Top";
import Internship from "../pages/Internship";
import Portfolio from "../pages/Portfolio";

export default function Layout() {
	const bg = useBgColor();
	const { pathname } = useLocation();

	return (
		<>
			<GlobalStyle bg={bg} />
			<AppContainer>
				<Nav>
					<NavLink to="/" $active={pathname === "/"}>
						Top
					</NavLink>
					<NavLink to="/internship" $active={pathname === "/internship"}>
						Internship
					</NavLink>
					<NavLink to="/portfolio" $active={pathname === "/portfolio"}>
						Portfolio
					</NavLink>
				</Nav>
				<Routes>
					<Route path="/" element={<Top />} />
					<Route path="/internship" element={<Internship />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
				<Footer />
			</AppContainer>
		</>
	);
}

