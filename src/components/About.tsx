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
  Question
} from "../styles/components/About"
import { Education } from "../types/content"
import { SocialLink } from "../types/socials"
import socials from "../assets/content/socials.json"

export default function About({ content }: AboutProps) {
  const { links } = socials;
  console.log('test', socials)
  return (
    <>
      <Section label={content?.label}>
        <h2>{content?.title}</h2>
        <AboutWrapper>
          <Content>
            {content?.description && content.description.map((paragraph) => <p>{paragraph}</p>)}
          </Content>
          <Schooling>
            <h3>Education</h3>
            {content?.subSection && content.subSection.education?.map((item: Education) => 
              <School>
                <h4>{item.school}</h4>
                <Degree>{item.degree} - {item.timeline.start}-{item.timeline.end}</Degree>
              </School>
            )}
          </Schooling>
        </AboutWrapper>
      </Section>
      <Section wide>
        <Action>
          <Connect>
            <SocialLabel>Connect with Me</SocialLabel>
            <Socials>
              {links && links.map(({key, label, url}: SocialLink) => 
                <Link href={url}>
                  <Icon src={require("../assets/images/" + key + ".svg")} />
                  <Label>{label}</Label>
                </Link>
              )}
            </Socials>
          </Connect>
          <Prompt>
            <Question>What are you waiting for?</Question>
            <StartProject href="#contact">START A PROJECT</StartProject>
          </Prompt>
        </Action>
      </Section>
    </>
  )
}