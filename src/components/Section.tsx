import type { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const SectionWrapper = styled.section`
	max-width: ${theme.maxWidth};
	margin: 0 auto;
	padding: 3.5rem 1.5rem 0;

	@media (max-width: 600px) {
		padding: 2.5rem 1.25rem 0;
	}
`;

const SectionTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: 700;
	color: ${theme.colors.heading};
	letter-spacing: 0.02em;
	padding-bottom: 0.6rem;
	border-bottom: 2px solid ${theme.colors.accentSoft};
	margin-bottom: 1.8rem;

	@media (max-width: 600px) {
		font-size: 1.35rem;
	}
`;

const SectionLead = styled.p`
	color: ${theme.colors.textMuted};
	margin: -1rem 0 1.8rem;
	font-size: 0.95rem;
`;

type SectionProps = {
	id: string;
	title: string;
	lead?: string;
	children: ReactNode;
};

export default function Section({ id, title, lead, children }: SectionProps) {
	return (
		<SectionWrapper id={id}>
			<SectionTitle>{title}</SectionTitle>
			{lead && <SectionLead>{lead}</SectionLead>}
			{children}
		</SectionWrapper>
	);
}
