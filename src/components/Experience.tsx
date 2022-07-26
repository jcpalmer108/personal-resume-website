import { ExperienceProps } from "../types/Experience"
import { Wrapper } from "../styles/components/Experience"
import {
  Upper,
  Title,
  Description,
  Paragraph,
  Tile,
  Icon,
  Label,
  Lower,
  Job,
  Logo,
  Content,
  JobTitle,
  Info,
  DiagonalLine
} from "../styles/components/Experience"
import alaska from "../assets/images/alaska.svg";
import Section from "./Section"

export default function Experience({ content }: ExperienceProps) {
  return (
    <Section label={content?.label}>
      <Wrapper>
        <Upper>
          <Title>{content?.title}</Title>
          <Description>
            { content?.description && content?.description.map((paragraph) => <Paragraph>{paragraph}</Paragraph>)}
          </Description>
          <Tile>
            <Icon src="../assets/images/call-me.svg" />
            <Label>CALL ME</Label>
          </Tile>
          <Tile>
            <Icon src="../assets/images/email-me.svg" />
            <Label>EMAIL ME</Label>
          </Tile>
        </Upper>
        <Lower>
          {
            content?.subSection?.experience && content?.subSection?.experience.map((job) => (
              <Job>
                <Logo src={require("../assets/images/" + job.icon + ".svg")} alt={job.icon} />
                <Content>
                  <JobTitle>{job.title}</JobTitle>
                  <Info>{job.employer} / {job.timeline.start}-{job.timeline.end}</Info>
                </Content>
                <DiagonalLine src="../assets/images/diagonal-line.svg" alt="forward slash" />
                <Description>
                  {content.description && content?.description.map((paragraph) => <Paragraph>{paragraph}</Paragraph>)}
                </Description>
              </Job>
            ))
          }
        </Lower>
        <img src={alaska} alt="alaska" />
      </Wrapper>
    </Section>
  )
}