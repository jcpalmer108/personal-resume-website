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
  DiagonalLine,
  JobDescription,
  JobParagraph,
  Mosaic,
  Summary,
  ModalTrigger
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
  console.log(content);
  return (
    <Section center label={content?.label}>
      <Wrapper>
        <Upper>
          <Summary>
            <Title>{content?.title}</Title>
            <Description>
              { content?.description && content?.description.map((paragraph, index) => <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>)}
            </Description>
          </Summary>
          <Mosaic desktop>
            <Tile href="tel:3142212451">
              <Icon src={callMe} alt="call me" />
              <Label>CALL ME</Label>
            </Tile>
            <Tile href="mailto:jenna@jennapalmer.info">
              <Icon src={emailMe} alt="email me"/>
              <Label>EMAIL ME</Label>
            </Tile>
          </Mosaic>
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
                  <JobParagraph key={`Paragraph ${index + 1}`}>
                    {job.description[0]}
                    <ModalTrigger href="#">... Read More</ModalTrigger>
                  </JobParagraph>
                </JobDescription>
              </Job>
            ))
          }
          <Mosaic>
            <Tile href="tel:3142212451">
              <Icon src={callMe} alt="call me" />
              <Label>Call Me</Label>
            </Tile>
            <Tile href="mailto:jenna@jennapalmer.info">
              <Icon src={emailMe} alt="email me"/>
              <Label>Email Me</Label>
            </Tile>
          </Mosaic>
        </Lower>
      </Wrapper>
    </Section>
  )
}