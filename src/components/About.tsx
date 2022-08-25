import Section from "./Section"
import { AboutProps } from "../types/About"
import { 
  AboutWrapper, 
  Action, 
  Content, 
  Schooling, 
  School, 
  Link, 
  Icon, 
  Label,
  Connect,
  Prompt,
  Degree, 
  Socials,
  SocialLabel,
  StartProject,
  Question,
  Description,
  Title,
  BottomSpacing
} from "../styles/components/About"
import { Education } from "../types/content"
import { SocialLink } from "../types/socials"
import socials from "../assets/content/socials.json"

export default function About({ content }: AboutProps) {
  const { links } = socials;
  return (
    <div id="about">
      <Section label={content?.label} >
        <Title data-testid="Title">{content?.title}</Title>
        <AboutWrapper data-testid="About">
          <Content>
            {content?.description && content.description.map((paragraph, index) => <Description data-testid={`Description ${index + 1}`} key={`Description ${index + 1}`}>{paragraph}</Description>)}
          </Content>
          <Schooling data-testid="Schooling">
            <h3>Education</h3>
            {content?.subSection && content.subSection.education?.map((item: Education, index) => 
              <School data-testid={`School ${index + 1}`} key={`School ${index + 1}`}>
                <h4>{item.school}</h4>
                <Degree>{item.degree} - {item.timeline.start}-{item.timeline.end}</Degree>
              </School>
            )}
          </Schooling>
        </AboutWrapper>
      </Section>
      <Section wide>
        <Action>
          <Connect data-testid="Connect">
            <SocialLabel>Connect with Me</SocialLabel>
            <Socials>
              {links && links.map(({key, label, url}: SocialLink) => 
                <Link href={url} key={key}>
                  <Icon src={require("../assets/images/socials/" + key + ".svg")} />
                  <Label>{label}</Label>
                </Link>
              )}
            </Socials>
          </Connect>
          <Prompt>
            <Question>What are you waiting for?</Question>
            <StartProject data-testid="Start a Project" href="#contact">START A PROJECT</StartProject>
          </Prompt>
        </Action>
      </Section>
      <Section wide bottom>
        <BottomSpacing />
      </Section>
    </div>
  )
}