import styled from "styled-components";
import { theme } from "../styles/theme";
import { Badge, Card } from "../styles/commonStyles";
import type { CaseStudy } from "../data/caseStudies";

const StudyCard = styled(Card)`
	padding: 1.8rem;

	@media (max-width: 600px) {
		padding: 1.3rem;
	}
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	flex-wrap: wrap;
	margin-bottom: 0.4rem;
`;

const StudyTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 700;
	color: ${theme.colors.heading};
	line-height: 1.5;
`;

const Summary = styled.p`
	color: ${theme.colors.textMuted};
	font-size: 0.95rem;
	margin-bottom: 1.4rem;
`;

const TagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
	list-style: none;
	padding: 0;
	margin-bottom: 1.4rem;
`;

const Tag = styled.li`
	font-size: 0.78rem;
	font-weight: 600;
	color: ${theme.colors.accent};
	background: ${theme.colors.accentSoft};
	padding: 0.2rem 0.65rem;
	border-radius: 999px;
`;

const DetailList = styled.dl`
	display: grid;
	grid-template-columns: 8.5rem 1fr;
	row-gap: 0.9rem;
	column-gap: 1.2rem;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		row-gap: 0.3rem;

		dd {
			margin-bottom: 0.8rem;
		}
	}
`;

const DetailLabel = styled.dt`
	font-weight: 600;
	color: ${theme.colors.accent};
	font-size: 0.9rem;
	padding-top: 0.1rem;
`;

const DetailBody = styled.dd`
	font-size: 0.95rem;

	ul {
		padding-left: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
`;

const ExpandDetails = styled.details`
	margin-top: 1.4rem;

	summary {
		cursor: pointer;
		font-size: 0.92rem;
		font-weight: 600;
		color: ${theme.colors.link};
		user-select: none;
	}

	&[open] summary {
		margin-bottom: 1.2rem;
	}
`;

const DetailSection = styled.section`
	& + & {
		margin-top: 1.3rem;
	}

	h4 {
		font-size: 0.95rem;
		font-weight: 700;
		color: ${theme.colors.accent};
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.95rem;
	}

	p + p {
		margin-top: 0.6rem;
	}
`;

const Note = styled.p`
	margin-top: 1.3rem;
	padding: 0.7rem 1rem;
	background: ${theme.colors.surfaceMuted};
	border-radius: 6px;
	font-size: 0.88rem;
	color: ${theme.colors.textMuted};
`;

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
	return (
		<StudyCard>
			<TitleRow>
				<StudyTitle>{study.title}</StudyTitle>
				<Badge>完了実績</Badge>
			</TitleRow>
			<Summary>{study.summary}</Summary>
			{study.tags && (
				<TagList>
					{study.tags.map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</TagList>
			)}
			<DetailList>
				<DetailLabel>課題</DetailLabel>
				<DetailBody>{study.challenge}</DetailBody>
				{study.background && (
					<>
						<DetailLabel>背景</DetailLabel>
						<DetailBody>{study.background}</DetailBody>
					</>
				)}
				<DetailLabel>担当範囲</DetailLabel>
				<DetailBody>{study.role}</DetailBody>
				{study.approach && (
					<>
						<DetailLabel>技術的なアプローチ</DetailLabel>
						<DetailBody>
							<ul>
								{study.approach.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</DetailBody>
					</>
				)}
				<DetailLabel>結果</DetailLabel>
				<DetailBody>{study.outcome}</DetailBody>
				{study.learning && (
					<>
						<DetailLabel>学び</DetailLabel>
						<DetailBody>{study.learning}</DetailBody>
					</>
				)}
			</DetailList>
			{study.detailSections && (
				<ExpandDetails>
					<summary>詳細を見る（技術移行・実装内容・学び）</summary>
					{study.detailSections.map((section) => (
						<DetailSection key={section.heading}>
							<h4>{section.heading}</h4>
							{section.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</DetailSection>
					))}
				</ExpandDetails>
			)}
			{study.note && <Note>{study.note}</Note>}
		</StudyCard>
	);
}
