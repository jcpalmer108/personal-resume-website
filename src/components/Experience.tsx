import { ExperienceProps } from "../types/Experience"
import { Wrapper } from "../styles/components/Experience"
import {
  Upper,
  Title,
  PageDescription,
  PageParagraph,
  Tile,
  Icon,
  Label,
  Lower,
  Job,
  Logo,
  Content,
  JobTitle,
  Info,
  DiagonalLine,
  JobDescription,
  JobParagraph
} from "../styles/components/Experience"
import callMe from "../assets/images/call-me.svg"
import emailMe from "../assets/images/email-me.svg"
import diagonal from "../assets/images/diagonal-line.svg"
import Section from "./Section"

// TODO: remove contact info to content.json
// email, phone

// adjust page paragraph padding
// adjust job description paragraph padding
// make sure icons, title, and info have all the right spacing
// format mobile tile buttons

// TABLET & DESKTOP
// upper
//   title
//   page description
//   tile
// lower
//   wrapper
//   job items
//     title
//     info, 
//     description, 
//     logo, 
//     diagonal,
//     line

export default function Experience({ content }: ExperienceProps) {
  return (
    <Section center label={content?.label}>
      <Wrapper>
        <Upper>
          <Title>{content?.title}</Title>
          <PageDescription>
            { content?.description && content?.description.map((paragraph, index) => <PageParagraph key={`PageParagraph ${index + 1}`}>{paragraph}</PageParagraph>)}
          </PageDescription>
          <Tile href="tel:3142212451" desktop>
            <Icon src={callMe} alt="call me" />
            <Label>CALL ME</Label>
          </Tile>
          <Tile href="mailto:jenna@jennapalmer.info" desktop>
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
                <JobDescription>
                  {content.description && content?.description.map((paragraph, index) => <JobParagraph key={`PageParagraph ${index + 1}`}>{paragraph}</JobParagraph>)}
                </JobDescription>
              </Job>
            ))
          }
          <Tile href="tel:3142212451">
            <Icon src={callMe} alt="call me" />
            <Label>CALL ME</Label>
          </Tile>
          <Tile href="mailto:jenna@jennapalmer.info">
            <Icon src={emailMe} alt="email me"/>
            <Label>EMAIL ME</Label>
          </Tile>
        </Lower>
      </Wrapper>
    </Section>
  )
}