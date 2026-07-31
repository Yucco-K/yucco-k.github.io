import styled from "styled-components";
import { theme } from "../styles/theme";

const FooterContainer = styled.footer`
	margin-top: 4rem;
	border-top: 1px solid ${theme.colors.border};
	background: ${theme.colors.surface};
	padding: 2rem 1.5rem;
`;

const FooterContent = styled.div`
	max-width: ${theme.maxWidth};
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: flex-start;
`;

const FooterLinks = styled.div`
	display: flex;
	gap: 1.5rem;
	flex-wrap: wrap;
`;

const FooterLink = styled.a`
	color: ${theme.colors.link};
	text-decoration: none;
	font-weight: 500;
	font-size: 0.95rem;

	&:hover {
		text-decoration: underline;
	}
`;

const Copyright = styled.p`
	margin: 0;
	font-size: 0.85rem;
	color: ${theme.colors.textMuted};
`;

export default function Footer() {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterLinks>
					<FooterLink
						href="https://github.com/Yucco-K"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</FooterLink>
					<FooterLink
						href="https://zenn.dev/yucco"
						target="_blank"
						rel="noopener noreferrer"
					>
						Zenn
					</FooterLink>
				</FooterLinks>
				<Copyright>© 2026 Yucco K. All rights reserved.</Copyright>
			</FooterContent>
		</FooterContainer>
	);
}
