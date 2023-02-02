import { useState } from "react";
import callMe from "../assets/images/icons/call-me.svg";
import diagonal from "../assets/images/icons/diagonal-line.svg";
import emailMe from "../assets/images/icons/email-me.svg";
import {
  Content,
  Description,
  DiagonalLine,
  Icon,
  Info,
  Job,
  JobDescription,
  JobParagraph,
  JobTitle,
  Label,
  Logo,
  Lower,
  ModalTrigger,
  Mosaic,
  Paragraph,
  Summary,
  Tile,
  Title,
  Upper,
  Wrapper,
  BottomSpacing,
  OpenToWork
} from "../styles/components/Experience";
import { ExperienceProps } from "../types/Experience";
import ExperienceModal from "./ExperienceModal";
import Section from "./Section";

const defaultModalContent = {
  title: "",
  employer: "",
  location: "",
  description: [""],
  bullets: [""],
  icon: "",
  timeline: {
    start: "",
    end: "",
  },
};

export default function Experience({ content, contact, openToOpportunities }: ExperienceProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(
    content?.subSection?.experience
      ? content?.subSection?.experience[0]
      : defaultModalContent
  );

  const manageSelectedContent = (selectedIndex: number) => {
    if (
      content &&
      content.subSection &&
      content.subSection.experience &&
      content.subSection.experience[selectedIndex]
    ) {
      setSelectedContent(content.subSection.experience[selectedIndex]);
    } else if (
      content &&
      content.subSection &&
      content.subSection.experience &&
      content.subSection.experience[0]
    ) {
      setSelectedContent(content.subSection.experience[0]);
    } else {
      setSelectedContent(defaultModalContent);
    }
  };

  if (!content || !contact) {
    return null;
  }

  return (
    <div data-testid="Experience" id="experience">
      {modalIsOpen && (
        <ExperienceModal
          closeModal={() => setModalIsOpen(!modalIsOpen)}
          content={selectedContent}
        />
      )}
      <Section center label={content?.label}>
        <Wrapper>
          <Upper>
            <Summary>
              <Title data-testid="Title">{content?.title}</Title>
              <Description data-testid="Description">
                {content?.description &&
                  content?.description.map((paragraph, index) => (
                    <Paragraph key={`Paragraph ${index + 1}`}>
                      {paragraph}
                    </Paragraph>
                  ))}
              </Description>
            </Summary>
            <Mosaic desktop>
              <Tile href={`tel:${contact?.cell}`} data-testid="Call">
                <Icon src={callMe} alt="call me" />
                <Label>CALL ME</Label>
              </Tile>
              <Tile href={`mailto:${contact?.email}`} data-testid="Email">
                <Icon src={emailMe} alt="email me" />
                <Label>EMAIL ME</Label>
              </Tile>
            </Mosaic>
          </Upper>
          <Lower>
            {openToOpportunities && (
              <OpenToWork>
                <h3>
                  I am currently open to work, and would love to hear about any opportunities you're aware of. Contact me today!
                </h3>
              </OpenToWork>
            )}
            {content?.subSection?.experience &&
              content?.subSection?.experience.map((job, index) => (
                <Job
                  key={`Job ${index + 1}`}
                  onClick={() => {
                    manageSelectedContent(index);
                    setModalIsOpen(!modalIsOpen);
                  }}
                >
                  <Logo
                    src={require("../assets/images/company/" +
                      job.icon +
                      ".svg")}
                    alt={job.icon}
                  />
                  <Content>
                    <JobTitle data-testid={`Title ${index + 1}`} id="job-title">
                      {job.title}
                    </JobTitle>
                    <Info data-testid={`Info ${index + 1}`} id="job-info">
                      {job.employer} / {job.timeline.start} - {job.timeline.end}
                    </Info>
                  </Content>
                  <DiagonalLine src={diagonal} alt="forward slash" />
                  <JobDescription data-testid={`Details ${index + 1}`}>
                    <JobParagraph key={`Paragraph ${index + 1}`}>
                      {job.description[0]}
                      <ModalTrigger>... Read More</ModalTrigger>
                    </JobParagraph>
                  </JobDescription>
                </Job>
              ))}
            <Mosaic>
              <Tile href={`tel:${contact?.cell}`}>
                <Icon src={callMe} alt="call me" />
                <Label>Call Me</Label>
              </Tile>
              <Tile href={`mailto:${contact?.email}`}>
                <Icon src={emailMe} alt="email me" />
                <Label>Email Me</Label>
              </Tile>
            </Mosaic>
          </Lower>
        </Wrapper>
      </Section>
      {/* TODO: REMOVE THIS ONCE GALLERY IS PUT BACK */}
      <Section wide>
        <BottomSpacing />
      </Section>
    </div>
  );
}
