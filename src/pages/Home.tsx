import styled from "styled-components";
import { theme } from "../styles/theme";
import { Badge, Card } from "../styles/commonStyles";
import Section from "../components/Section";
import CaseStudyCard from "../components/CaseStudyCard";
import { profile, strengths, experiences, notes } from "../data/profile";
import { caseStudies } from "../data/caseStudies";
import { contributions } from "../data/contributions";
import { explorations } from "../data/explorations";
import { techStack } from "../data/techStack";

const Hero = styled.section`
	max-width: ${theme.maxWidth};
	margin: 0 auto;
	padding: 5rem 1.5rem 1rem;

	@media (max-width: 600px) {
		padding: 3.5rem 1.25rem 0.5rem;
	}
`;

const HeroName = styled.h1`
	font-size: 2.6rem;
	font-weight: 800;
	color: ${theme.colors.heading};
	letter-spacing: 0.02em;
	line-height: 1.3;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;

const HeroTitle = styled.p`
	font-size: 1.15rem;
	font-weight: 600;
	color: ${theme.colors.link};
	margin: 0.4rem 0 0.3rem;
`;

const HeroTitleNote = styled.p`
	font-size: 0.95rem;
	color: ${theme.colors.textMuted};
	margin-bottom: 1.4rem;
`;

const HeroIntro = styled.p`
	max-width: ${theme.contentWidth};
	margin-bottom: 0.6rem;
`;

const HeroLinks = styled.div`
	display: flex;
	gap: 0.8rem;
	flex-wrap: wrap;
	margin-top: 1.6rem;
`;

const HeroLink = styled.a`
	display: inline-block;
	padding: 0.5em 1.3em;
	border: 1px solid ${theme.colors.accent};
	border-radius: 6px;
	color: ${theme.colors.accent};
	font-weight: 600;
	font-size: 0.95rem;
	text-decoration: none;
	transition: background 0.2s, color 0.2s;

	&:hover {
		background: ${theme.colors.accent};
		color: #fff;
	}
`;

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.2rem;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const CardTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${theme.colors.heading};
	margin-bottom: 0.6rem;
`;

const CardText = styled.p`
	font-size: 0.93rem;
	color: ${theme.colors.text};
`;

const ExperienceList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const ExperienceLabel = styled.p`
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: ${theme.colors.link};
	margin-bottom: 0.4rem;
`;

const ExperiencePeriod = styled.p`
	font-size: 0.9rem;
	font-weight: 600;
	color: ${theme.colors.textMuted};
	margin-bottom: 1rem;
`;

const ExperienceDetails = styled.details`
	margin-top: 1rem;

	summary {
		cursor: pointer;
		font-size: 0.92rem;
		font-weight: 600;
		color: ${theme.colors.link};
		user-select: none;
	}

	&[open] summary {
		margin-bottom: 1rem;
	}
`;

const DetailGroups = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	margin-top: 1.2rem;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const DetailGroup = styled.div`
	background: ${theme.colors.surfaceMuted};
	border-radius: 6px;
	padding: 0.9rem 1.1rem;

	h4 {
		font-size: 0.88rem;
		font-weight: 700;
		color: ${theme.colors.heading};
		margin-bottom: 0.5rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	li {
		font-size: 0.88rem;
		padding-left: 0.9rem;
		border-left: 2px solid ${theme.colors.accentSoft};
	}
`;

const Paragraphs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	max-width: ${theme.contentWidth};
`;

const StudyList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const ContributionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const ContributionItem = styled(Card)`
	padding: 1.1rem 1.3rem;
`;

const ContributionBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

const ExplorationList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ExplorationTitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	flex-wrap: wrap;
	margin-bottom: 0.5rem;
`;

const TechCategoryBlock = styled.div`
	margin-bottom: 1.8rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

const TechCategoryName = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${theme.colors.heading};
	margin-bottom: 0.7rem;
`;

const TechList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	max-width: ${theme.contentWidth};
`;

const TechItem = styled.li`
	font-size: 0.95rem;
	padding-left: 1rem;
	border-left: 3px solid ${theme.colors.accentSoft};

	strong {
		color: ${theme.colors.heading};
		font-weight: 600;
	}

	span {
		color: ${theme.colors.textMuted};
	}
`;

const NotesList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-width: ${theme.contentWidth};
	font-size: 0.92rem;
	color: ${theme.colors.textMuted};

	li {
		padding-left: 1rem;
		border-left: 3px solid ${theme.colors.border};
	}
`;

export default function Home() {
	return (
		<>
			<Hero>
				<HeroName>{profile.name}</HeroName>
				<HeroTitle>{profile.title}</HeroTitle>
				<HeroTitleNote>{profile.titleNote}</HeroTitleNote>
				{profile.intro.map((paragraph) => (
					<HeroIntro key={paragraph}>{paragraph}</HeroIntro>
				))}
				<HeroLinks>
					{profile.links.map((link) =>
						link.external ? (
							<HeroLink
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
							</HeroLink>
						) : (
							<HeroLink key={link.label} href={link.href}>
								{link.label}
							</HeroLink>
						)
					)}
				</HeroLinks>
			</Hero>

			<Section id="strengths" title="Strengths">
				<CardGrid>
					{strengths.map((strength) => (
						<Card key={strength.title}>
							<CardTitle>{strength.title}</CardTitle>
							<CardText>{strength.description}</CardText>
						</Card>
					))}
				</CardGrid>
			</Section>

			<Section id="experience" title="Experience Overview">
				<ExperienceList>
					{experiences.map((experience) => (
						<Card key={experience.heading}>
							<ExperienceLabel>{experience.label}</ExperienceLabel>
							<CardTitle>{experience.heading}</CardTitle>
							<ExperiencePeriod>{experience.period}</ExperiencePeriod>
							<Paragraphs>
								{experience.description.map((paragraph) => (
									<CardText key={paragraph}>{paragraph}</CardText>
								))}
							</Paragraphs>
							{experience.details && (
								<ExperienceDetails>
									<summary>詳細を見る</summary>
									<Paragraphs>
										{experience.details.paragraphs.map((paragraph) => (
											<CardText key={paragraph}>{paragraph}</CardText>
										))}
									</Paragraphs>
									<DetailGroups>
										{experience.details.groups.map((group) => (
											<DetailGroup key={group.heading}>
												<h4>{group.heading}</h4>
												<ul>
													{group.items.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</DetailGroup>
										))}
									</DetailGroups>
								</ExperienceDetails>
							)}
						</Card>
					))}
				</ExperienceList>
			</Section>

			<Section
				id="case-studies"
				title="Selected Case Studies"
				lead="実務で担当した開発の中から、課題設定から実装・結果までを主要な6件で紹介します。"
			>
				<StudyList>
					{caseStudies.map((study) => (
						<CaseStudyCard key={study.id} study={study} />
					))}
				</StudyList>
			</Section>

			<Section
				id="contributions"
				title="Additional Contributions"
				lead="上記のほかに担当した、UI/UX改善・バグ修正・小規模な機能改善です。"
			>
				<ContributionGrid>
					{contributions.map((contribution) => (
						<ContributionItem key={contribution.title}>
							<CardTitle>{contribution.title}</CardTitle>
							<ContributionBody>
								{contribution.description.map((paragraph) => (
									<CardText key={paragraph}>{paragraph}</CardText>
								))}
							</ContributionBody>
						</ContributionItem>
					))}
				</ContributionGrid>
			</Section>

			<Section
				id="explorations"
				title="Explorations & Challenges"
				lead="完了実績とは別に、設計・実装に取り組んだ開発中・検討中のテーマです。"
			>
				<ExplorationList>
					{explorations.map((exploration) => (
						<Card key={exploration.title}>
							<ExplorationTitleRow>
								<CardTitle style={{ marginBottom: 0 }}>
									{exploration.title}
								</CardTitle>
								<Badge $variant="wip">{exploration.status}</Badge>
							</ExplorationTitleRow>
							<CardText>{exploration.description}</CardText>
						</Card>
					))}
				</ExplorationList>
			</Section>

			<Section
				id="tech-stack"
				title="Tech Stack"
				lead="実務のプロダクト開発で使用している技術と、その用途です。"
			>
				{techStack.map((category) => (
					<TechCategoryBlock key={category.category}>
						<TechCategoryName>{category.category}</TechCategoryName>
						<TechList>
							{category.items.map((item) => (
								<TechItem key={item.name}>
									<strong>{item.name}</strong>
									<span> — {item.usage}</span>
								</TechItem>
							))}
						</TechList>
					</TechCategoryBlock>
				))}
			</Section>

			<Section id="notes" title="Notes">
				<NotesList>
					{notes.map((note) => (
						<li key={note}>{note}</li>
					))}
				</NotesList>
			</Section>
		</>
	);
}
