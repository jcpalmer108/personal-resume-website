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
import callMe from "../assets/images/call-me.svg"
import emailMe from "../assets/images/email-me.svg"
import diagonal from "../assets/images/diagonal-line.svg"
import Section from "./Section"

export default function Experience({ content }: ExperienceProps) {
  return (
    <Section label={content?.label}>
      <Wrapper>
        <Upper>
          <Title>{content?.title}</Title>
          <Description>
            { content?.description && content?.description.map((paragraph, index) => <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>)}
          </Description>
          <Tile>
            <Icon src={callMe} alt="call me" />
            <Label>CALL ME</Label>
          </Tile>
          <Tile>
            <Icon src={emailMe} alt="email me"/>
            <Label>EMAIL ME</Label>
          </Tile>
        </Upper>
        <Lower>
          {
            content?.subSection?.experience && content?.subSection?.experience.map((job, index) => (
              <Job key={`Job ${index + 1}`}>
                <Logo src={require("../assets/images/" + job.icon + ".svg")} alt={job.icon} />
                <Content>
                  <JobTitle>{job.title}</JobTitle>
                  <Info>{job.employer} / {job.timeline.start}-{job.timeline.end}</Info>
                </Content>
                <DiagonalLine src={diagonal} alt="forward slash" />
                <Description>
                  {content.description && content?.description.map((paragraph, index) => <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>)}
                </Description>
              </Job>
            ))
          }
        </Lower>
      </Wrapper>
    </Section>
  )
}