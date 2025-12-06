import styled from "styled-components";

const FooterContainer = styled.footer`
	width: 100%;
	background: rgba(0, 0, 0, 0.15);
	color: #fff;
	padding: 2rem 1rem;
	text-align: center;
	margin-top: auto;
	box-sizing: border-box;
`;

const FooterContent = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	box-sizing: border-box;
`;

const FooterLinks = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	justify-content: center;
`;

const FooterLink = styled.a`
	color: #fff;
	text-decoration: none;
	font-weight: 500;
	transition: color 0.2s;
	&:hover {
		color: #ffd700;
	}
`;

const Copyright = styled.p`
	margin: 0;
	font-size: 0.9rem;
	opacity: 0.8;
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
				<Copyright>© 2025 Yucco-K. All rights reserved.</Copyright>
			</FooterContent>
		</FooterContainer>
	);
}

