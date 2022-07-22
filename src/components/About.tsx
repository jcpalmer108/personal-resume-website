import Section from "./Section"
import { AboutProps } from "../types/About"
import { 
  AboutWrapper, 
  ConnectWrapper, 
  Content, 
  Schooling, 
  School, 
  Link, 
  Icon, 
  Label,
  ActionWrapper,
  Degree
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
        <ConnectWrapper>
          <span>Connect with Me</span>
          {links && links.map(({key, label, url}: SocialLink) => 
            <Link href={url}>
              <Icon src={require("../assets/images/" + key + ".svg")} />
              <Label>{label}</Label>
            </Link>
          )}
        </ConnectWrapper>
        <ActionWrapper>
          <h4>What are you waiting for?</h4>
          <a href="#contact">Start a project</a>
        </ActionWrapper>
      </Section>
    </>
  )
}