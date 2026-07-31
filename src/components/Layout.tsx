import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import {
	AppContainer,
	Header,
	HeaderInner,
	SiteName,
	Nav,
	NavLink,
	Main,
} from "../styles/commonStyles";
import Footer from "./Footer";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export default function Layout() {
	const { pathname } = useLocation();

	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header>
					<HeaderInner>
						<SiteName to="/">Yucco K</SiteName>
						<Nav>
							<NavLink to="/" $active={pathname === "/"}>
								Home
							</NavLink>
							<NavLink to="/projects" $active={pathname === "/projects"}>
								Personal Projects
							</NavLink>
						</Nav>
					</HeaderInner>
				</Header>
				<Main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						{/* 旧URLからのリダイレクト（外部共有済みリンクの切れ防止） */}
						<Route path="/internship" element={<Navigate to="/" replace />} />
						<Route
							path="/portfolio"
							element={<Navigate to="/projects" replace />}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</Main>
				<Footer />
			</AppContainer>
		</>
	);
}
