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
import callMe from "../assets/images/icons/call-me.svg"
import emailMe from "../assets/images/icons/email-me.svg"
import diagonal from "../assets/images/icons/diagonal-line.svg"
import Section from "./Section"
import { useState } from "react"
import ExperienceModal from "./ExperienceModal"

export default function Experience({ content }: ExperienceProps) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const defaultModalContent = {
    title: "",
    employer: "",
    location: "",
    description: [""],
    icon: "",
    timeline: {
      start: "",
      end: ""
    }
  }

  const [ selectedContent, setSelectedContent ] = useState(
    (content &&
    content.subSection &&
    content.subSection.experience && 
    content.subSection.experience[0] )
    ? content.subSection.experience[0] : defaultModalContent);

  const manageSelectedContent = (selectedIndex: number) => {
    if(
      content &&
      content.subSection &&
      content.subSection.experience && 
      content.subSection.experience[selectedIndex]
    ) {
      setSelectedContent(content.subSection.experience[selectedIndex])
    } else if (
      content &&
      content.subSection &&
      content.subSection.experience && 
      content.subSection.experience[0]
    ){
      setSelectedContent(content.subSection.experience[0])
    } else {
      setSelectedContent(defaultModalContent)
    }
  }

  return (
    <div id="experience">
      {modalIsOpen && (<ExperienceModal closeModal={() => setModalIsOpen(!modalIsOpen) } content={selectedContent} />)}
      <Section center label={content?.label}>
        <Wrapper data-testid="Experience">
          <Upper>
            <Summary>
              <Title data-testid="Title">{content?.title}</Title>
              <Description data-testid="Description">
                { content?.description && content?.description.map((paragraph, index) => <Paragraph key={`Paragraph ${index + 1}`}>{paragraph}</Paragraph>)}
              </Description>
            </Summary>
            <Mosaic desktop>
              <Tile href="tel:3142212451" data-testid="Call">
                <Icon src={callMe} alt="call me" />
                <Label>CALL ME</Label>
              </Tile>
              <Tile href="mailto:jenna@jennapalmer.info" data-testid="Email">
                <Icon src={emailMe} alt="email me"/>
                <Label>EMAIL ME</Label>
              </Tile>
            </Mosaic>
          </Upper>
          <Lower>
            {
              content?.subSection?.experience && content?.subSection?.experience.map((job, index) => (
                <Job key={`Job ${index + 1}`} onClick={() => {     
                  manageSelectedContent(index)
                  setModalIsOpen(!modalIsOpen)
              }}>
                  <Logo src={require("../assets/images/company/" + job.icon + ".svg")} alt={job.icon} />
                  <Content>
                    <JobTitle data-testid={`Title ${index + 1}`}>{job.title}</JobTitle>
                    <Info data-testid={`Info ${index + 1}`}>{job.employer} / {job.timeline.start} - {job.timeline.end}</Info>
                  </Content>
                  <DiagonalLine src={diagonal} alt="forward slash" />
                  <JobDescription data-testid={`Details ${index + 1}`}>
                    <JobParagraph key={`Paragraph ${index + 1}`}>
                      {job.description[0]}
                      <ModalTrigger>... Read More</ModalTrigger>
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
    </div>
  )
}